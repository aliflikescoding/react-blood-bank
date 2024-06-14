import { getStock } from "./functions";
import fakeApi from "../api/fakeApi";
import DataCardTwo from "../components/DataCardTwo";
import masukanDarahBulan from "../api/masukanDarahBulan";
import { getBloodTypes } from "./functions";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Masukan Darah 1 Bulan'
    },
  },
  responsive: true,
  interaction: {
    intersect: false,
  },
};

const labels = getBloodTypes(masukanDarahBulan);

export const data = {
  labels,
  datasets: [
    {
      label: 'Keluaran',
      data: masukanDarahBulan.map((content) => content.pengeluaran),
      backgroundColor: 'rgba(255, 175, 163, 1)',
    },
    {
      label: 'Masukan',
      data: masukanDarahBulan.map((content) => content.masukan),
      backgroundColor: 'rgb(128, 202, 255)',
    },
  ],
}; 

function Dashboard() {
  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="py-5">
        <h1 className="text-xl font-bold">Stok Darah</h1>
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          {
            getStock(fakeApi).map((stock, index) => (
              <DataCardTwo key={index} text1={`${stock.title}`} text2={`${stock.amount}`} color={`${stock.amount < 5 ? "bg-danger text-background" : "bg-primary"}`} />
            ))
          }
        </div>
      </div>
      <div className="flex flex-col">
        <h1>Grafik darah Masuk dan Keluar Dalam 1 bulan</h1>
        <div className="h-[350px]">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard