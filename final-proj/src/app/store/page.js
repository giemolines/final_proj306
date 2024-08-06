"use client"
import React,{useState} from 'react';
import '../styles/App.css';
import Image from 'next/image';
import { ArrowBackRounded } from '@mui/icons-material';

import NavigationBar from '../components/navigationBar';
import PageFooter from '../components/footer';
import Banner from '../components/banner';
import Carousel from '../components/carousel';
import Link from 'next/link';
import Products from '../components/products';



export default function Store() {

  return (
    <main>
        <NavigationBar/>
        <Banner/>
        <div className='min-h-screen'>
          <div className='bg-gradient-to-b from-green-100 to-transparent'>
            <div className='pl-10 pt-5 hover:scale-105 transition duration-300 ease-in-out items-center'>
              <Link href='../'>
                <ArrowBackRounded/> Back
              </Link>
            </div>
            <div className='flex'>
              <div className='flex basis-1/3 items-center'>
                <h1 className='pl-10 pr-10 text-4xl text-gray-500 font-semibold'><span className='text-black '>Premium Printing.</span> Delivered right to your doorstep.</h1>
              </div>
              <div className='flex basis-2/3'>
                <Carousel/>
              </div>
            </div>
            <div className='text-center p-16 text-2xl text-gray-500 font-semibold'>
            <h1>Browse our services. Choose the right product <span className='text-black underline font-bold'>for you</span>.</h1>
          </div>
          </div>
          <div className='p-4'>
            <Products/>
          </div>
        </div>
      <PageFooter/>
        
    </main>
    
  );
}

