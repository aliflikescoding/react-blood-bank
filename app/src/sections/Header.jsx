import flag from "../assets/flag.svg"
import profile from "../assets/profile.svg"

const Header = () => {
  return (
    <header className="text-manrope flex justify-between p-5 border-b-2 border-text">
      <div className="flex text-xl items-center gap-2">
        <img src={flag} alt="flag" className="w-[20px]"/>
        <h1 className="font-medium">Blood Bank</h1>
      </div>
      <div>
        <img src={profile} alt="" />
      </div>
    </header>
  )
}

export default Header