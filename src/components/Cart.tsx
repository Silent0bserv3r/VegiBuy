import "material-icons/iconfont/outlined.css";
import Badge from "@/components/Badge";
export default function Cart() {
    return (
        <button className={"flex justify-center items-center"}>
            <div
                id="icon-wrapper"
                className={
                    "flex flex-col justify-center items-baseline leading-3"
                }
            >
                <span className="material-icons-outlined !text-2xl">
                    shopping_cart
                </span>
                <h3 className={"text-xs font-bold m-0 relative bottom-2"}>
                    Cart
                </h3>
            </div>
            <Badge tag={3} />
        </button>
    );
}
