import Banner from "@/components/Banner";

export default function BannerCarousel() {
    return (
        <div className={"container max-w-5xl flex mt-14 justify-between"}>
            <Banner
                image={"banner1"}
                text={"Pizza"}
                link={"/categories/pizza"}
            />
            <Banner
                image={"banner2"}
                text={"Coffee"}
                link={"/categories/coffee"}
            />
            <Banner
                image={"banner3"}
                text={"Drinks"}
                link={"/categories/drinks"}
            />
            <Banner
                image={"banner4"}
                text={"Snacks"}
                link={"/categories/snacks"}
            />
            <Banner
                image={"banner5"}
                text={"Healthy"}
                link={"/categories/healthy"}
            />
            <Banner image={"banner6"} text={"Tasty"} link={"/filter/tasty"} />
        </div>
    );
}
