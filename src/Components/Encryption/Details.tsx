import {MdOutput,MdOutlineNoEncryption} from 'react-icons/md'
import {LuFileInput} from 'react-icons/lu'
import {VscServerProcess} from 'react-icons/vsc'
import {AiOutlineWarning} from 'react-icons/ai'
import {TbKeyframes} from 'react-icons/tb'
import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import {set_fps} from "../../../api/mlModel";
import { useState } from 'react'



const Details = () => {
  const [fps, setfps] = useState<string>();
  set_fps(setfps);

  const table = [
    { name: "Incomming video", value: "Ok", icon: LuFileInput },
    { name: "Decryption process", value: "Ok", icon: VscServerProcess  },
    { name: "Anomaly detectiono", value: "Ok", icon: AiOutlineWarning },
    { name: "Input frame rate", value: "Ok", icon: TbKeyframes },
    { name: "Output frame rate", value: fps, icon: MdOutput  },
    { name: "Encrytion", value: "AES", icon:MdOutlineNoEncryption },
  ];
  return (
    <TableContainer maxW={"500px"} boxShadow='lg' p='6' rounded='md' bg='white'>
      <Table variant="simple">
        <Tbody>
          {table.map((row,key) => {
            return (
              <Tr key={key}>
                <Td py={2}>
                    
                  <row.icon w={5} h={5} color="green" />
                </Td >
                <Td py={2}>{row.name}</Td>
                <Td py={2}>{row.value}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Details;
