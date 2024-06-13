import PropTypes from 'prop-types';
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
      display: false,
    },
  },
  responsive: true,
  interaction: {
    intersect: false,
  },
};

const labels = [1, 2, 3, 4];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [5, 10, 15, 10],
      backgroundColor: 'rgba(255, 175, 163, 1)',
    },
  ],
}; 

const StokDarahCard = ({ text }) => {
  return (
    <div className="border-2 rounded-xl flex flex-col">
      <h1 className="text-xl text-gray-400 capitalize">diagram darah {text} setiap minggunya 1 kantong (400ml)</h1>
      <div className='h-[300px]'>
        <Bar options={options} data={data} />
      </div>
      <div>
        
      </div>
    </div>
  )
}

StokDarahCard.propTypes = {
  text: PropTypes.string.isRequired,
}

export default StokDarahCard