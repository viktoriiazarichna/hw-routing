import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation";
import {Posts} from './components/Posts';
import {PostDetails} from "./components/PostDetails";
import {Comments} from "./components/Comments";
import {CommentDetails} from "./components/CommentDetails";
import {Albums} from "./components/Albums";
import {AlbumDetails} from "./components/AlbumDetails";
import {Photos} from "./components/Photos";
import {PhotoDetails} from "./components/PhotoDetails";
import {Todos} from './components/Todos';
import {TodoDetails} from "./components/TodoDetails";
import {Users} from "./components/Users";
import {UserDetails} from "./components/UserDetails";


export default function App() {
  return (
      <Router>
        <div>

          <Navigation/>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/" component={Home} exact/>

            <Route path="/posts" >
              <Posts/>
            </Route>

            <Route path="/posts/:id">
              <PostDetails/>
            </Route>

            <Route path="/comments">
              <Comments/>
            </Route>

            <Route path="/comments/:id">
              <CommentDetails/>
            </Route>

            <Route path="/albums">
              <Albums/>
            </Route>

            <Route path="/albums/:id">
              <AlbumDetails/>
            </Route>

            <Route path="/photos">
              <Photos/>
            </Route>

            <Route path="/photos/:id">
              <PhotoDetails/>
            </Route>

            <Route path="/todos">
              <Todos/>
            </Route>

            <Route path="/todos/:id">
              <TodoDetails/>
            </Route>

            <Route path="/users">
              <Users/>
            </Route>

            <Route path="/users/:id">
              <UserDetails/>
            </Route>

            <Route >
              <h1>PAGE NOT FOUND</h1>
            </Route>

          </Switch>
        </div>
      </Router>
  );
}

function Home(props) {
  console.log(props);
  return <h2>Home</h2>;
}






