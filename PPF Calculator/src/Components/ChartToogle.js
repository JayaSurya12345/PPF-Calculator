import { FaChartPie, FaChartLine } from "react-icons/fa";
import { MdOutlineShowChart } from "react-icons/md";

export default function ChartToggle({ isLineChart, setCheck }) {


    return (
        <div
            className={
                " absolute z-10   w-[61px] h-[33px]  rounded-[30px] border-2 border-solid border-white bg-[#505C6227] shadow-md shadow-[#505C6227] backdrop-blur-[30px] m-0" //place-content-center
            }
        >
            <button
                className={
                    isLineChart
                        ? "absolute w-[23px] h-[23px] rounded-[50px] text-white bg-[#0161FF] border-[2px] border-solid border-white  flex justify-center items-center  top-[3.5px] left-[5px] "
                        : "absolute w-[23px] h-[23px] rounded-[50px] text-[#909090] flex justify-center items-center  top-[3.5px] left-[5px] "
                }
                onClick={() => {
                    setCheck(true);
                }}
            >
                <MdOutlineShowChart />
            </button>
            <button
                className={
                    isLineChart
                        ? "absolute w-[23px] h-[23px] rounded-[50px] text-[#909090] flex justify-center items-center top-[3.5px] right-[5px] "
                        : "absolute w-[23px] h-[23px] rounded-[50px] text-white bg-[#0161FF] border-[2px] border-solid border-white flex justify-center items-center  top-[3.5px] right-[5px] "
                }
                onClick={() => {
                    setCheck(false);
                }}
            >
                <FaChartPie className=" h-[12.74px] w-[13.54px]  " />
            </button>
        </div>
    );

}