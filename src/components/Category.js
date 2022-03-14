import { useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom"
import { getFilterCategory } from "../api";
import { Loader } from "./Loader";
import { MealList } from "./MealList";

export default function Category() {
    const {name} = useParams();
    const history = useHistory();
    const [meals, setMeals] = useState([]);

    useEffect(()=>{
        getFilterCategory(name).then(data => setMeals(data.meals))
    }, [name]);

    
    
    return(
        <>
        {!meals.length ? <Loader /> : <MealList meals={meals} />}
        <button className="btn" onClick={history.goBack}>back</button>
        </>
    );
}; 