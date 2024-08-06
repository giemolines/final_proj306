"use client";
import React, { useState } from 'react';
import Link from "next/link";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { ListRounded } from "@mui/icons-material";
import AuthForm from '../components/AuthForm'; 
import Image from 'next/image';
import { HomeRounded, ShoppingCartRounded } from '@mui/icons-material';

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = ()=> {
    setMenuOpen(!menuOpen);
  }
  const [isAuthFormOpen, setIsAuthFormOpen] = useState(false);

  const openAuthForm = () => setIsAuthFormOpen(true);
  const closeAuthForm = () => setIsAuthFormOpen(false);

  return (
    <div className="sticky top-0 z-50 p-4 bg-white shadow-md">
      <div className="flex flex-row justify-between items-center mx-6">
        <div className="flex-1 flex justify-start">
          <button onClick={handleNav}>
            <ListRounded className="h-8 w-8 text-gray-700 hover:text-gray-900 hover:scale-110 transition duration-200 ease-in-out" />
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <a href="../">
            <Image src="/ingraph_logo.png" width={80} height={80} alt="Logo" />
          </a>
        </div>
        <div className="flex-1 flex flex-row justify-end items-center gap-4 text-sm">
          <div className="bg-green-700 text-white p-2 rounded-xl hover:bg-green-600 transition duration-200 ease-in-out cursor-pointer">
            <Link href="#" className="block" onClick={openAuthForm}>
              Sign up
            </Link>
          </div>
          <div className="text-gray-700 hover:text-green-700 transition duration-200 ease-in-out cursor-pointer" onClick={openAuthForm}>
            Sign in
          </div>
          <div>
            <Link href="../cart">
              <ShoppingCartRoundedIcon className="h-5 w-5 hover:fill-slate-600 hover:scale-110 transition duration-200 ease-in-out" />
            </Link>
          </div>
        </div>
      </div>
      {isAuthFormOpen && <AuthForm onClose={closeAuthForm} />}
      <div className={menuOpen ? "font-light fixed left-0 top-0 mt-16 w-[50%] h-screen p-10 ease-in-ease-out duration-700 bg-white": "font-light fixed top-0 h-screen p-10 left-[-100%] mt-16 ease-in-ease-out duration-700 bg-white"}>
        <div className='text-xl p-5 hover: hover:underline hover:scale-110 transition duration-300 ease-in-out'>
          <Link href="../store">STORE</Link>
        </div>
        <div className='text-xl p-5 hover:underline hover:scale-110 transition duration-300 ease-in-out'>
          <Link href="../about">ABOUT</Link>
        </div>
        <div className='text-xl p-5 hover:underline hover:scale-110 transition duration-300 ease-in-out'>
          <Link href="../contact">CONTACT US</Link>
        </div>

      </div>
    </div>
  );
}
