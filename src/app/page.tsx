import BannerCarousel from "@/components/BannerCarousel";
import Promotion from "@/components/Promotion";

export default function Home() {
    return (
        <main className={"w-full flex flex-col justify-center items-center"}>
            <Promotion image={"promotion"} link={"/"} />
            <BannerCarousel />
        </main>
    );
}
