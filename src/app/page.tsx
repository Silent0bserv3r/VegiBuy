import BannerCarousel from "@/components/BannerCarousel";
import Promotion from "@/components/Promotion";
import { vegi, vegiproducts } from "@/lib/constants";
import VegiCard from "@/components/VegiCard";
import VegiStore from "@/components/VegiStore";

export default function Home() {
    return (
        <main className={"w-full flex flex-col justify-center items-center"}>
            <Promotion image={"promotion"} link={"/"} />
            <BannerCarousel />
            <VegiStore vegiproducts={vegiproducts} />
        </main>
    );
}
