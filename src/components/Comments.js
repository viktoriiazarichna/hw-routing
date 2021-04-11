import React from "react";
import {Link, Switch, Route, Redirect} from "react-router-dom";
import {CommentDetails} from "./CommentDetails";

export function Comments (props) {
    console.log(props);

    const [comments, setComments] = React.useState([]);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const json = await response.json();

        setComments(json)
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return(
        <div>
            <Switch>
                <Route path='/comments/:id' exact>
                    <CommentDetails/>
                </Route>

                <Route>
                    <Redirect to="/comments"/>
                </Route>
            </Switch>
            <ul>
                {comments.map(el => <Link to={`/comments/${el.id}`}><li key={el.id}>{el.name} - {el.email}</li> </Link>)}
            </ul>
        </div>
    )
}