import { Progress, Stack, Text } from '@chakra-ui/react';

function Uploading() {
  return (
    <Stack spacing={7}>
      <Text as="h2" fontSize="xl" color="#4F4F4F">
        Uploading...
      </Text>
      <Progress
        isIndeterminate
        size="sm"
        colorScheme="blue"
        w="340px"
        borderRadius={12}
      />
    </Stack>
  );
}

export default Uploading;
