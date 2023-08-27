import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Stack,
  Text,
  Image,
  Badge,
  Icon,
  AspectRatio,
} from "@chakra-ui/react";
import { PiPlayLight } from "react-icons/pi";
import { context } from "./RecordingPlay";
import { useContext } from "react";
import { VideoInfoProps } from "../../Models/model";

const savedVideo = (props: VideoInfoProps) => {
  const { Date, Time, Risk } = props;
  const { setDisplay, setInfo } = useContext(context);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="filled"
      w="full"
      maxW="800px"
      minH="240"
    >
      <AspectRatio w="300px" ratio={4 / 3} borderRadius="2xl">
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "300px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />
      </AspectRatio>
      

      <Stack>
        <CardBody>
          <Heading letterSpacing="wide" size="md" fontWeight="semibold">
            {Date} Thursday
          </Heading>

          <Text mt="1" letterSpacing="wide" color="gray.500">
          {Time} <span>UTC + 0530</span>
          </Text>

          <Badge
            mt="8"
            variant="subtle"
            colorScheme={Risk=='High'?"red":Risk=='Medium'?'yellow':'green'}
            fontSize="md"
            px="3"
            borderRadius="md"
          >
           {Risk}
          </Badge>
        </CardBody>

        <CardFooter mt={{ base: "10%", sm: "-10px" }}>
          <Button
            variant="solid"
            colorScheme="blue"
            px="5"
            onClick={() => {
              setDisplay("flex");
              setInfo(props);
            }}
          >
            <Icon as={PiPlayLight} mr="3" />
            Play
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default savedVideo;
