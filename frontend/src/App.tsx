import { Center, VStack } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import Success from './Success';
import Upload from './Upload';
import Uploading from './Uploading';

function App() {
  const [state, setState] = useState<'upload' | 'uploading' | 'success'>(
    'upload'
  );
  const [uploadedFile, setUploadedFile] = useState<string | ArrayBuffer | null>(
    null
  );

  const onFileUpload = useCallback((file: File) => {
    setState('uploading');

    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedFile(e.target?.result || null);
    };
    reader.readAsDataURL(file);

    setTimeout(() => {
      setState('success');
    }, 1000);
  }, []);

  return (
    <Center
      background="#fafafb"
      minHeight="100vh"
      fontFamily="poppins"
      fontWeight="500"
    >
      <VStack
        background="#ffffff"
        py="9"
        px="8"
        borderRadius="12"
        spacing={6}
        w="500px"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      >
        {state === 'upload' && <Upload onFileUpload={onFileUpload} />}
        {state === 'uploading' && <Uploading />}
        {state === 'success' && <Success image={uploadedFile} />}
      </VStack>
    </Center>
  );
}

export default App;
