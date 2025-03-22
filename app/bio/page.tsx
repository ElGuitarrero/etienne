"use client"
import { useEffect } from "react"
import Biografia from "@/components/Bio"

const Index = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <div className="mt-20 ">
            <Biografia/>
        </div>
    )
}

export default Index;
