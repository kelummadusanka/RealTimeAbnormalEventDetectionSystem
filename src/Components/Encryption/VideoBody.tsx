import { Stack, Text, VStack } from "@chakra-ui/react";
import Videos from "./Videos";
import StatusRounds from "./StatusRounds";
import Details from "./Details";
import React from "react";
function VideoBody() {
  return (
    <Stack spacing={3}>
      <Text fontSize="5xl" fontWeight={"semibold"}>
        Video Detail
      </Text>
      <VStack
        spacing={0}
        borderWidth={"1px"}
        px={4}
        py={4}
        align={"revert"}
        w={"100%"}
        boxShadow="lg"
        p="6"
        rounded="md"
        bg="white"
      >
        <StatusRounds AbnmlDetction={false} decrytp={true} receive={true} />
        <Videos />
      </VStack>
      <Text fontSize="2xl" fontWeight={"semibold"}>
        Advanced Detail
      </Text>

      <Details />
    </Stack>
  );
}

export default VideoBody;
