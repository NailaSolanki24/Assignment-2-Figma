import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <div className="bg-[#252B42] w-full h-[1132px]">
        <Navbar/>
      <center>
      <div className="w-[699px] h-[496px] pt-[40px] pb-[40px] gap-[40px]">
        <h5 className="font-family: Montserrat text-[#23A6F0] text-base font-bold">Welcome</h5><br/>
        <h1 className="font-family: Montserrat text-[#fff] text-6xl font-bold leading-relaxed">Selling on the <br/>internet like a pro</h1>
        <h4 className="font-family: Montserrat text-[#fff] text-sm font-semi-bold leading-7">We know how large objects will act, but things on a<br/> 
        small scale just do not act that way.</h4>

        <div className="flex gap-[10px] mt-10 pl-40 ">
          <button className="pt-[15px] pr-[40px] pb-[15px] pl-[40px] text-[#fff] bg-sky-500 hover:bg-sky-900 rounded">Get Quote Now</button>
          <button  className="hover:text-[#fff] pt-[15px] pr-[40px] pb-[15px] pl-[40px] text-[#23A6F0] border-[4px] border-[#23A6F0] rounded">Learn More</button>
        </div>

      
      </div>
      </center>
      <Cards/>


    </div>
  );
}
