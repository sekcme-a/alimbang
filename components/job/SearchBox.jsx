import { useEffect, useState } from "react";
import useData from "context/data";

const SearchBox = () => {
    const [input, setInput] = useState("")
    const {handleSelectedQuery, selectedQuery, mainPageSearchInput, setMainPageSearchInput} = useData()


    useEffect(()=> {
        if(mainPageSearchInput!==""){
            handleSelectedQuery("searchBox", mainPageSearchInput)
            
            setMainPageSearchInput("")
        }
    },[mainPageSearchInput])

    const onInputChange = (e) =>{
        handleSelectedQuery("searchBox", e.target.value)
    }

    return (
        <>
            <input
                type="text"
                name="listing-search"
                placeholder="구인공고, 직종 등을 검색하세요."
                value={selectedQuery.searchBox}
                onChange={onInputChange}    
            />
            <span className="icon flaticon-search-3"></span>
        </>
    );
};

export default SearchBox;
