import dashboard from "../assets/dashboard.svg"
import info from "../assets/info.svg"
import kadar from "../assets/kadar.svg"
import { Link } from 'react-router-dom';
import { useState } from "react";

const Sidebar = () => {
  const [selectNum, setSelectNum] = useState(1);

  return (
    <div className="py-8 px-[5rem] bg-background2 flex justify-center items-left gap-7 flex-col h-[92vh]">
      <Link className={`p-4 rounded-[30px] flex items-center gap-5 ${selectNum === 1 && "bg-primary"}`} onClick={() => setSelectNum(1)} to="dashboard">
        <img src={dashboard} alt="" className="w-[50px]"/>
        <h1 className="text-2xl font-medium">Dashboard</h1>
      </Link>
      <Link className={`p-4 rounded-[30px] flex items-center gap-5 ${selectNum === 2 && "bg-primary"}`} onClick={() => setSelectNum(2)} to="/infopendonor">
        <img src={info} alt="" className="w-[50px]"/>
        <h1 className="text-2xl font-medium">Informasi Pendonor</h1>
      </Link>
      <Link className={`p-4 rounded-[30px] flex items-center gap-5 ${selectNum === 3 && "bg-primary"}`} onClick={() => setSelectNum(3)} to="/analisiskadaluarsa">
        <img src={kadar} alt="" className="w-[50px]"/>
        <h1 className="text-2xl font-medium">Analisis Kadaluarsa</h1>
      </Link>
    </div>
  )
}

export default Sidebar