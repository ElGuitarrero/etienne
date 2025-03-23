import BentoBox from "./BentoBox";

const Contact = () => {
    return (
        <div className="w-full h-fit bg-(--background) flex flex-col items-center justify-center">
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
                        href="mailto:brett@ayita.com"
                        className=" hover:underline"
                    >
                        brett@ayita.com
                    </a>
                    )
                </p>
            </div>

            {/* Bookings */}
            <div className="flex items-center flex-col">
                <h2 className="text-3xl font-bold">Bookings</h2>
                <p className="text-lg">
                    <a
                        href="mailto:merch@followthefishtv.com"
                        className=" hover:underline"
                    >
                        merch@followthefishtv.com
                    </a>
                </p>
            </div>

        </div>
    )
}

const ManagementBookings = () => {
    return (
        <div className="space-y-10">

            <form className="grid grid-cols-1 gap-6">
                <h2 className="text-3xl">Send me a message</h2>

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

                {/* Send */}
                <button
                    type="submit"
                    className="mt-6 w-full px-6 py-3 bg-(--background) border-1 border-gray-300 text-(--foreground) font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transform transition duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

const Newsletter = () => {
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
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
                    />
                </div>

                {/* Submit */}
                <div className="flex flex-col justify-end">
                    <button
                        type="submit"
                        className="mt-2 md:mt-0 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transform transition duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Subscribe
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Contact;