import React from "react";
import {Link, Switch, Route, Redirect} from "react-router-dom";
import {PostDetails} from "./PostDetails";

export function Posts(props) {
    console.log(props);

    const [posts, setPosts] = React.useState([]);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();

        setPosts(json)
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return(
        <div>
            <Switch>
                <Route path='/posts/:id' exact>
                    <PostDetails/>
                </Route>

                <Route>
                    <Redirect to="/posts"/>
                </Route>
            </Switch>
            <ul>
                {posts.map(el => <Link to={`/posts/${el.id}`}><li key={el.id}>{el.title} - {el.id}</li> </Link>)}
            </ul>
        </div>
    )
}