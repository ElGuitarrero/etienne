import Link from "next/link";

const ThankYou = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[url('/background/thankyou-bg.jpg')] bg-cover bg-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Thank You!</h1>
            <p className="text-lg md:text-2xl text-center mb-8">
                Your message has been successfully sent. We will get back to you shortly.
            </p>
            <Link href="/">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
                    Go Back to Home
                </button>
            </Link>
        </div>
    );
};

export default ThankYou;