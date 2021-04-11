import React, {useState} from "react";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import {TodoDetails} from "./TodoDetails";


export function Todos () {
    const [todos, setTodos] = useState([])


    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json = await response.json();

        setTodos(json);
    }

    React.useEffect (() => {
        fetchData();
    }, [])

    return (

        <div>
            <Switch>
                <Route path="/todos/:id" exact>
                    <TodoDetails/>
                </Route>

                <Route>
                    <Redirect to="/todos"/>
                </Route>
            </Switch>
            <ul>
                {todos.map(el => <Link to={`/todos/${el.id}`}> <li key={el.id}> {el.title} - {el.completed.toString()}</li></Link>)}
            </ul>
        </div>


    )
}