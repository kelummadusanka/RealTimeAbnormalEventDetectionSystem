import { Stack } from "@chakra-ui/react";
import Video from "./Video";
import { video as vid } from "../../Models/model";
import { useState, useEffect } from "react";
import {createCon,initSource} from "../../../api/mlModel";

function Videos() {
  const [encryptedImageUrl, setEncryptedImageUrl] = useState<string>("");
  const [originalImageUrl, setOriginalImageUrl] = useState<string>("");
  
  useEffect(() => {
    initSource(setEncryptedImageUrl,setOriginalImageUrl);

  const ws = createCon();

    return () => {
       
    };
  }, []);

  const videos: vid[] = [
    {
      imgUrl: encryptedImageUrl,
      imageAlt: "Dan Abramov",
      title: "Encrypted Video",
    },
    {
      imgUrl: originalImageUrl,
      imageAlt: "Dan Abramov",
      title: "Original Video",
    },
  ];


  return (
    <Stack p={5} direction={"row"} justifyContent="space-between">
      {videos.map((video, index) => (
        <Video
          key={index}
          imageAlt={video.imageAlt}
          imgUrl={video.imgUrl}
          title={video.title}
        />
      ))}
    </Stack>
  );
}

export default Videos;
