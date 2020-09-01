import React from "react";
import { Route, Switch } from "react-router-dom";
import HostSignUp from '../Components/HostSignUp/HostSignUp'
import { Userprofile } from "../components/Userprofile/Userprofile";


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user" exact render={(props) => <Userprofile {...props}/>}/>
        </Switch>
    )
}

