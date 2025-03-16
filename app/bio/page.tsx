"use client"
import { useEffect } from "react"
import Biografia from "@/components/Bio"

const Index = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <Biografia/>
    )
}

export default Index;
