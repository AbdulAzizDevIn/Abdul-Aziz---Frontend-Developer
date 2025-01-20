import investment from "../dataPNG/Investment.png";
import rectangle from "../dataPNG/Rectangle 3 (1).png";
import connector from "../dataPNG/Connector-pic.png";
import readMore from "../dataPNG/read-more.png";
import wallet from "../dataPNG/wallet.png";
import tools from "../dataPNG/Tools.png";
import graph from "../dataPNG/graph.png";
import futureTech from "../dataPNG/Future Technology.png";
import prev1 from "../dataPNG/prev1.mp4";
import prev2 from "../dataPNG/prev2.mp4";
import prev3 from "../dataPNG/prev3.mp4";
import phase1 from "../dataPNG/phase1.png";
import phase2 from "../dataPNG/phase2.png";
import phase3 from "../dataPNG/phase3.png";
import rightLogo from "../dataPNG/rightLogo.png";
import container from "../dataPNG/Container.png";
import plus from "../dataPNG/plus.png";
export const Home = () => {
  return (
    <>
      <main className="relative h-[100%] text-white bg-opacity-50 ">
        <div className="flex flex-col justify-center items-center h-screen max-w-[1200px] mx-auto text-white px-4 sm:px-6 md:px-8">
          <div className="w-full flex justify-center items-center text-4xl sm:text-5xl md:text-7xl">
            When Innovation
          </div>
          <div className="flex justify-between text-4xl sm:text-5xl md:text-7xl mt-4">
            <div className="mr-6">Meets</div>
            <img
              src={investment}
              alt=""
              className="w-[15rem] sm:w-[25rem]"
            />
          </div>
          <div className="text-[16px] sm:text-[18px] md:text-[20px] mt-5 text-[#B0FAFFB2]">
            Empowering Trading Through Advanced Technology
          </div>
          <button className="h-[44px] w-[133px] rounded-[12px] bg-[#8BF9E803] shadow-[inset_0px_0px_40px_0px_#8BF9E833] backdrop-blur-[7.5px] mt-10">
            Open dApp
          </button>
        </div>

        {/*Container-1*/}
        <div id="features" className="bg-[#00161d] ">
          <div className="pt-[80px] flex flex-col lg:flex-row justify-center items-center p-4 sm:p-8 lg:p-[32px_120px_40px_120px] gap-[16px] self-stretch">
            <div className="flex justify-between rounded-tl-[56px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] bg-[rgba(12,43,47,0.7)] w-full lg:w-[280px] h-[504px] p-8 sm:p-[72px_37px_32px_37px] flex-col items-center shrink-0 border-[1px] border-[#0F373C] hover:shadow-[inset_0px_1px_25px_0px_rgba(29,206,242,0.25)] transition-shadow duration-300">
              <div>
                <img src={rectangle} alt="" />
              </div>
              <div className="flex w-[232px] p-[1px_12.5px_12px_11.5px] flex-col items-center gap-[21px]">
                <h3 className="text-[#FFF] text-center text-[22px] font-medium leading-[26px] tracking-[-0.44px]">
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
              <div className="flex-col gap-[12px] justify-start rounded-[16px] bg-[rgba(12,43,47,0.7)] flex w-full lg:w-[608px] p-8 sm:p-[32px] items-start text-left border-[1px] border-[#0F373C] hover:shadow-[inset_0px_1px_25px_0px_rgba(29,206,242,0.25)] transition-shadow duration-300">
                <h3 className="text-[#FFF] text-[22px] font-medium leading-[26px] tracking-[-0.44px]">
                  Market Insight
                </h3>
                <p className="text-[rgba(176,250,255,0.7)] text-left text-[16px] font-normal leading-[24px]">
                  Stay ahead of the market. Get real-time <br /> updates on
                  market trends, track top traders' <br /> movements, and spot
                  signals from key <br />
                  influencers.
                </p>
              </div>
              <div className="flex w-full lg:w-[608px] flex-col justify-end items-start gap-[55px] flex-[1_0_0] text-left rounded-[16px] bg-[rgba(12,43,47,0.7)] border-[1px] border-[#0F373C] hover:shadow-[inset_0px_1px_25px_0px_rgba(29,206,242,0.25)] transition-shadow duration-300"></div>
            </div>

            <div className="flex w-full lg:w-[280px] h-[504px] p-8 sm:p-[32px_22px] flex-col items-center gap-[15px] flex-shrink-0 rounded-[16px_56px_16px_16px] border-[1px] border-[#0F373C] bg-[rgba(12,43,47,0.7)] hover:shadow-[inset_0px_1px_25px_0px_rgba(29,206,242,0.25)] transition-shadow duration-300">
              <div>
                <img src={connector} alt="" />
              </div>
              <div className="flex w-[232px] p-[1px_12.5px_12px_11.5px] flex-col items-center gap-[5px] ">
                <h3 className="text-[#FFF] text-center text-[22px] font-medium leading-[26px] tracking-[-0.44px]">
                  Risk Guard
                </h3>
                <p className="text-[rgba(176,250,255,0.7)] text-center text-[16px] font-normal leading-[24px]">
                  Get alerts on market swings and potential risks before they
                  impact your portfolio. This agent helps you navigate
                  volatility and stay prepared for anything.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center px-4 sm:px-8 lg:px-[120px] py-[32px] pb-[40px] gap-[16px] self-stretch">
            <div className="flex flex-col w-full lg:w-[446px] h-[240px] p-8 sm:p-[32px] items-start gap-[8px] flex-shrink-0 rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[56px] bg-[rgba(12,43,47,0.70)] border-[1px] border-[#0F373C] hover:shadow-[inset_0px_1px_25px_0px_rgba(29,206,242,0.25)] transition-shadow duration-300">
              <h3 className="text-white text-[22px] font-medium leading-[26px] tracking-[-0.44px]">
                Portfolio Sync
              </h3>
              <p className="text-[rgba(176,250,255,0.7)] text-left text-[16px] font-normal leading-[24px]">
                Easily manage your portfolio. <br /> You'll always know what you{" "}
                <br /> own, how it's performing, and <br /> where it’s headed.
              </p>
            </div>
            <div className="flex flex-col h-[240px] w-full lg:w-[700px] p-8 sm:p-[32px] items-start gap-[16px] rounded-tl-[16px] rounded-tr-[16px] rounded-br-[56px] rounded-bl-[16px] bg-[rgba(12,43,47,0.7)] border-[1px] border-[#0F373C] hover:shadow-[inset_0px_1px_25px_0px_rgba(29,206,242,0.25)] transition-shadow duration-300">
              <h3 className="text-white text-[22px] font-medium leading-[26px] tracking-[-0.44px]">
                Opportunity Scout
              </h3>
              <p className="text-[rgba(176,250,255,0.7)] text-left text-[16px] font-normal leading-[24px] ">
                Find exciting new projects, events and <br /> tokens that others
                might be missing. <br /> Identifying promising opportunities{" "}
                <br /> early, so you never miss out on the <br /> next big
                thing.
              </p>
            </div>
          </div>
        </div>
        {/*Container-2*/}
        <div
          id="why-us"
          className=" bg-[#00161d] flex flex-col pt-[100px] justify-center items-center self-stretch"
        >
          <h2 className="text-white text-center font-space-grotesk text-[40px] font-medium leading-[44px] tracking-[-0.8px]">
            About EthAi
          </h2>
          <p className="pt-5 pb-5 text-[#B0FAFFB2] text-center font-space-grotesk text-[16px] font-normal leading-[24px]">
            At EthAi, we’re all about making crypto trading easier and more
            intuitive. We provide tools <br /> that help traders keep up with
            all new market trends, track top traders’ movements.
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
        {/*Container-3*/}
        <div
          id="tokenomics"
          className="bg-[#00161d] pt-60 flex flex-col justify-center items-center self-stretch"
        >
          <div className="flex ">
            <img src={container} alt="" />
          </div>
        </div>
        {/*Container-4*/}
        <div
          id="roadmap"
          className="bg-[#00161d] pt-60 flex flex-col justify-center items-center self-stretch"
        >
          <div className="text-white text-center font-[Space_Grotesk] text-[40px] font-medium leading-[44px] tracking-[-0.8px]">
            Roadmap
          </div>

          {/* Phase 1 */}
          <div className="flex flex-wrap px-[120px] py-[64px] justify-center items-center self-stretch">
            <div className="flex flex-col items-start gap-[20px] w-full sm:w-[534.66px] flex-shrink-0">
              <img src={phase1} alt="" />
              <div className="text-white text-center pb-5 text-[40px] font-medium leading-[44px] tracking-[-0.8px]">
                Kicking Off
              </div>
              <div className="gap-[16px] flex flex-col items-start">
                <div className="flex items-center gap-[10px]">
                  <img src={rightLogo} alt="" />
                  <p className="text-[#EFEFE8] text-[20px] font-normal leading-[26px] tracking-[-0.1px]">
                    Launch of EthAi: Officially
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <img src={rightLogo} alt="" />
                  <p className="text-[#EFEFE8] text-[20px] font-normal leading-[26px] tracking-[-0.1px]">
                    Development of Core AI Agents
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <img src={rightLogo} alt="" />
                  <p className="text-[#EFEFE8] text-[20px] font-normal leading-[26px] tracking-[-0.1px]">
                    User Onboarding Campaign
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <img src={rightLogo} alt="" />
                  <p className="text-[#EFEFE8] text-[20px] font-normal leading-[26px] tracking-[-0.1px]">
                    Community Engagement Initiatives
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[20px] w-full sm:w-[800px] flex-shrink-0">
              <video
                className="w-full h-auto rounded-xl mask-edge-blend"
                autoPlay
                loop
                muted
                playsInline
                src={prev1}
              />
            </div>
          </div>

          {/* Phase 2 */}
          <div className="flex flex-wrap px-[120px] py-[64px] justify-around items-center self-stretch">
            <div className="flex flex-col items-start gap-[20px] w-full sm:w-[800px] flex-shrink-0">
              <video
                className="w-full h-auto rounded-xl mask-edge-blend"
                autoPlay
                loop
                muted
                playsInline
                src={prev2}
              />
            </div>
            <div className="flex flex-col items-start gap-[20px] w-full sm:w-[534.66px] flex-shrink-0">
              <img src={phase2} alt="" />
              <div className="text-white text-center pb-5 text-[40px] font-medium leading-[44px] tracking-[-0.8px]">
                Bigger Insights
              </div>
              <div className="gap-[16px] flex flex-col items-start">
                <div className="flex items-center gap-[10px]">
                  <img src={rightLogo} alt="" />
                  <p className="text-[#EFEFE8] text-[20px] font-normal leading-[26px] tracking-[-0.1px]">
                    Introduction of Advanced AI Agents
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <img src={rightLogo} alt="" />
                  <p className="text-[#EFEFE8] text-[20px] font-normal leading-[26px] tracking-[-0.1px]">
                    Strategic Partnerships
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <img src={rightLogo} alt="" />
                  <p className="text-[#EFEFE8] text-[20px] font-normal leading-[26px] tracking-[-0.1px]">
                    User Interface Optimization
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <img src={rightLogo} alt="" />
                  <p className="text-[#EFEFE8] text-[20px] font-normal leading-[26px] tracking-[-0.1px]">
                    Comprehensive Marketing Campaign
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="flex flex-wrap px-[120px] py-[64px] justify-center items-center self-stretch">
            <div className="flex flex-col items-start gap-[20px] w-full sm:w-[534.66px] flex-shrink-0">
              <img src={phase3} alt="" />
              <div className="text-white text-center pb-5 text-[40px] font-medium leading-[44px] tracking-[-0.8px]">
                Full Power
              </div>
              <div className="gap-[16px] flex flex-col items-start">
                <div className="flex items-center gap-[10px]">
                  <img src={rightLogo} alt="" />
                  <p className="text-[#EFEFE8] text-[20px] font-normal leading-[26px] tracking-[-0.1px]">
                    Introduction of Enhanced Features
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <img src={rightLogo} alt="" />
                  <p className="text-[#EFEFE8] text-[20px] font-normal leading-[26px] tracking-[-0.1px]">
                    API Integration for Data Access
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <img src={rightLogo} alt="" />
                  <p className="text-[#EFEFE8] text-[20px] font-normal leading-[26px] tracking-[-0.1px]">
                    Launch of Community-Driven Initiatives
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <img src={rightLogo} alt="" />
                  <p className="text-[#EFEFE8] text-[20px] font-normal leading-[26px] tracking-[-0.1px]">
                    Continuous Improvement and Updates
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[20px] w-full sm:w-[800px] flex-shrink-0">
              <video
                className="w-full h-auto rounded-xl mask-edge-blend"
                autoPlay
                loop
                muted
                playsInline
                src={prev3}
              />
            </div>
          </div>
        </div>

        {/*Container-5*/}
        <div className="flex pt-60  justify-center p-[100px_108px_120px_141px] items-start gap-[60px] bg-[#00161D]">
          <div className="text-[#FFF] font-[500] text-[40px] leading-[44px] tracking-[-0.8px]">
            Frequently Asked <br /> Questions
          </div>
          <div>
            <div className="flex items-center self-stretch px-0 py-5 pl-10 gap-5">
              <img src={plus} alt="" />
              <p>What is EthAi?</p>
            </div>
            <div className="flex items-center self-stretch px-0 py-5 pl-10 gap-5">
              <img src={plus} alt="" />
              <p>How can EthAi can help me as a Trader?</p>
            </div>
            <div className="flex items-center self-stretch px-0 py-5 pl-10 gap-5">
              <img src={plus} alt="" />
              <p>Who can use EthAi?</p>
            </div>
            <div className="flex items-center self-stretch px-0 py-5 pl-10 gap-5">
              <img src={plus} alt="" />
              <p>How does EthAi track smart money flow?</p>
            </div>
            <div className="flex items-center self-stretch px-0 py-5 pl-10 gap-5">
              <img src={plus} alt="" />
              <p>How does ensure data security?</p>
            </div>
          </div>
        </div>
        {/*Container-6*/}
        <div className="bg-[#00161d] pt-40 pb-40 flex justify-center items-center self-stretch p-[32px_240px_48px_240px]">
          <div className="flex flex-col justify-center items-center gap-7 max-w-[960px] p-[56px_156px] flex-[1_0_0] rounded-[20px] bg-[#011C24] shadow-[inset_0_0_32px_16px_rgba(99,242,255,0.1)]">
            <h2 className="text-white text-center  text-[40px] font-medium leading-[44px] tracking-[-0.8px]">
              Explore Our{" "}
              <span className="text-[#62F0FE] text-[40px] font-medium leading-[44px] tracking-[-0.8px]">
                dApp
              </span>
            </h2>
            <p className="text-[rgba(176,250,255,0.7)] text-center text-[16px] font-normal leading-[24px]">
              EthAi is an AI-powered dApp designed to help traders make smarter,
              data-driven decisions. By tracking smart money flows, monitoring
              key wallets, and providing real-time market insights, EthAi
              empowers users to stay ahead of trends. The platform offers
              intuitive AI features for asset recommendations, market analysis,
              and personalized crypto Q&A, making it the ultimate tool for both
              novice and experienced traders.
            </p>
            <button className="flex text-[#0B2A2D] font-medium w-[139.71px] p-[12px_24px] justify-center items-center rounded-[12px] bg-[#CDFCFF] shadow-[0_1px_4px_0_rgba(55,197,229,0.12),0_4px_6px_0_rgba(55,197,229,0.12),0_4px_12px_0_rgba(55,197,229,0.12),0_6px_20px_0_rgba(55,197,229,0.12),0_-8px_16px_-4px_rgba(55,197,229,0.60)_inset,0_0px_4px_2px_rgba(255,255,255,0.12)_inset,0_1px_1px_0px_#4CDDFD_inset,0_0px_1px_1px_#4CDDFD_inset]">
              Open dApp
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
