import Image from "next/image";
import { vegi } from "@/lib/constants";
import Bookmark from "@material-design-icons/svg/outlined/bookmark_border.svg";

export default function VegiCard(props: vegi) {
    return (
        <div
            className={"py-2 px-3 flex flex-col shadow-lg rounded-lg relative"}
        >
            <Image
                src={props.link}
                alt={props.vkey}
                width={300}
                height={800}
                className={"rounded-lg object-cover border mb-5"}
            />
            <h4
                className={
                    "bg-green-800 w-1/5 h-[8%] rounded-tl-lg rounded-br-lg text-slate-50 flex justify-center items-center absolute px-8 text-xs"
                }
            >
                {props.discount}%&nbsp;OFF
            </h4>
            <h3 className={"text-xs text-slate-400 font-semibold"}>
                {props.distributor}
            </h3>
            <h1>{props.name}</h1>
            <aside className={"flex text-sm gap-3 mt-10 mb-2 items-baseline"}>
                <label htmlFor="quantity" className={"text-base"}>
                    Quantity:
                </label>
                <select
                    name="quantity"
                    id="quantity"
                    className={"flex-grow border p-1 rounded"}
                >
                    <option value="">Select Quantity</option>
                    <option value="1">1kg</option>
                    <option value="2">2kg</option>
                    <option value="3">3kg</option>
                    <option value="4">4kg</option>
                </select>
            </aside>
            <hgroup className={"flex items-center gap-2"}>
                <h4>₹{props.price}</h4>
                <h4 className={"text-slate-400 line-through text-xs"}>
                    ₹{props.originalPrice}
                </h4>
            </hgroup>
            <div className={"mt-2 flex gap-2 items-center"}>
                <button
                    className={
                        "border border-slate-200 p-2 rounded hover:bg-slate-200 transition-all"
                    }
                >
                    <Image
                        src={Bookmark}
                        alt={"bookmark"}
                        width={20}
                        height={20}
                    />
                </button>
                <button className={"flex flex-1 justify-center items-center"}>
                    <h2
                        className={
                            "border border-red-600 p-2 rounded text-red-600 hover:bg-red-600 hover:text-slate-50 flex-1 transition-all"
                        }
                    >
                        Add to Cart
                    </h2>
                </button>
            </div>
        </div>
    );
}
