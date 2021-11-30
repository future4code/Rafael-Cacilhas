import React              from "react";
import { Switch, Route}   from "react-router-dom";

import Cadastro   from "../pages/CadastroPage/CadastroPage";
import Feed       from "../pages/FeedPage/FeedPage";
import Login      from "../pages/LoginPage/LoginPage";
import Post       from "../pages/PostPage/PostPage";
import Erro       from "../pages/ErrorPage/ErrorPage";


const Router = ({textoBotao, setTexto}) => {
    
    return (

            <Switch>

                <Route exact path='/login'>
                    <Login textoBotao={textoBotao} setTexto={setTexto}  />
                </Route>


                <Route exact path='/'>
                    <Feed />
                </Route>

                <Route exact path ='/cadastro'>
                    <Cadastro textoBotao={textoBotao} setTexto={setTexto}  />
                </Route>

                <Route exact path='/post/:id'>
                    <Post />
                </Route>  

                <Route>
                    <Erro />
                </Route>               

            </Switch>
    )
}

export default Router