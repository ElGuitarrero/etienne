'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import BentoBox from "@/components/BentoBox";


function Index() {
    const searchParams = useSearchParams()
    const isSubscribed = searchParams?.get("subscribed") === 'true'
    const mensaje = searchParams?.get('mensaje') === 'true'

    return (
        <ThankYou isSubscribed={isSubscribed} mensaje={mensaje} />
    )
}


interface ThankYouProps {
    isSubscribed: boolean;
    mensaje: boolean;
}

const ThankYou = ({ isSubscribed, mensaje }: ThankYouProps) => {
    return (
        <div className="flex justify-center w-screen font-[helvetica]">
            <div className="flex flex-col w-1/2 items-center justify-center h-screen">
                <BentoBox>
                    <div className="flex flex-col items-center justify-center h-screentext-(--foreground)">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Thank You!</h1>

                        {mensaje && (
                            <p className="text-lg md:text-2xl text-center mb-8">
                                Your message has been successfully sent. We will get back to you shortly.
                            </p>
                        )}

                        {isSubscribed && (
                            <p className="text-lg md:text-2xl text-center mb-8">
                                Thank you for subscribing to our newsletter!
                            </p>
                        )}


                        <Link href="/">
                            <button className="mt-6 w-full px-6 py-3 bg-(--foreground) border-1 border-gray-300 text-(--background) font-semibold rounded-lg opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transform transition duration-200 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Go Back to Home
                            </button>
                        </Link>
                    </div>
                </BentoBox>
            </div>
        </div>
    );
};

export default Index;