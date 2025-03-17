'use client'
import Biografia from "@/components/Bio";
import Landing from "@/components/Landing";
import Music from "@/components/Music";
import Show from "@/components/Show";

export default function Home() {


  return (
    <div className="overflow-x-hidden">
      {/* Hola */}
      <Landing/>
      {/* <div className="h-screen"></div> */}
      <Biografia/>
      <div className="w-screen h-screen flex justify-center items-center"><Show/></div>
      <Music/>
      
    </div>
  )
}