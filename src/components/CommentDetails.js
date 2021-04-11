import React, {useState} from "react";
import {useHistory, useParams} from "react-router-dom";

export function CommentDetails(props) {

    const [comment, setComment] = useState();


    const {id} = useParams();
    const history = useHistory();


    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
        const json = await response.json();

        setComment(json);
    }

    React.useEffect(() => {
        fetchData()
    }, [id])

    return (

        <div>
            <h2> comment details</h2>
            {comment && (<> <h3>{comment.name}</h3> <p>{comment.body}</p> </>)}

            <button onClick={() => history.push(`/comments/${+id + 1}`)}> go to next comment</button>
        </div>
    )
}