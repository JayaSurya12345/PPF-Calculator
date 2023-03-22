import styles from "../styles/PPFInput.module.scss";

export default function DropDownInput({ value, setValue }) {
  return (
    <div className=' w-[39%] lg:ml-[25px]   '>
        <select
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className={
            "text-[#0161ff] h-[45px] w-full color-[#1B1C20] bg-[#D1E3FF] bg-opacity-[0.39] border-2 border-solid border-[#9BB0D3] rounded-[100px] text-center text-[14px] font-semibold [@media(min-width:1920px)]:text-[18px] "
          }
        >
          <option value="1">Annualy</option>
          <option value="4">Quaterly</option>
          <option value="2">SemiAnnualy</option>
          <option value="12">Monthly</option>
        </select>
      </div>
  );
}
