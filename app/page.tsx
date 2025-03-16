'use client'
import Biografia from "@/components/Bio";
import Landing from "@/components/Landing";
import Music from "@/components/Music";

export default function Home() {


  return (
    <div className="overflow-x-hidden">
      {/* Hola */}
      <Landing/>
      {/* <div className="h-screen"></div> */}
      <Biografia/>
      <Music/>
    </div>
  )
}