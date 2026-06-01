"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter()
  const [text, setText] = useState("")
  const createTree=()=>{
    router.push(`/generate?handle=${text}`)
  }
  return (
   <main>
    <section className="bg-lime-300 h-screen grid grid-cols-2 text-black">
     <div className="  flex items-center flex-col gap-4 justify-center ml-[5vw]">
      <p className="text-green-950 font-bold text-7xl">A link in bio built for you.</p>
      <p className="text-green-950 font-bold text-lg">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
      <div className="input flex gap-4 w-full">
        <input value={text} onChange={(e)=>{setText(e.target.value)}} className="text-black bg-white rounded-lg  px-8 py-3 font-bold focus:outline-green-950" type="text" placeholder="Enter your handle" />
        <button onClick={()=>createTree()} className="bg-green-950 font-bold text-white px-10 py-5 rounded-full">Get Started for free</button>
      </div>
     </div>
     <div className=" flex items-center flex-col gap-2 justify-center mr-[7vw] overflow-hidden ">
      <img className="rounded-xl"  src="/img1.webp" alt="" />
      {/* <img width="350" height="300" src="/img2.webp" alt="" />
      <img width="350" height="300" src="/img3.webp" alt="" /> */}
     </div>
    </section>
    <section className="bg-red-500 h-screen">
      sjkh
    </section>
   </main>
  );
}
