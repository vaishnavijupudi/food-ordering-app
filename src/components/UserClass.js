import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name:"dummy",
                location:"Default",
            }
        }
        
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/vaishnavijupudi");
        const json = await data.json();
        console.log(json)

        this.setState({userInfo:json})
    }


    render(){

        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
            <img src={avatar_url}/>   
            <h2>Name:{name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: Vaishnavi Jupudi</h4>
            <div>
                <UserContext.Consumer>
                    {({loggedInUser})=> <h1 className="font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            </div>
        )
    }
}

export default UserClass