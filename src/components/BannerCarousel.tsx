import Banner from "@/components/Banner";

export default function BannerCarousel() {
    return (
        <div className={"container max-w-5xl flex mt-14 justify-between"}>
            <Banner id={"banner1"} text={"Pizza"} link={"/categories/pizza"} />
            <Banner
                id={"banner2"}
                text={"Coffee"}
                link={"/categories/coffee"}
            />
            <Banner
                id={"banner3"}
                text={"Drinks"}
                link={"/categories/drinks"}
            />
            <Banner
                id={"banner4"}
                text={"Snacks"}
                link={"/categories/snacks"}
            />
            <Banner
                id={"banner5"}
                text={"Healthy"}
                link={"/categories/healthy"}
            />
            <Banner id={"banner6"} text={"Tasty"} link={"/categories/tasty"} />
        </div>
    );
}
