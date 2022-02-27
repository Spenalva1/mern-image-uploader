import { CheckCircleIcon, CheckIcon } from '@chakra-ui/icons';
import { Button, HStack, Img, Text } from '@chakra-ui/react';
import copy from 'copy-to-clipboard';
import img from './assets/dnd.svg';

interface SuccessProps {
  image: string | ArrayBuffer | null;
}

function Success({ image }: SuccessProps) {
  const imageUrl =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel asdf asdf';

  return (
    <>
      <CheckCircleIcon color="#219653" w="35px" h="35px" />
      <Text as="h2" fontSize="xl" color="#4F4F4F">
        Uploaded Successfully!
      </Text>
      <Img src={String(image) || img} />
      <HStack
        p="5px"
        pl="10px"
        background="#F6F8FB"
        maxWidth="100%"
        borderRadius="12"
      >
        <Text
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
          fontSize="xs"
        >
          {imageUrl}
        </Text>
        <Button
          size="sm"
          colorScheme="blue"
          onClick={() => {
            copy(imageUrl);
          }}
        >
          Copy link
        </Button>
      </HStack>
    </>
  );
}

export default Success;
