import { cl } from "@/lib/utils";
import Image from "next/image";

type BannerProps = {
    image: string;
    text: string;
};

export default function Banner(props: BannerProps) {
    return (
        <button
            className={cl(
                "w-36 h-20 rounded-lg",
                "flex justify-center items-center hover:scale-105 transition-all",
            )}
        >
            <Image
                src={`/assets/${props.image}.jpg`}
                alt={"banner"}
                height={100}
                width={1920}
                className={
                    "object-cover aspect-video h-20 w-36 rounded-lg brightness-50"
                }
            />
            <h1 className={"text-3xl font-bold text-slate-100 absolute"}>
                {props.text}
            </h1>
        </button>
    );
}
