import React, {useState} from "react";
import {useHistory, useParams} from "react-router-dom";

export function PostDetails(props) {

    const [post, setPost] = useState();


    const {id} = useParams();
    const history = useHistory();


    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const json = await response.json();

        setPost(json);
    }

    React.useEffect(() => {
        fetchData()
    }, [id])

    return (

        <div>
            <h2> post details</h2>
            {post && (<> <h3>{post.title}</h3> <p>{post.body}</p> </>)}

            <button onClick={() => history.push(`/posts/${+id + 1}`)}> go to next post</button>
        </div>
    )
}