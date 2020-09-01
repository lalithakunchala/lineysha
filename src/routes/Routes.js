import React from "react";
import { Route, Switch } from "react-router-dom";
import Booking from '../components/Booking/Booking'
import  Userprofile  from "../components/Userprofile/Userprofile";


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact render={(props) => <Userprofile {...props}/>} />
            <Route path="/:id" exact render={(props) => <Booking {...props}/>}/>
        </Switch>
    )
}

