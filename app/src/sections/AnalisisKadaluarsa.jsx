import DataCard from "../components/DataCard"
import { fakeApiTwo } from '../api/fakeApiTwo';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

const AnalisisKadaluarsa = () => {
  return (
    <div>
      <div className="p-12">
        <h1 className="text-2xl font-bold">Analisis Kadaluarsa</h1>
        <div className="flex flex-wrap gap-12">
          <DataCard text1="Total" text2={`${fakeApiTwo.length}`} color="bg-primary"/>
          <DataCard text1="Kadaluarsa Dalam 7 Hari" text2={`${fakeApiTwo.length}`} color="bg-danger"/>
        </div>
      </div>
      <div className="px-12">
      <h1 className="text-2xl font-bold">Segera Kadarluarsa</h1>
      <div className="border-[1px] overflow-auto h-[500px] rounded-xl">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Th>Blood Type</Th>
                <Th>Expiration Date</Th>
                <Th>Units</Th>
              </Thead>
              <Tbody>
                  {
                    fakeApiTwo.map((content) => (
                      <Tr key={content.id}>
                        <Td>{content.tipeDarah}</Td>
                        <Td><span className="text-brown">{content.expDate}</span></Td>
                        <Td><span className="text-brown hover:underline cursor-pointer">{content.jumlahKantong}</span></Td>
                      </Tr>
                    ))
                  }
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}

export default AnalisisKadaluarsa