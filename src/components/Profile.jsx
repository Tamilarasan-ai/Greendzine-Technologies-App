import Call from "../assets/Group 46.png";
import Icon from "../assets/moptro logo@2x.png";
import Search from "./Search";

export default function Profile() {
  return (
    <div>
     <div className="flex flex-row-reverse">
        <img
          src={Call}
          alt="Call Icon"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <div className="relative flex justify-center">
      <img src={Icon} alt="Logo" className="w-[80px] h-[80px]  object-cover" />
      <div className="absolute top-0 right-[6rem] flex items-center justify-center bg-black text-white w-8 h-8 rounded-full">
        <p className="text-lg text-[#36A546] font-bold">4</p>
      </div>
    </div>
      <Search/>
    </div>
  )
}
