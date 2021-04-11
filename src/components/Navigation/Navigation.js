import {Link} from "react-router-dom";
import React from "react";
import './Nav.css';

export function Navigation () {

    return (
        <div className={'nav'}>

                <button className={"button-style"}>
                    <Link to="/">Home</Link>
                </button>

                <button className={"button-style"}>
                    <Link to="/posts">Posts</Link>
                </button>

                <button className={"button-style"}>
                    <Link to='/comments'> Comments </Link>
                </button >

                <button className={"button-style"}>
                    <Link to='/albums'> Albums </Link>
                </button>

                <button className={"button-style"}>
                    <Link to='/photos'> Photos </Link>
                </button>

                <button className={"button-style"}>
                    <Link to='/todos'> Todos </Link>
                </button>

                <button className={"button-style"}>
                    <Link to='/users'> Users </Link>
                </button>

        </div>
    )
}
