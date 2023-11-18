type BadgeProps = {
    tag: number;
};

export default function Badge(props: BadgeProps) {
    return (
        <div
            className={
                "rounded-full w-4 h-4 relative bottom-4 right-4 text-xs bg-red-800 text-slate-50"
            }
        >
            {props.tag}
        </div>
    );
}
