import React, {useState} from "react";
import {useHistory, useParams} from "react-router-dom";

export function AlbumDetails() {

    const [album, setAlbum] = useState();


    const {id} = useParams();
    const history = useHistory();


    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
        const json = await response.json();

        setAlbum(json);
    }

    React.useEffect(() => {
        fetchData()
    }, [id])

    return (

        <div>
            <h2> album details</h2>
            {album && (<> <h3>{album.id}</h3> <p>{album.title}</p> </>)}

            <button onClick={() => history.push(`/albums/${+id + 1}`)}> go to next album</button>
        </div>
    )
}