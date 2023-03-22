import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Input from "../Components/PPFInput.js";
import LineChart from "../Components/PPFLineChart.js";
import DoughnutChart from "../Components/PPFDoughnutChart.js";
import CollapsibleBox from "../Components/PPFCollapsibleBox.js";
import RelatedCalculator from "../Components/PPFRelatedCalculator.js";
import { FaChartPie, FaChartLine } from "react-icons/fa";
import { MdOutlineShowChart } from "react-icons/md";
import DropDownInput from "../Components/PPFDropDownInput.js";

export default function Home() {
  const [annualInvestment, setannualInvestment] = useState(500);
  const [interestRate, setinterestRate] = useState(5);
  const [timePeriod, settimePeriod] = useState(5);
  const [InvestmentFrequency,setInvestmentFrequency]=useState(1);
  
  let [maturity,setMaturity] =useState(0);
  const [output, setOutput] = useState(25000);
  const [totalAmount, settotalAmount] = useState(125000);

  const [isLineChart, setCheck] = useState(true);
  const [graphPoints, setGraphPoints] = useState([5000, 10000, 15000, 20000, 25000]);
  
  function calculate() {
    maturity =Math.ceil(annualInvestment*((((Math.pow(8.1,timePeriod/100)))-1)/(timePeriod/100)));
    if (maturity === Infinity || isNaN(maturity)) {
      setOutput(0);
    }
    else {
      setOutput(maturity);
    }
    settotalAmount(maturity+annualInvestment);
    
    calculateGraphPoints();
  }


  function calculateGraphPoints() {
    let points = [];
   // points.push(annualInvestment);
    for (let i = 1; i <= timePeriod; i++) {
      points.push(Math.ceil(annualInvestment*((((Math.pow(8.1,i/100)))-1)/(i/100))));
    }
    setGraphPoints(points);
  }

  return (
    <>
      <Head>
        <title>PPF Calculator</title>
        <link rel="icon" href="./logo.png" />
        <link href="/dist/output.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          as="font"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp;family=Rubik:wght@400;500;600&amp;display=swap"
        />
        <meta name="description" content="PPF Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Background image */}
      <div
        className={
          "bg-bg_image w-full h-full bg-center bg-cover object-cover fixed"
        }
      />

      <main
        className={
          "relative [@media(max-width:1200px)]:p-5 [@media(min-width:1200px)]:p-20 w-full overflow-x-hidden flex-col justify-between text-neutral-700"
        }
      >
        <div>
          {/* Heading */}
          <div
            className={
              "text-zinc-900 text-5xl font-semibold text-center leading-tight [@media(max-width:300px)]:text-3xl"
            }
          >
            <span className={"text-blue-600"}>PPF </span>{" "}
            Calculator
          </div>
          {/* Subheading */}
          <p className={"text-neutral-700 mt-3 [@media(min-width:200px)]:text-md [@media(max-width:300px)]:text-sm lg:text-lg text-center  "}>
          Public Provident Fund (PPF) is a long-term savings scheme offered by the government of India. It is a tax-free investment option that provides an individual 
          with a secure and low-risk investment option. This calculator can be used to estimate the amount of savings that an individual can accumulate in a PPF account over a specified period of time. The calculator 
          takes into account the amount of contribution made and the duration of investment, and provides an estimate of the total amount that will be accumulated at maturity.
          </p>
        </div>

        {/* Calculator and side pannel */}
        <div
          className={
            "flex w-full xl:max-h-[403px] lg:max-h-[516px] mt-[50px] [@media(min-width:200px)]:gap-4 lg:justify-between [@media(max-width:1000px)]:flex-col md:flex-col lg:flex-row  "
          }
        >
          {/* Calculator and graph (WRAPPER) */}
          <div
            className={
              "flex [@media(max-width:1000px)]:flex-col flex-row [@media(min-width:200px)]:gap-10 p-[30px] [@media(max-width:1000px)]:w-[100%] lg:w-[75%] border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px]"
            }
          >
            {/* Calculator */}
            <div className={"text-left text-lg [@media(max-width:1000px)]:w-[100%] w-[50%] "}>
              {/* Input box wrapper */}
              <div
                className={
                  "flex flex-col font-medium space-y-[20px]"
                }
              >
                {/* Input box */}
                {/input boxes/}
                <div>
                  {/Yearly investment block/}
                  <div>Yearly investment</div>
                  <Input
                    id='initialInvestment'
                    type='rupees'
                    min={500}
                    max={150000}
                    step={500}
                    value={annualInvestment}
                    setValue={setannualInvestment}
                  />
                </div>


                <div>
                  {/Time Period(Yrs) block/}
                  <div>Time Period (Yrs)</div>
                  <Input
                    id='finalInvestment'
                    min={15}
                    max={50}
                    step={1}
                    value={timePeriod}
                    setValue={settimePeriod}
                  />
                </div>

                <div className=" flex  justify-between flex-warp ">
                  {/Investment frequency block/}
                  <div className="w-[58%]">Investment frequency</div>
                  <DropDownInput value={InvestmentFrequency} setValue={setInvestmentFrequency}/>
                </div>

                <div className=" flex  justify-between flex-warp ">
                  {/Rate of Interest block/}
                  <div className='w-[58%]'>Rate of interest</div>
                  <div className='w-[39%]'>
                  <div className={'w-[150px] h-[40px] bg-[#D1E3FF] bg-opacity-[0.39] border-2 border-solid border-[#9BB0D3] rounded-[100px] text-center font-semibold '}>7.1%</div>
                  </div>
                </div>
              </div>

              {/* Control Box Wrapper */}
              <div
                className={
                  "flex flex-warp justify-center mt-[40px] cursor-pointer"
                }
              >
                {/* Control boxes */}
                <div
                  className={
                    "border-[0.1rem] border-dashed border-[#36b366] p-[4px] rounded-[35px] w-[65%]"
                  }
                >
                  <div
                    className={
                      "text-center text-white font-semibold rounded-[35px] p-[0.3rem] shadow-lg shadow-[#36b3665d] bg-[#00d382]"
                    }
                    onClick={calculate}
                  >
                    Calculate
                  </div>
                </div>
              </div>
            </div>

            {/* vertical line */}
            <div
              className={
                "-my-4 -mx-2 [@media(max-width:1000px)]:-mx-2  [@media(max-width:1000px)]:h-0 [@media(max-width:1000px)]:w-auto lg:h-auto lg:w-0 rounded-[50px] border-2 border-solid border-[#7070701A]"
              }
            ></div>

            {/* Charts/Graph wrapper */}
            <div className={"[@media(max-width:1000px)]:w-[100%] lg:w-[50%]"}>
              {/* Toggle Button */}
              <div
                className={
                  " absolute flex flex-wrap z-10 place-content-center  w-[61px] h-[33px]  rounded-[30px] border-2 border-solid border-white bg-[#505C6227] shadow-md shadow-[#505C6227] backdrop-blur-[30px] m-0"
                }
              >
                <button
                  className={
                    isLineChart
                      ? " w-[23px] h-[23px] rounded-[50px] text-white bg-[#0161FF] border-2 border-solid border-white p-[2px] mx-[1px]"
                      : " w-[23px] h-[23px] rounded-[50px] p-[2px] text-[#909090] mx-[1px]"
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
                      ? " w-[23px] h-[23px] rounded-[50px] p-[2px] text-[#909090] mx-[1px]"
                      : " w-[23px] h-[23px] rounded-[50px] text-white bg-[#0161FF] border-2 border-solid border-white p-[2px] mx-[1px]"
                  }
                  onClick={() => {
                    setCheck(false);
                  }}
                >
                  <FaChartPie />
                </button>
              </div>

              {/* Charts/Graph */}
              <div className={" relative object-right-top [@media(min-width:200px)]:h-auto md:w-[100%]"}>
                {isLineChart ? (
                  <>
                    <LineChart points={graphPoints} />
                    <div className={"mb-3"}>
                      For an investment of {" "}
                      <span className={"font-semibold"}>
                      ₹{annualInvestment.toLocaleString("en-In")}
                      </span>{" "}at {interestRate}% simple interest for a period of
                       {" "}
                      <span className={"font-semibold"}>
                        {timePeriod}
                      </span>{" "}
                      years,{" "}the simple interest earned will be
                      <span className={"font-semibold"}>
                      ₹{output.toLocaleString("en-In")}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <DoughnutChart
                      totalInterestAmount={maturity} totalInvestmentAmount={annualInvestment} dependency={maturity} 
                    />
                    <div className={"flex-col"}>
                      <div className={"flex justify-between font-medium mb-3"}>
                        <div>Total Investment</div>
                        <div className={"font-semibold"}>
                        ₹{annualInvestment.toLocaleString("en-In")}
                        </div>
                      </div>
                      <div className={"flex justify-between font-medium mb-3"}>
                        <div>Total Interest</div>
                        <div className={"font-semibold"}>
                        ₹{output.toLocaleString(
                            "en-In"
                          )}
                        </div>
                      </div>
                      <div className={"flex justify-between font-medium mb-3"}>
                        <div>Maturity Value</div>
                        <div className={"font-semibold"}>
                        ₹{totalAmount.toLocaleString("en-In")}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Side Pannel */}
          <div
            className={
              "[@media(max-width:1000px)]:w-[100%] lg:w-[23%] lg:max-h-[516px] xl:max-h-[403px] px-[20px] py-[22px] [@media(max-width:1000px)]:mt-[20px] lg:mt-0 border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px] overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            }
          >
            <div className={"font-bold "}>How to use this calculator?</div>
            <CollapsibleBox
              heading={'Public Providend Fund'}
              content={'Public Provident Fund (PPF) is a long-term savings scheme offered by the government of India.'}
            />
      
      <CollapsibleBox
              heading={"Historical interest rates?"} type='sidepannel'>
                  <>
                    <div className="w-full">
                        <table className=" border-2 border-solid w-full ">
                          <thead>
                            <tr className=" border-2 border-solid ">
                            <th className=" border border-solid p-2 ">Financial Year</th>
                            <th className=" border border-solid p-2 ">Interest Rate</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">October to December 2022</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">July to September 2022</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">April to June 2022</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">January to March 2022</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">October to December 2021</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">July to September 2021</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">April to June 2021</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">January to March 2021</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">October to December 2020</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">July to September 2020</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">April to June 2020</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.1%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">January to March 2020</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.90%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">October to December 2019</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.90%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">July to September 2019</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.90%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">April to June 2019</td>
                              <td className=" border border-solid px-4 py-2 text-center">8.0%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">January to March 2019</td>
                              <td className=" border border-solid px-4 py-2 text-center">8.0%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">October to December 2018</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.8%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">July to September 2018</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.8%</td>
                            </tr>
                            <tr className=" border border-solid ">
                              <td className=" border border-solid px-4 py-2 text-center">April to June 2018</td>
                              <td className=" border border-solid px-4 py-2 text-center">7.9%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </>
                    </CollapsibleBox>
            <CollapsibleBox
              heading={'Maturity value of the investment'}
              content={'You can easily calculate the maturity value of your investment by using the FundsIndia PPF calculator.'}
            />
             <CollapsibleBox
              heading={'Lock-in Period'}
              content={'The funds invested in a PPF account have a lock-in period of 15 years and the maturity period is 15 years from the date of opening the account. '}
            />
            
          </div>
        </div>

        {/* FAQ box */}
        <div
          className={
            "px-[25px] py-[10px] mt-[40px] border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px]"
          }
        >
          <CollapsibleBox
            heading={'What is Public Provident Fund?'}
            content={'Public Provident Fund (PPF) is a long-term savings scheme offered by the government of India. It is a tax-free investment option that provides an individual with a secure and low-risk investment option.'}
          />

          <CollapsibleBox
            heading={'What is the lock-in period of PPF investment?'}
            content={'The funds invested in a PPF account have a lock-in period of 15 years and the maturity period is 15 years from the date of opening the account.'}
          />

          <CollapsibleBox
            heading={'What is the minimum investment'}
            content={'The minimum investment in a PPF account is Rs. 500 and the maximum investment is Rs. 1.5 Lakhs per financial year.'}
          />

          <CollapsibleBox
            heading={'What are the tax implications of a PPF investment?'}
            content={'The interest earned and the maturity amount are exempt from tax under Indian Income Tax laws.'}
          />

          <CollapsibleBox
            heading={'How can you use the PPF calculator?'}
            content={'The calculator takes into account the amount of contribution made and the duration of investment, and provides an estimate of the total amount that will be accumulated at maturity. Just plug-in the required values'}
          />



          <CollapsibleBox
            heading={'How does the PPF calculator work?'}
            content={
            <>
            The PPF calculator takes 2 inputs namely, Yearly investment and tenure of investment.
            <br></br>It uses the following logic<br></br><br></br> <b>The formula for this is: F= P[({'{'}(1+i)^n{'}'}-1)/I] <br></br>Here,   F = Maturity proceeds of the PPF<br></br> P = Annual installments  <br></br>n = Number of years <br></br>I = Rate of Interest/100</b></>}
          />

          <CollapsibleBox
            heading={'When does my PPF investment mature?'}
            content={'A Public Provident Fund (PPF) account matures after 15 years from the date of opening the account. The account can be extended for a block of 5 years at a time, after the maturity period, by submitting a request to the bank or post office where the account is held.'}
          />
        </div>

        {/* Related Calculators */}
        <div className={"my-[30px] "}>
          <div className={"font-bold mb-[14px] text-[#464143]"}>
            Related Calculators
          </div>

          <div className={"no-scrollbar overflow-x-auto flex -mx-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"}>
            <RelatedCalculator name={"SWP Calculator"} path={"#"} first={true} />

            <RelatedCalculator name={"CAGR Calculator"} path={"#"} />

            <RelatedCalculator name={"NPS Calculator"} path={"#"} />

            <RelatedCalculator name={"Compound Interest Calculator"} path={"#"} />

            <RelatedCalculator name={"SD Calculator"} path={"#"} />

            <RelatedCalculator name={"SIP Calculator"} path={"#"} />

            <RelatedCalculator name={"Income Tax Calculator"} path={"#"} />

            <RelatedCalculator name={"SSY Calculator"} path={"#"} />

            <RelatedCalculator name={"Simple Interest calculator"} path={"#"} />

            <RelatedCalculator name={"EPF Calculator"} path={"#"} />
          </div>
        </div>
      </main>
    </>
  );
}