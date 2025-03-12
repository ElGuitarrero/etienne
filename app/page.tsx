import Biografia from "./components/Bio";
import Landing from "./components/Landing";

export default function Home() {


  return (
    <div className="overflow-x-hidden">
      {/* Hola */}
      <Landing/>
      {/* <div className="h-screen"></div> */}
      <Biografia/>
    </div>
  )
}