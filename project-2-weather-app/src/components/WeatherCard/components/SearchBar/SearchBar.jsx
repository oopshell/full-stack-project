const SearchBar = () => {
    return (
        <div className="row-span-1 col-span-4 flex items-end">
            <div className="bg-white p-1 rounded-xl">
                <input type="text" value="Search for a city" className="bg-white w-96 pl-5 text-slate-300" />
                <button className="text-white bg-indigo-700 px-8 py-2 rounded-xl">Search</button>
            </div>
        </div>
    )
}

export default SearchBar;
