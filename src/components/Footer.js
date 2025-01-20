import logo from "../dataPNG/logo.png";
import telegram from "../dataPNG/telegram.png";
import instagram from "../dataPNG/instagram.png";
import x from "../dataPNG/x.png";
import facebook from "../dataPNG/facebook.png";
import discord from "../dataPNG/discord.png";
export const Footer = () => {
  return (
    <>
    <footer className="flex justify-between pt-20 pb-20 z-10 items-center self-stretch px-[66px] bg-[#010F14]">
      <div className="flex flex-col gap-8">
        <div className="inline-flex items-center gap-4">
          <img className="w-[56px] h-[56px]" src={logo} alt="" />
          <p className="text-white text-[38px] font-bold leading-[24px]">
            EthAi
          </p>
        </div>
        <div className="inline-flex items-center gap-[23.8px]">
          <img src={telegram} alt="" />
          <img src={instagram} alt="" />
          <img src={x} alt="" />
          <img src={facebook} alt="" />
          <img src={discord} alt="" />
        </div>
      </div>
      <div className="flex w-[480px] flex-col items-start gap-[40px]">
        <p className="text-[#F7F7F7] text-[40px] font-medium leading-[44px] tracking-[-0.8px]">
          “Designed for traders of today, just like you."
        </p>
        <div className="flex h-[60px] py-[1px] px-[6px] items-center gap-[4px] self-stretch rounded-[18px] border-[1px] border-[#FBFAF2]/40">
          <div className="flex py-[16px] px-[20px] flex-col items-start flex-1 self-stretch rounded-[18px]">
            <input
              placeholder="What's your work email?"
              className="text-[#EFEFE8] bg-transparent text-[16px] font-normal leading-normal tracking-[-0.032px] border-0"
              type="text"
            />
          </div>
          <button className="flex text-white py-[12px] px-[24px] justify-center items-center rounded-[12px] bg-[rgba(139,249,232,0.01)] shadow-[0px_0px_40px_0px_rgba(139,249,232,0.20)_inset] backdrop-blur-[3.75px]">
            Get Started
          </button>
        </div>
      </div>
      
    </footer>
    <div className="bg-[#010F14] font-medium justify-center items-center text-white flex">Developed by Abdul Aziz</div>
    </>
    
  );
};
