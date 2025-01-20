import investment from "../dataPNG/Investment.png";
import rectangle from "../dataPNG/Rectangle 3 (1).png";
import connector from "../dataPNG/Connector-pic.png";
import readMore from "../dataPNG/read-more.png";
import wallet from "../dataPNG/wallet.png";
import tools from "../dataPNG/Tools.png";
import graph from "../dataPNG/graph.png";
import futureTech from "../dataPNG/Future Technology.png";
import prev1 from "../dataPNG/prev1.mp4";
import container from "../dataPNG/Container.png";
import phase1 from "../dataPNG/phase1.png";
import rightLogo from "../dataPNG/rightLogo.png";
import prev2 from "../dataPNG/prev2.mp4";
import phase2 from "../dataPNG/phase2.png";
import phase3 from "../dataPNG/phase3.png";
import prev3 from "../dataPNG/prev3.mp4";
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

      <div id="Container-1" className="bg-[#00161d] ">
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
        <div className="flex justify-center items-center px-[120px] py-[32px] pb-[40px] gap-[16px] self-stretch">
          <div className="flex flex-col w-[446px] h-[240px] p-[32px] items-start gap-[8px] flex-shrink-0 rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[56px] bg-[rgba(12,43,47,0.70)] border-[1px] border-[#0F373C] bg-[rgba(12,43,47,0.7)] hover:shadow-[inset_0px_1px_25px_0px_rgba(29,206,242,0.25)]  transition-shadow duration-300">
            <h3 className="text-white text-[22px] font-medium leading-[26px] tracking-[-0.44px]">
              Portfolio Sync
            </h3>
            <p className="text-[rgba(176,250,255,0.7)] text-left text-[16px] font-normal leading-[24px]">
              Easily manage your portfolio. <br /> You'll always know what you{" "}
              <br /> own, how it's performing, and <br /> where it’s headed.
            </p>
          </div>
          <div className="flex flex-col h-[240px] w-[700px] p-[32px] items-start gap-[16px] rounded-tl-[16px] rounded-tr-[16px] rounded-br-[56px] rounded-bl-[16px] bg-[rgba(12,43,47,0.7)] border-[1px] border-[#0F373C] bg-[rgba(12,43,47,0.7)] hover:shadow-[inset_0px_1px_25px_0px_rgba(29,206,242,0.25)]  transition-shadow duration-300">
            <h3 className="text-white text-[22px] font-medium leading-[26px] tracking-[-0.44px]">
              Opportunity Scout
            </h3>
            <p className="text-[rgba(176,250,255,0.7)] text-left text-[16px] font-normal leading-[24px] ">
              Find exciting new projects, events and <br /> tokens that others
              might be missing. <br /> Identifying promising opportunities{" "}
              <br /> early, so you never miss out on the <br /> next big thing.
            </p>
          </div>
        </div>
      </div>

      <div
        id="Container-2"
        className="bg-[#00161d] flex flex-col pt-[100px] justify-center items-center self-stretch"
      >
        <h2 className="text-white text-center font-space-grotesk text-[40px] font-medium leading-[44px] tracking-[-0.8px]">
          About EthAi
        </h2>
        <p className="pt-5 pb-5 text-[#B0FAFFB2] text-center font-space-grotesk text-[16px] font-normal leading-[24px]">
          At EthAi, we’re all about making crypto trading easier and more
          intuitive. We provide tools <br /> that help traders keep up with all
          new market trends, track top traders’ movements.
        </p>
        <img className="cursor-pointer" src={readMore} alt="read-more" />

        <div className="flex flex-col gap-[40px] w-[744px] h-[400px] p-[48px_64px_48px_63px] justify-center items-center rounded-[20px] bg-[#08252A]">
          <div className="flex items-center gap-[36px] self-stretch">
            <div className="flex flex-col items-start gap-[12px] flex-1">
              <img src={graph} alt="" />
              <h5 className="flex flex-col justify-center self-stretch text-white text-[18px] font-[500] leading-[24px] tracking-[-0.36px]">
                Stay Ahead
              </h5>
              <p className="self-stretch text-[rgba(176,250,255,0.70)] font-[400] text-[16px] leading-[24px]">
                No more guesswork—get clear, trustable insights.
              </p>
            </div>

            <div className="flex flex-col items-start gap-[12px] flex-1">
              <div className="flex flex-col items-start gap-[12px] flex-1">
                <img src={wallet} alt="" />
                <h5 className="flex flex-col justify-center self-stretch text-white text-[18px] font-[500] leading-[24px] tracking-[-0.36px]">
                  Know Your Assets
                </h5>
                <p className="self-stretch text-[rgba(176,250,255,0.70)] font-[400] text-[16px] leading-[24px]">
                  Always stay on top of how your investments are performing.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[36px] self-stretch">
            <div className="flex flex-col items-start gap-[12px] flex-1">
              <img src={tools} alt="" />
              <h5 className="flex flex-col justify-center self-stretch text-white text-[18px] font-[500] leading-[24px] tracking-[-0.36px]">
                Simple, Not Overwhelming
              </h5>
              <p className="self-stretch text-[rgba(176,250,255,0.70)] font-[400] text-[16px] leading-[24px]">
                Our tools are designed to make complex market analysis easy to
                understand and act on.
              </p>
            </div>

            <div className="flex flex-col items-start gap-[12px] flex-1">
              <div className="flex flex-col items-start gap-[12px] flex-1">
                <img src={futureTech} alt="" />
                <h5 className="flex flex-col justify-center self-stretch text-white text-[18px] font-[500] leading-[24px] tracking-[-0.36px]">
                  Future-Proof
                </h5>
                <p className="self-stretch text-[rgba(176,250,255,0.70)] font-[400] text-[16px] leading-[24px]">
                  We’re constantly improving, adding new features to help you
                  make the most informed decisions possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
