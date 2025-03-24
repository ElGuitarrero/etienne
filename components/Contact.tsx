import BentoBox from "./BentoBox";
import { useState } from "react";

const Contact = () => {
    return (
        <div className="w-full h-fit bg-(--background) flex flex-col items-center justify-center mb-20">
            <div className="w-full h-fit px-5 xl:px-50 gap-5 flex flex-col">

                {/* Titulo */}
                <h1 className="font-[helvetica] text-5xl font-bold text-center text-(--foreground) mb-8">
                    Contact
                </h1>

                {/* Informacion */}
                <BentoBox>
                    <Information />
                </BentoBox>

                {/* Formularios */}
                <div className="flex w-full flex-col xl:flex-row gap-5 xl:gap-20">

                    {/* Send me a message */}
                    <BentoBox>
                        <ManagementBookings />
                    </BentoBox>

                    {/* Newsletter */}
                    <BentoBox>
                        <Newsletter />
                    </BentoBox>

                </div>
            </div>
        </div>
    );
};

const Information = () => {
    return (
        <div className="flex flex-col gap-10 items-center">

            {/* Management */}
            <div className="flex items-center flex-col">
                <h2 className="text-3xl font-bold">Management</h2>
                <p className="text-lg">
                    <strong className="font-bold">AYITA</strong> Brett Fischer (
                    <a
                        href="mailto:artistcare@terriblygood.info"
                        className=" hover:underline"
                    >
                        artistcare@terriblygood.info
                    </a>
                    )
                </p>
            </div>

            {/* Bookings */}
            <div className="flex items-center flex-col">
                <h2 className="text-3xl font-bold">Bookings</h2>
                <p className="text-lg">
                    <a
                        href="mailto:mgmt@danieletienne.com"
                        className=" hover:underline"
                    >
                        mgmt@danieletienne.com
                    </a>
                </p>
            </div>

        </div>
    )
}

const ManagementBookings = () => {
    const [subscripcion, setSubscripcion] = useState<boolean>(false)

    const handleSend = async (event: React.FormEvent) => {
        event.preventDefault();

        const name = (document.getElementById("name") as HTMLInputElement)?.value;
        const email = (document.getElementById("email") as HTMLInputElement)?.value;
        const phone = (document.getElementById("phone") as HTMLInputElement)?.value;
        const comment = (document.getElementById("comment") as HTMLInputElement)?.value;

        const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, comment })
        })

        const data = await response.json()

        if (response.ok) {
            console.log(data.message || "Message sent successfully!");
        } else {
            console.log(data.message || "An error occurred while sending the message.");
        }

        if (subscripcion) {
            handleSubscription(email);
        }

    }


    return (
        <div className="space-y-10">

            <form className="grid grid-cols-1 gap-6">
                <h2 className="text-3xl font-bold">Send me a message</h2>

                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="font-semibold">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
                        />
                        <p className="text-sm text-gray-500">Required</p>
                    </div>
                </div>

                {/* Phone number */}
                <div className="flex flex-col">
                    <label htmlFor="phone" className="font-semibold ">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
                    />
                </div>

                {/* Commnent */}
                <div className="flex flex-col">
                    <label htmlFor="comment" className="font-semibold">
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        name="comment"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="subscribe"
                        id="subscribe"
                        onChange={(e) => setSubscripcion(e.target.checked)}
                        className="w-5 h-5 text-(--foreground) border-gray-300 rounded focus:ring-2 focus:ring-black focus:outline-none transition duration-200"
                    />
                    <label
                        htmlFor="subscribe"
                        className="font-semibold text-gray-700"
                    >
                        Subscribe to my newsletter
                    </label>
                </div>

                {/* Send */}
                <button
                    onClick={handleSend}
                    type="submit"
                    className="mt-6 w-full px-6 py-3 bg-(--foreground) border-1 border-gray-300 text-(--background) font-semibold rounded-lg opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transform transition duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

const Newsletter = () => {
    const [email, setEmail] = useState<string>()


    return (
        <div className="space-y-6 text-(--foreground)">

            {/* Titulo */}
            <div>
                <h1 className="text-3xl font-bold ">Subscribe to our Newsletter</h1>
            </div>

            {/* Descripcion */}
            <div>
                <p className="">
                    Stay up to date with the latest news and updates
                </p>
            </div>

            {/* Formulario */}
            <form className="flex flex-col md:flex-row gap-4">

                {/* Email */}
                <div className="flex flex-col w-full">
                    <label htmlFor="email" className="font-semibold text-gray-700">
                        Email
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
                    />
                </div>

                {/* Submit */}
                <div className="flex flex-col justify-end">
                    <button
                        onClick={() => handleSubscription(email as string)}
                        type="submit"
                        className="mt-6 w-full px-6 py-3 bg-(--foreground) border-1 border-gray-300 text-(--background) font-semibold rounded-lg opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transform transition duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Subscribe
                    </button>
                    {/* <p></p> */}
                </div>

            </form>
        </div>
    );
};

const handleSubscription = async (email: string) => {

    const response = fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email })
    })


    response.then(async (res) => {
        const data = await res.json();
        if (res.ok) {
            alert(data.message || "Subscription successful!");
        } else {
            alert(data.message || "An error occurred during subscription.");
        }
    });


}

export default Contact;