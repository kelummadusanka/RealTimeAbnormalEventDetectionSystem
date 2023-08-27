import { BiCctv } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { Divider, Heading, Table, Tbody, VStack } from "@chakra-ui/react";
import { VideoInfoProps } from "../../Models/model";



function VideoInfo(props: VideoInfoProps) {

  const data = [
    { name: "Camera", value: props.Camera, icon: BiCctv },
    { name: "Date", value: props.Date, icon: SlCalender },
    { name: "Time", value: props.Time, icon: BsClock },
    { name: "Duration", value: props.Duration, icon: GiSandsOfTime },
    { name: "Risk Level", value: props.Risk, icon: MdOutlineSecurity },
  ];
  return (
    <VStack w="full" align="baseline" p={4} borderRadius="md">
      <Heading fontSize="xl">Recording Details</Heading>
      <Divider />
      <Table>
        <Tbody fontSize="lg" fontWeight="semibold" h={250}>
          {data.map((row, key) => {
            return (
              <tr key={key}>
                <td width="50px">
                  <row.icon />
                </td>
                <td>{row.name}</td>
                <td>{row.value}</td>
              </tr>
            );
          })}
        </Tbody>
      </Table>
    </VStack>
  );
}

export default VideoInfo;
