import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Search() {
    const navigate= useNavigate();
  const [search,setSearch] =useState('');
    function handleSearch(e){
        e.preventDefault();
        setSearch("");
        let value=search.trim().replace(/\s+/g,'-').toLocaleLowerCase();
        navigate(`/search/${value}`);
    }
    console.log(search);
    return (
       
                    <form className="flex items-center" onSubmit={handleSearch}>
                        <input
                            className="bg-gray-700 p-2 rounded-lg text-white w-64"
                            type="text"
                            placeholder="Search..."
                            value={search} onChange={e => setSearch(e.target.value)}
                        />
                        <button className="bg-gray-800 text-white p-4 rounded-lg ml-2 hover:bg-gray-700">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
              
    );
}

export default Search;
