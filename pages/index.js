import dynamic from "next/dynamic";
import Seo from "components/common/Seo";
import Home from "components/home/Index";
import { useEffect } from "react";
import useData from "context/data";

const Index = () => {
    const {setType} = useData()
    useEffect(() => {
        setType("job")
    },[])
    return (
        <>
            <Seo pageTitle="Home" />
            <Home />
        </>
    );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
