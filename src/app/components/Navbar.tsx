import Link from "next/link";

export default function Navbar() {
    return (
      <div className="flex w-[1400px] h-[91px] ml-[84px]">

          <div className="flex w-[187] h-[58] pt-[17px] pl-[136px]">
            <h3 className="text-2xl font-Montserrat font-semibold text-[#fff]">BrandName</h3>
          </div>  

        <div className="flex gap-8 w-[550px] h-[58px] pt-[18px] ml-[150px] text-xl font-sans font-semibold text-white">   
          <Link href="/">Home</Link> 
          <Link href="/about">Product</Link>
          <Link href="/projects">Pricing</Link> 
          <Link href="/contact">Contact</Link>
        </div>

        <div className="flex gap-[45px] w-[189px] h-[52px] mt-[16px] ml-[110px] text-xl font-sans font-semibold text-white" >
        <Link href="/Login" className="pt-2">Login</Link>
        <button className="bg-sky-500 hover:bg-sky-900 rounded-l-lg w-full">JOIN US</button>
        </div>

        <div className="flex w-[34px] h-[52px] mt-4 ml-14">
          <button className=" text-[#fff] text-3xl"></button>
        </div>
        

      </div>
    );
  }