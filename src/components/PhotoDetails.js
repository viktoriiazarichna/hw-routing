import React, {useState} from "react";
import {useHistory, useParams} from 'react-router-dom';


export function PhotoDetails (props) {
    const [photo, setPhoto] = useState();

    const {id} = useParams();
    const history = useHistory();

    const fetchData = async () => {
        const response = await fetch ( `https://jsonplaceholder.typicode.com/photos/${id}`);
        const json = await response.json();

        setPhoto(json);
    }

    React.useEffect(() => {
        fetchData();
    }, [id]);

    return(
        <div>
            <h2> photo details</h2>

            {photo && (<> <h3>{photo.title}</h3> <p>{photo.thumbnailUrl}</p> </>)}
            <button onClick={() => history.push(`/photos/${+id + 1}`)}> go to next photo </button>

        </div>
    )
}