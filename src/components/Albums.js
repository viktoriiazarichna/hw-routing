import React, {useState} from "react";
import {Link, Switch, Route, Redirect} from "react-router-dom";
import {AlbumDetails} from "./AlbumDetails";

export function Albums(props) {
    console.log(props);

    const [albums, setAlbums] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const json = await response.json();

        setAlbums(json)
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return(
        <div>
            <Switch>
                <Route path='/albums/:id' exact>
                    <AlbumDetails/>
                </Route>

                <Route>
                    <Redirect to="/albums"/>
                </Route>
            </Switch>
            <ul>
                {albums.map(el => <Link to={`/albums/${el.id}`}><li key={el.id}>{el.id} - {el.title}</li> </Link>)}
            </ul>
        </div>
    )
}