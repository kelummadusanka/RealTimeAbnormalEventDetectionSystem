import { Box, AspectRatio, Image } from "@chakra-ui/react";
import { video } from "../../Models/model";

const Video: React.FC<video> = (props) => {
  return (
    <Box maxW="sm">
      <AspectRatio minW={"400px"} ratio={4 / 3}>
        
        <Image
          fit={"cover"}
          src={props.imgUrl}
          alt={props.imageAlt}
          borderRadius="xl"
        />
        
      </AspectRatio>

      <Box
        mt="2"
        fontSize={25}
        fontWeight="semibold"
        as="h1"
        lineHeight="tight"
        noOfLines={1}
        textAlign="center"
      >
        {props.title}
      </Box>
    </Box>
  );
};
export default Video;
