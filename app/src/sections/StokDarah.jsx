import StokDarahCard from "../components/StokDarahCard"
import leftArrow from "../assets/leftArrow.svg"
import rightArrow from "../assets/rightArrow.svg"

const StokDarah = () => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-2xl">Stok Darah Perbulan</h1>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <StokDarahCard text="A+"/>
        <StokDarahCard text="A-"/>
        <StokDarahCard text="B+"/>
        <StokDarahCard text="B-"/>
      </div>
      <div className="flex justify-between">
        <img src={leftArrow} alt="left arrow" />
        <img src={rightArrow} alt="right arrow" />
      </div>
    </div>
  )
}

export default StokDarah