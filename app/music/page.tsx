"use client"
import { useEffect } from "react"
import Show from "@/components/Show"
const Index = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <div className="mt-20 w-full h-screen flex justify-around items-center">
            <Show/>
        </div>
    )
}

export default Index;
