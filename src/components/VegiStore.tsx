import { vegi, vegiproducts } from "@/lib/constants";
import VegiCard from "@/components/VegiCard";

export default function VegiStore(props: { vegiproducts: vegi[] }) {
    return (
        <div className={"container max-w-5xl mt-5 gap-5 grid grid-cols-4"}>
            {vegiproducts.map((props: vegi) => (
                <VegiCard {...props} key={`vegi-${props.vkey}`} />
            ))}
        </div>
    );
}
