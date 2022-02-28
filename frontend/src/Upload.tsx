import { Button, Input, Text, VStack, Img } from '@chakra-ui/react';
import { ChangeEvent, DragEvent, useCallback } from 'react';
import dndImg from './assets/dnd.svg';
import './styles.css';

const ACCEPTED_TYPES = ['image/png', 'image/gif', 'image/jpeg'];

interface UploadProps {
  onFileUpload: (file: File) => void;
}

function Upload({ onFileUpload }: UploadProps) {
  const handleDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const image = e.dataTransfer.items[0];
      if (!image) return;
      if (!ACCEPTED_TYPES.some((type) => type === image.type)) {
        return;
      }
      const file = image.getAsFile();
      if (!file) return;
      onFileUpload(file);
    },
    [onFileUpload]
  );

  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const onFileChosen = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;
      const file = e.target.files[0];
      if (!ACCEPTED_TYPES.some((type) => type === file.type)) {
        return;
      }
      onFileUpload(file);
    },
    [onFileUpload]
  );

  return (
    <>
      <Text as="h2" fontSize="xl" color="#4F4F4F">
        Upload your image
      </Text>
      <Text fontSize="xs" color="#828282">
        File should be Jpeg, Png...
      </Text>
      <VStack
        background="#F6F8FB"
        w="100%"
        py="9"
        spacing="9"
        borderRadius="12"
        className="border-dashed"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Img src={dndImg} alt="drag and drop" />
        <Text as="span" fontSize="xs" color="#828282">
          Drag and drop your image here
        </Text>
      </VStack>
      <Text as="span" fontSize="xs" color="#828282">
        Or
      </Text>
      <Button as="label" htmlFor="file" colorScheme="blue">
        Choose a file
      </Button>
      <Input onChange={onFileChosen} display="none" type="file" id="file" />
    </>
  );
}

export default Upload;
