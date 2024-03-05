import Call from "../assets/Group 46.png";
import Icon from "../assets/moptro logo@2x.png";
import { Progress } from "flowbite-react";
import PropTypes from 'prop-types';
export default function Home() {
  return (
    <>
    <div className="">
      <div className="flex   flex-row-reverse">
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
      <div className="mt-6 rounded-3xl pb-4  bg-[#5E5E5E82] ">
        <h1 className="text-white text-center font-bold p-2 rounded-full bg-[#1A2C2C99]">
          Employee Productivity Dashboard
        </h1>
        <ul className="p-4 space-y-4">
 <li><CustomProgressBar progress={4} mainText="Productivity on Monday" reverseText="10%" color="green" /></li>
 <li><CustomProgressBar progress={92} mainText="Productivity on Tueday" reverseText="10%" color="green" /></li>
 <li><CustomProgressBar progress={24} mainText="Productivity on Wednesday" reverseText="10%" color="green" /></li>
 <li><CustomProgressBar progress={36} mainText="Productivity on Thursday" reverseText="10%" color="green" /></li>
 <li><CustomProgressBar progress={96} mainText="Productivity on Friday" reverseText="10%" color="green" /></li>
 <li><CustomProgressBar progress={15} mainText="Productivity on Saturday" reverseText="10%" color="green" /></li>
        </ul>
      </div>
      </div>
    </>
  );
}

function CustomProgressBar({ progress, color = 'green', mainText = 'Green' }) {
  return (
    <div>
      <div className="flex p-2">
        <div className={`text-base font-medium flex w-full text-white `}>
          {mainText}
        </div>
        <div className={`flex flex-row-reverse text-base font-medium text-[#36A546]`}>
          {progress}%
        </div>
      </div>
      <Progress progress={progress} color={color} className="pl-2 bg-gray-0" />
    </div>
  );
}

CustomProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  color: PropTypes.string,
  mainText: PropTypes.string,
  reverseText: PropTypes.string,
};

