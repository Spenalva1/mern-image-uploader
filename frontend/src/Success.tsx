import { CheckCircleIcon } from '@chakra-ui/icons';
import { Button, HStack, Img, Text } from '@chakra-ui/react';
import copy from 'copy-to-clipboard';

interface SuccessProps {
  image: string | null;
}

function Success({ image }: SuccessProps) {
  return (
    <>
      <CheckCircleIcon color="#219653" w="35px" h="35px" />
      <Text as="h2" fontSize="xl" color="#4F4F4F">
        Uploaded Successfully!
      </Text>
      {image && <Img src={image} />}
      <HStack
        p="5px"
        pl="10px"
        background="#F6F8FB"
        maxWidth="100%"
        borderRadius="12"
        spacing={4}
      >
        <Text
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
          fontSize="xs"
        >
          {image}
        </Text>
        <Button
          disabled={!image}
          size="sm"
          px="4"
          colorScheme="blue"
          onClick={() => {
            copy(String(image));
          }}
        >
          Copy link
        </Button>
      </HStack>
    </>
  );
}

export default Success;
