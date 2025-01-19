import investment from "../dataPNG/Investment.png";
import rectangle from "../dataPNG/Rectangle 3 (1).png";
import connector from "../dataPNG/Connector-pic.png";
export const Home = () => {
  return (
    <main className="relative z-10 text-white h-screen bg-opacity-50">
      <div className="flex flex-col justify-center items-center h-screen max-w-[1200px] mx-auto text-white">
        <div className="w-full flex justify-center items-center text-7xl">
          When Innovation
        </div>
        <div className=" flex justify-between text-7xl mt-4">
          <div className="mr-6">Meets</div>
          <img src={investment} alt="" className="" />
        </div>
        <div className=" text-[20px] mt-5 text-[#B0FAFFB2]">
          Empowering Trading Through Advanced Technology
        </div>
        <button className="h-[44px] w-[133px] rounded-[12px] bg-[#8BF9E803] shadow-[inset_0px_0px_40px_0px_#8BF9E833] backdrop-blur-[7.5px] mt-10">
          Open dApp
        </button>
      </div>

      <div id="Container" className="bg-[#00161d]">
        <div className="pt-[80px]  flex  justify-center items-center p-[32px_120px_40px_120px] gap-[16px] self-stretch">
          <div className="flex justify-between rounded-tl-[56px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] bg-[rgba(12,43,47,0.7)] w-[280px] h-[504px] p-[72px_37px_32px_37px] flex-col items-center shrink-0flex w-[280px] h-[504px] p-[72px_37px_32px_37px] flex-col items-center shrink-0 border-[1px] border-[#0F373C] hover:shadow-[inset_0px_1px_25px_0px_rgba(29,206,242,0.25)]  transition-shadow duration-300">
            <div>
              <img src={rectangle} alt="" />
            </div>
            <div className="flex w-[232px] p-[1px_12.5px_12px_11.5px] flex-col items-center gap-[21px]">
              <h3 className="text-[#FFF] text-center  text-[22px] font-medium leading-[26px] tracking-[-0.44px]">
                Trade Optimizer
              </h3>
              <p className="text-[rgba(176,250,255,0.7)] text-center text-[16px] font-normal leading-[24px]">
                Find the right moments to buy or sell, with personalized trade
                suggestions designed to help you make the most of every
                opportunity.
              </p>
            </div>
          </div>

          <div className="flex h-[504px] flex-col justify-center items-center gap-[16px] flex-[1_0_0] ">
            <div className="flex-col gap-[12px] justify-start rounded-[16px] bg-[rgba(12,43,47,0.7)] flex w-[608px] p-[32px] items-start text-left border-[1px] border-[#0F373C] hover:shadow-[inset_0px_1px_25px_0px_rgba(29,206,242,0.25)]  transition-shadow duration-300">
              <h3 className="text-[#FFF] text-[22px] font-medium leading-[26px] tracking-[-0.44px]">
                Market Insight
              </h3>
              <p className="text-[rgba(176,250,255,0.7)] text-left text-[16px] font-normal leading-[24px]">
                Stay ahead of the market. Get real-time <br /> updates on market
                trends, track top traders' <br /> movements, and spot signals
                from key <br />
                influencers.
              </p>
            </div>
            <div className="flex w-[608px] flex-col justify-end items-start gap-[55px] flex-[1_0_0] text-left rounded-[16px] bg-[rgba(12,43,47,0.7)] border-[1px] border-[#0F373C] hover:shadow-[inset_0px_1px_25px_0px_rgba(29,206,242,0.25)]  transition-shadow duration-300"></div>
          </div>

          <div className="flex w-[280px] h-[504px] p-[32px_22px] flex-col items-center gap-[15px] flex-shrink-0 w-[280px] h-[504px] rounded-[16px_56px_16px_16px] border-[1px] border-[#0F373C] bg-[rgba(12,43,47,0.7)] hover:shadow-[inset_0px_1px_25px_0px_rgba(29,206,242,0.25)]  transition-shadow duration-300">
            <div>
              <img src={connector} alt="" />
            </div>
            <div className="flex w-[232px] p-[1px_12.5px_12px_11.5px] flex-col items-center gap-[5px] ">
              <h3 className="text-[#FFF] text-center  text-[22px] font-medium leading-[26px] tracking-[-0.44px]">
                Risk Guard
              </h3>
              <p className="text-[rgba(176,250,255,0.7)] text-center text-[16px] font-normal leading-[24px]">
                Get alerts on market swings and potential risks before they
                impact your portfolio. This agent helps you navigate volatility
                and stay prepared for anything.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-[1200px] h-[240px] justify-center items-center gap-[16px]">

        </div>
      </div>
    </main>
  );
};
