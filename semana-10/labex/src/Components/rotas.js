
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";  

import Header from "./header";
import Footer from "./footer";
import AdminHomePage        from "./Paginas/AdminHomePage";
import HomePage             from "./Paginas/HomePage";
import ListTripsPage        from "./Paginas/ListTripsPage";
import Login                from "./Paginas/Login"

/*
import ApplicationFormPage  from "./Paginas/ApplicationFormPage";
import CreateTripPage       from "./Paginas/CreateTripPage";
import TripDetailsPage      from "./Paginas/TripDetailsPage";
*/
export default function Rotas() {

    return (
        
        <BrowserRouter>
            <Header/>
                <Switch>

                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/admin"}>
                    <AdminHomePage />
                </Route>

                <Route exact path={"/viagens"}>
                    <ListTripsPage />
                </Route>

                
                <Route exact path={"/login"}>
                    <Login />
                </Route>



                </Switch>

            <Footer/>
        </BrowserRouter>

    )
}