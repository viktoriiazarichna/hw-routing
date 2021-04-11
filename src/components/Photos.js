import React, {useState} from 'react';
import {PhotoDetails} from "./PhotoDetails";
import {Link, Redirect, Route, Switch} from "react-router-dom";


export function Photos (props) {
    console.log(props)
    const [photos, setPhotos] = useState([]);

    const fetchData = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const json = await response.json();

        setPhotos(json);
    }

    React.useEffect (() => {
        fetchData();
    }, [])

    return (
        <div>
            <Switch>
                <Route path="/photos/:id" exact>
                    <PhotoDetails/>
                </Route>

                <Route>
                    <Redirect to="/photos"/>

                </Route>

            </Switch>

            <ul>
                {photos.map(el => <Link to={`/photos/${el.id}`}> <li key={el.id}>{el.id} - {el.title}</li>  </Link>)}
            </ul>
        </div>

    )
}