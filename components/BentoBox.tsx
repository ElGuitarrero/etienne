const BentoBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative flex flex-col gap-5 w-full bg-blackwhite/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            {children}
        </div>
    );
};

export default BentoBox;
