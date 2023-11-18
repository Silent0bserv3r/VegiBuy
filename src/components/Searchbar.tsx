export default function Searchbar() {
    return (
        <search
            id="search-wrapper"
            className={
                "flex-1 border-2 rounded-lg items-center flex focus-within:border-fuchsia-500 gap-2"
            }
        >
            <span className={"material-icons !text-2xl ml-3 text-slate-400"}>
                search
            </span>
            <input
                type="text"
                name="search"
                id="nav-search"
                className={
                    "flex-1 rounded-sm focus:outline-0 text-sm text-slate-700"
                }
            />
        </search>
    );
}
