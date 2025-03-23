'use client'
import Biografia from "@/components/Bio";
import Landing from "@/components/Landing";
import Music from "@/components/Music";
import Show from "@/components/Show";
import Photos from "@/components/Photos";
import Contact from "@/components/Contact";

export default function Home() {

  

  return (

    // Hola
    // <Landing/>
    <div className="overflow-x-hidden flex flex-col gap-20">
      {/* Hola */}
      <Landing/>
      {/* <div className="h-screen"></div> */}
      <Biografia/>
      <div className="w-screen min-h-screen flex justify-center items-center"><Show/></div>
      <Photos /> 
      <Contact/>
      <Music/>
      
    </div>
  )
}