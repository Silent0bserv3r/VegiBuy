export default function Location() {
    return (
        <button
            className={
                "flex bg-slate-300 shadow py-0.5 px-2 rounded-lg justify-center items-center"
            }
            role={"button"}
        >
            <span className={"material-icons !text-2xl"}>explore</span>
            <hgroup className={"flex-col ml-2 text-slate-600"}>
                <h3 className={"text-xs"}>
                    Delivering to{" "}
                    <b className={"text-black"}>Hyderabad 500032</b>
                </h3>
                <h2 className={"text-sm text-left"}>Update Location</h2>
            </hgroup>
        </button>
    );
}
