import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import htmlIcon from "@/assets/html-5-svgrepo-com.svg";
import tailwindCssIcon from "@/assets/tailwind-svgrepo-com.svg";
import reactIcon from "@/assets/react-svgrepo-com.svg";
import typescriptIcon from "@/assets/typescript-official-svgrepo-com.svg";
import javascriptIcon from "@/assets/javascript-svgrepo-com.svg";
import nodeIcon from "@/assets/node-svgrepo-com.svg";
import expressIcon from "@/assets/express-svgrepo-com.svg";
import gitIcon from "@/assets/git-svgrepo-com.svg";
import pythonIcon from "@/assets/python-svgrepo-com.svg";

type Language = {
    name: string;
    icon: string | undefined;
};

const languages: Language[] = [
    {
        name: "HTML5",
        icon: htmlIcon,
    },
    {
        name: "TailwindCSS",
        icon: tailwindCssIcon,
    },
    {
        name: "React",
        icon: reactIcon,
    },
    {
        name: "Node.js",
        icon: nodeIcon,
    },
    {
        name: "Python",
        icon: pythonIcon,
    },
    {
        name: "Javascript",
        icon: javascriptIcon,
    },
    {
        name: "Typescript",
        icon: typescriptIcon,
    },
    {
        name: "ExpressJs",
        icon: expressIcon,
    },
    {
        name: "Git",
        icon: gitIcon,
    }
];

interface InfiniteLanguageCardsProps {
    className?: string;
    direction?: "left" | "right";
    speed?: "slow" | "normal" | "fast";
}

export default function InfiniteLanguageCards({
    className,
    direction = "left",
    speed = "normal",
}: InfiniteLanguageCardsProps) {
    // Animation speeds based on the speed prop
    const speedMap = {
        slow: 40,
        normal: 30,
        fast: 20,
    };

    // Creating duplicate array to ensure smooth infinite scrolling
    const duplicatedLanguages = [...languages, ...languages];

    return (
        <div className={cn("relative flex w-full overflow-hidden py-6", className)}>
            <motion.div
                className="flex gap-4 min-w-full"
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    duration: speedMap[speed],
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            >
                {duplicatedLanguages.map((language, index) => (
                    <LanguageCard key={`${language.name}-${index}`} language={language} />
                ))}
            </motion.div>
        </div>
    );
}

interface LanguageCardProps {
    language: Language;
}

function LanguageCard({ language }: LanguageCardProps) {
    return (
        <div
            className="flex flex-col items-center justify-center rounded-3xl bg-slate-50/10 p-6 shadow-lg backdrop-blur-sm border border-white/20 min-w-[120px]"
        >
            <div className="h-12 w-12 flex items-center justify-center">
                <img
                    src={language.icon}
                    alt={`${language.name} icon`}
                    className="h-full w-full object-contain"
                />
            </div>
        </div>
    );
}