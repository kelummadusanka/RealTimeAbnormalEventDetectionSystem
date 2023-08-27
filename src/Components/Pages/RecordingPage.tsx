import { HStack } from '@chakra-ui/react';
import RecordingPlay from '../Recordings/RecordingPlay';

function RecordingPage(): JSX.Element {
  return (
    <HStack w='full'>
      <RecordingPlay />
    </HStack>
  );
}

export default RecordingPage;
