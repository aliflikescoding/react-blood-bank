import PropTypes from 'prop-types';

const DataCard = ({ text1, text2, color }) => {
  return (
    <div className={`${color} ${color == "bg-error" && "text-background"} py-5 pl-5 pr-[15rem] rounded-xl scale-100 transform transition-all duration-100 ease-in-out hover:scale-95`}>
      <div className='flex flex-col gap-5'>
        <h1 className='text-2xl font-bold'>{text1}</h1>
        <h1 className='text-4xl font-bold'>{text2}</h1>
      </div>
    </div>
  )
}

DataCard.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default DataCard