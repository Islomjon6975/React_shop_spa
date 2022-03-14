import { useState, useEffect } from "react";
import {getAllCategories} from '../api';
import {Loader} from '../components/Loader';
import { CategoryList } from "../components/CategoryList";

export default function Home () {
    const [catalog, setCatalog] = useState([]);

    useEffect(()=>{
        getAllCategories().then(data => {
            setCatalog(data.categories);
        });
    });

    return(
        <>
            {!catalog.length ? (
                <Loader />
            ):(
                <CategoryList catalog={catalog} />
            )}
        </>
    )
}