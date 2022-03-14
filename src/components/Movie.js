import { useRouteMatch } from "react-router-dom";
import { useParams, useHistory, useLocation } from "react-router-dom"

export default function Movie() {
    const {id} = useParams();
    const history = useHistory();
    const location = useLocation();
    const roadMatch = useRouteMatch();
    
    return(
        <>
        <h1>Some movie with id {id}</h1>
        <button className="btn" onClick={history.goBack}>Go Back</button>
        </>
    );
}; 