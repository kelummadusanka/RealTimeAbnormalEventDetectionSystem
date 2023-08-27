import { AspectRatio, HStack, Heading, VStack } from "@chakra-ui/react";
import MainPlayLIst from "./MainPlayLIst";
import VideoInfo from "./VideoInfo";
import ReactPlayer from "react-player";
import { createContext, useState } from "react";
import { VideoInfoProps } from "../../Models/model";

export const context = createContext({
  setDisplay: (x: string) => {},
  setInfo: (x: VideoInfoProps) => {},
});

function RecordingPlay() {
  const [display, setDisplay] = useState("none");
  const [info, setInfo] = useState({
    url: "",
    Camera: "",
    Date: "",
    Time: "",
    Duration: "",
    Risk: "",
  });

  return (
    <context.Provider
      value={{
        setDisplay: (x: string) => setDisplay(x),
        setInfo: (x: VideoInfoProps) => setInfo(x),
      }}
    >
      <HStack boxShadow="base" w="100%" h="100%">
        <VStack
          display={display}
          p={5}
          flex={2}
          boxShadow="base"
          w="100%"
          h="100%"
        >
          <Heading alignSelf='baseline'>Video Name</Heading>
          <AspectRatio w="full" ratio={4 / 3} borderRadius="2xl">
            <ReactPlayer url={info.url} controls width="640" height="360" />
          </AspectRatio>
          <VideoInfo {...info} />
        </VStack>


        <VStack flex={1} w="100%" h="100%">
          <MainPlayLIst />
        </VStack>
      </HStack>
      
    </context.Provider>
  );
}

export default RecordingPlay;
