"use client"

import { useScrollAnimation } from "@/app/lib/animations";
import { motion } from "framer-motion";
import { useMemo, useCallback } from "react";

const bio = [
    `Daniel's journey in music began in Guadalajara, Mexico, a city renowned for its vibrant electronic scene. Influenced by old-school electronica, he started 
producing music at just 14, constantly refining his sound and exploring new techniques. His ability to blend genres and experiment with drum patterns, melodies, and textures has 
kept his music fresh and dynamic.`,
    `As his career progressed, Daniel earned a spot at the Amsterdam Dance Event for three consecutive years and performed at major festivals like EDC and Dreamfields. He has toured 
across Europe, sharing the stage with some of the biggest names in dance music, solidifying his presence in the global electronic scene.`,
    `His talent has led to releases on prestigious labels such as Warner Music, SIZE Records, Heldeep Records, Confession, and Armada Music. Additionally, he has co-produced tracks for 
other artists under labels like Columbia, Asylum, and Musical Freedom, amassing over 133 million streams across all platforms.`,
    `With widespread industry support and a relentless passion for innovation, Daniel continues to push boundaries in electronic music. His journey is still unfolding, and his impact on 
the scene is only set to grow.`,
];


const AnimatedParagraph = ({ parrafo, index }: { parrafo: string; index: number }) => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
        >
            {parrafo}
        </motion.p>
    );
};


const AnimatedPhoto = () => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 h-64 md:h-full bg-[url('/background/fondo-landing2.jpg')] bg-cover bg-center rounded-lg"
        />
    )
}

const Biografia = () => {
    const memoizedBio = useMemo(() => bio, []);
    const renderParagraphs = useCallback(
        () =>
            memoizedBio.map((parrafo, index) => (
                <AnimatedParagraph key={index} parrafo={parrafo} index={index} />
            )),
        [memoizedBio]
    );

    return (
        <div className="w-screen p-5 flex flex-col gap-5 md:flex-row-reverse md:p-20 md:gap-15 h-auto md:h-[120vh]">
            {/* <div className="w-full md:w-1/2 h-64 md:h-full bg-[url('/background/fondo-landing2.jpg')] bg-cover bg-center rounded-lg"></div> */}
            <AnimatedPhoto/>
            <div className="w-full md:w-1/2 text-[1rem] md:text-[1.3rem] font-[helvetica] flex flex-col justify-center gap-5 font-light">
                {renderParagraphs()}
            </div>
        </div>
    );
};

export default Biografia;
