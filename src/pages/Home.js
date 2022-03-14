import { useState, useEffect } from "react";
import {getAllCategories} from '../api';
import {Loader} from '../components/Loader';
import { CategoryList } from "../components/CategoryList";
import Search from "../components/Search";


export default function Home () {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const handleSearch = (str) => {
        setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
    }

    useEffect(()=>{
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog(data.categories);
        });
    });

    return(
        <>
        <Search cb={handleSearch} />
            {!catalog.length ? (
                <Loader />
            ):(
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    )
}