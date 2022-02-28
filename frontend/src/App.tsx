import { Center, VStack } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { uploadImage } from './api';
import environment from './environment/environment';
import Success from './Success';
import Upload from './Upload';
import Uploading from './Uploading';

function App() {
  const [state, setState] = useState<'upload' | 'uploading' | 'success'>(
    'upload'
  );
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const onFileUpload = useCallback(async (file: File) => {
    setState('uploading');

    try {
      const response = await uploadImage(file);
      setUploadedImage(`${environment.api}/${response.data.image}`);
      setState('success');
    } catch (error) {
      setState('upload');
      console.error(error);
    }
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
        {state === 'success' && <Success image={uploadedImage} />}
      </VStack>
    </Center>
  );
}

export default App;
