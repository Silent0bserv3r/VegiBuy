import Banner from "@/components/Banner";

export default function BannerCarousel() {
    return (
        <div className={"container max-w-5xl flex mt-14 justify-between"}>
            <Banner image={"banner1"} text={"Pizza"} />
            <Banner image={"banner2"} text={"Coffee"} />
            <Banner image={"banner3"} text={"Drinks"} />
            <Banner image={"banner4"} text={"Snacks"} />
            <Banner image={"banner5"} text={"Healthy"} />
            <Banner image={"banner6"} text={"Tasty"} />
        </div>
    );
}
