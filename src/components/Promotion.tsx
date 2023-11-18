import Image from "next/image";
import Link from "next/link";

type PromotionProps = {
    image?: string;
    link?: string;
};

export default function Promotion(props: PromotionProps) {
    return (
        props.image && (
            <Link href={props.link ?? ""} className={"mt-5 rounded-lg"}>
                <Image
                    src={`/assets/${props.image}.jpg`}
                    alt={"Promotional Image"}
                    width={1920}
                    height={960}
                    className={"w-full max-w-5xl rounded-lg"}
                />
            </Link>
        )
    );
}
