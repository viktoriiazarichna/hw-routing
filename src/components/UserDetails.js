import React, {useState} from "react";
import {useHistory, useParams} from 'react-router-dom';


export function UserDetails (props) {
    const [user, setUser] = useState();

    const {id} = useParams();
    const history = useHistory();

    const fetchData = async () => {
        const response = await fetch ( `https://jsonplaceholder.typicode.com/users/${id}`);
        const json = await response.json();

        setUser(json);
    }

    React.useEffect(() => {
        fetchData();
    }, [id]);

    return(
        <div>
            <h2> user details</h2>

            {user && (<> <h3>{user.name}</h3> <p>{user.username}</p> </>)}
            <button onClick={() => history.push(`/users/${+id + 1}`)}> go to next user </button>

        </div>
    )
}