import investment from "../dataPNG/Investment.png";
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
          <button className="h-[44px] w-[133px] rounded-[12px] bg-[#8BF9E803] shadow-[inset_0px_0px_40px_0px_#8BF9E833] backdrop-blur-[7.5px] mt-10">Open dApp</button>
        </div>
      </main>
  );
};
