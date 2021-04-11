import React, {useState} from 'react';
import {UserDetails} from "./UserDetails";
import {Link, Redirect, Route, Switch} from "react-router-dom";


export function Users () {

    const [users, setUsers] = useState([]);

    const fetchData = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();

        setUsers(json);
    }

    React.useEffect (() => {
        fetchData();
    }, [])

    return (
        <div>
            <Switch>
                <Route path="/users/:id" exact>
                    <UserDetails/>
                </Route>

                <Route>
                    <Redirect to="/users"/>

                </Route>

            </Switch>

            <ul>
                {users.map(el => <Link to={`/users/${el.id}`}> <li key={el.id}>{el.id} - {el.name}</li>  </Link>)}
            </ul>
        </div>

    )
}