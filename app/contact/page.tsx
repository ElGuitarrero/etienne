'use client'
import Contact from "@/components/Contact";
import Photos from "@/components/Photos";

const SocialPage = () => {
  

  return (
    <div className="overflow-x-hidden w-full flex flex-col gap-20">
      <Photos /> 
      <div className="mb-20"><Contact/></div>
      {/* <Music/> */}
    </div>
  )

};

export default SocialPage;