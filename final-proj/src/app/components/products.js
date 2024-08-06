import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <div className="grid grid-cols-2 gap-5 p-4">
      <a href="#" className="h-96 rounded-3xl hover:scale-105 transition duration-300 ease-in-out p-5">
        <div className="flex flex-col h-full">
          <div className="relative basis-2/3">
            <Image 
              src="/retbanner_product.png" 
              layout="fill" 
              objectFit="contain" 
              alt="Product Image" 
            />
          </div>
          <div className="basis-1/3 flex flex-col justify-center p-6 rounded-2xl shadow-sm">
            <h2 className="text-lg font-medium">Retractable Banners</h2>
            <p className="mt-1 text-sm font-light">From <span className="text-green-600">$120.00 {'–'} $250.00</span></p>
            <Link href="#" className="text-md font-normal hover:underline">Add to cart</Link>
          </div>
        </div>
      </a>
      <a href="#" className="h-96 rounded-3xl hover:scale-105 transition duration-300 ease-in-out p-5">
        <div className="flex flex-col h-full">
          <div className="relative basis-2/3">
            <Image 
              src="/sandwich_product.png" 
              layout="fill" 
              objectFit="contain" 
              alt="Product Image" 
            />
          </div>
          <div className="basis-1/3 flex flex-col justify-center p-6 rounded-2xl shadow-sm">
            <h2 className="text-lg font-medium">Sandwich Boards</h2>
            <p className="mt-1 text-sm font-light">From <span className="text-green-600">$175.00 {'–'} $320.00</span></p>
            <Link href="#" className="font-normal hover:underline">Add to cart</Link>
          </div>
        </div>
      </a>
      <a href="#" className="h-96 rounded-3xl hover:scale-105 transition duration-300 ease-in-out p-5">
        <div className="flex flex-col h-full">
          <div className="relative basis-2/3">
            <Image 
              src="/banner_product.png" 
              layout="fill" 
              objectFit="contain" 
              alt="Product Image" 
            />
          </div>
          <div className="basis-1/3 flex flex-col justify-center p-6 rounded-2xl shadow-sm">
            <h2 className="text-lg font-medium">Banners</h2>
            <p className="mt-1 text-sm font-light">From <span className="text-green-600">$9.00 {'–'} $56.00</span></p>
            <Link href="#" className="font-normal hover:underline">Add to cart</Link>
          </div>
        </div>
      </a>
      <a href="#" className="h-96 rounded-3xl hover:scale-105 transition duration-300 ease-in-out p-5">
        <div className="flex flex-col h-full">
          <div className="relative basis-2/3">
            <Image 
              src="/gallery_product.png" 
              layout="fill" 
              objectFit="contain" 
              alt="Product Image" 
            />
          </div>
          <div className="basis-1/3 flex flex-col justify-center p-6 rounded-2xl shadow-sm">
            <h2 className="text-lg font-medium">Gallery Wrap</h2>
            <p className="mt-1 text-sm font-light">From <span className="text-green-600">$56.00 {'–'} $235.00</span></p>
            <Link href="#" className="font-normal hover:underline">Add to cart</Link>
          </div>
        </div>
      </a>
    </div>
  );
}
