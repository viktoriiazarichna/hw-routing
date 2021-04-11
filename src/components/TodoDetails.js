import React, {useState} from "react";
import {useHistory, useParams} from 'react-router-dom';


export function TodoDetails (props) {
    const [todo, setTodo] = useState();

    const {id} = useParams();
    const history = useHistory();

    const fetchData = async () => {
        const response = await fetch ( `https://jsonplaceholder.typicode.com/todos/${id}`);
        const json = await response.json();

        setTodo(json);
    }

    React.useEffect(() => {
        fetchData();
    }, [id]);

    return(
        <div>
            <h2> todo details</h2>

            {todo && (<> <h3>{todo.title}</h3> <p>{todo.thumbnailUrl}</p> </>)}
            <button onClick={() => history.push(`/todos/${+id + 1}`)}> go to next todo </button>

        </div>
    )
}
