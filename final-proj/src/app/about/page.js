import NavigationBar from "../components/navigationBar";
import Image from "next/image";
import Banner from "../components/banner";
import Link from "next/link";
import { ArrowBackRounded } from "@mui/icons-material";

export default function AboutPage() {
    return(
        <main>
            <NavigationBar/>
            <Banner/>
            <div className='pl-10 pt-5 hover:scale-105 transition duration-300 ease-in-out items-center'>
              <Link href='../'>
                <ArrowBackRounded/> Back
              </Link>
            </div>
            <div>
                <Image src='/under_construction.png' width={800} height={800}/>
            </div>
        </main>
    );
}