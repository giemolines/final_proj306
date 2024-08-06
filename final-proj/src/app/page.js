import Banner from "./components/banner";
import PageFooter from "./components/footer";

import NavigationBar from "./components/navigationBar";
import { Check, WbIncandescentRounded, PeopleAltRounded, StoreRounded } from "@mui/icons-material";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavigationBar />
      <Banner />
      <div className="relative bg-cover bg-center h-96 w-full" style={{ backgroundImage: "url('/Signages-cover.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-100"></div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hover:scale-110 transition duration-200 ease-in-out">
          <a href="./store" className="bg-black text-white rounded-full px-6 py-3 text-center font-semibold shadow-lg hover:bg-gray-800 transition-colors duration-300">Shop Now</a>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image src="/ingraph_logo.png" height={200} width={300} alt="ingraph logo" />
      </div>

      <div className="text-center mt-10">
        <h1 className="font-bold text-3xl">Make a <span className="text-green-700 font-extrabold">great</span> impression.</h1>
        <p className="font-thin text-stone-800 text-md mx-32 mt-5">Give your brand a stand-out look with striking design and first-class custom signs and prints. Let Ingraph be your partner in your business needs in Calgary.</p>

        <div className="flex flex-row mt-5 text-left mx-16 text-xs font-light justify-center gap-10">
          <div className="flex items-center">
            <Check className="h-5 w-5 fill-green-700 mr-4" />
            Full-service graphic design, signage, and printing
          </div>
          <div className="flex items-center">
            <Check className="h-5 w-5 fill-green-700 mr-4" />
            <span className="font-semibold">10 years</span> of industry experience
          </div>
          <div className="flex items-center">
            <Check className="h-5 w-5 fill-green-700 mr-4" />
            High-quality <span className="font-semibold">signs</span>, <span className="font-semibold">wraps</span>, and <span className="font-semibold">various marketing materials</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-24 text-2xl font-semibold">
        <h2>Printing. Signs. Design.</h2>
      </div>

      <div className="overflow-x-scroll scroll-smooth flex flex-row gap-8 scrollbar-none p-10 justify-center items-center">
        <div className="relative h-96 w-80 rounded-3xl shadow-lg overflow-hidden hover:scale-110 transition duration-300 ease-in-out">
          <Image src="/shirt-logo.jpg" alt="Shirt logo" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-96 w-80 rounded-3xl shadow-lg overflow-hidden hover:scale-110 transition duration-300 ease-in-out">
          <Image src="/truck-cover.jpg" alt="Truck cover" layout="fill" objectFit="cover" />
        </div>
        <div className="relative h-96 w-80 rounded-3xl shadow-lg overflow-hidden hover:scale-110 transition duration-300 ease-in-out">
          <Image src="/letter-cover.jpg" alt="lettering cover" layout="fill" objectFit="cover" />
        </div>
      </div>

      <div className="text-center text-2xl font-semibold w-screen p-10">
        <h1>When it comes to quality, <span className="text-green-700 font-bold">we&apos;ve got you covered!</span></h1>
        <p className="text-sm font-thin mx-16 mt-5">At Ingraph, we excel in delivering unparalleled quality, ensuring your project is professionally handled and tailored precisely to your needs. Our dedication to prompt, customized, and hassle-free service places your satisfaction at the forefront. We understand the value of satisfied customers, which is why we create inspiring customer experiences that drive your business growth.</p>
      </div>

      <div className="bg-gradient-to-b from-transparent to-black pr-5 pl-5 pb-5 pt-3">
        <div className="flex flex-row m-20 justify-between">
          <div className="flex flex-col items-center text-center">
            <WbIncandescentRounded className="h-12 w-12 mb-5" />
            <p>Bring ideas to life</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <PeopleAltRounded className="h-12 w-12 mb-5" />
            <p>Get noticed</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <StoreRounded className="h-12 w-12 mb-5" />
            <p>Establish your brand</p>
          </div>
        </div>

        <div className="flex flex-row items-center h-96 shadow-md rounded-3xl overflow-hidden">
          <div className="basis-1/3 text-white font-semibold text-2xl ml-6">
            <h1>Experience <br /> the wonders of <br /> <span className="text-green-700 font-bold">top-quality</span> signs.</h1>
          </div>
        </div>
      </div>

      <PageFooter />
    </main>
  );
}
