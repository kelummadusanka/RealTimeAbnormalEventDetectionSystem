import { Box, HStack } from "@chakra-ui/react"
import { VideoStatus } from "../../Models/model"
const StatusRounds:React.FC<VideoStatus>=({receive,decrytp,AbnmlDetction})=> {
  return (
    <HStack h={10} px={5} borderColor='gray.200' spacing={2}>

        <Box borderRadius={"full"} background={receive?"green.400":"red.600"} boxSize={5}></Box>
        <Box borderRadius={"full"} background={decrytp?"green.400":"red.500"} boxSize={5}></Box>
        <Box borderRadius={"full"} background={AbnmlDetction?"green.400":"red.500"} boxSize={5}></Box>

    </HStack>
  )
}

export default StatusRounds