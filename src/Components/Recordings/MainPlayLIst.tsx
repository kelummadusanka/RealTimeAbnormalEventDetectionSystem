import { Divider, Heading, VStack } from "@chakra-ui/react";
import SavedVideo from "./savedVideo";
import { VideoInfoProps, playList } from "../../Models/model";
import { useEffect, useState } from "react";

function MainPlayLIst() {
  const [playlist, setplaylist] = useState<VideoInfoProps[] | undefined>();
  useEffect(() => {
    setplaylist(playList);
  }, []);

  return (
    <VStack spacing="4" p="6" rounded="md" bg="white" maxH="99vh" w="full">
      <Heading alignSelf="baseline" fontWeight={{ base: "bold", sm: "light" }}>
        Recordings
      </Heading>
      <Divider></Divider>
      <VStack spacing="4" overflowY="auto" w="full">
        {playlist?.map((vid, key) => {
          return <SavedVideo key={key} {...vid} />;
        })}
      </VStack>
    </VStack>
  );
}

export default MainPlayLIst;
