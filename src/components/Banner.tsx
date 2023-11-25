import { cl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { banners } from "@/lib/constants";

type BannerProps = {
    id: string;
    text: string;
    link: string;
};

export default function Banner(props: BannerProps) {
    return (
        <Link
            href={props.link}
            className={cl(
                "w-36 h-20 rounded-lg",
                "flex justify-center items-center hover:scale-105 transition-all",
            )}
        >
            <Image
                src={`https://drive.google.com/uc?export=view&id=${
                    banners[props.id]
                }`}
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
        </Link>
    );
}
