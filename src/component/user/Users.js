import React , {Component} from "react";
import UserItem from "./UserItem";

export class Users extends Component
{
    state={
        users:[
            {
                id:"",
                login:"",
                avatar_url:"",
                html_url:""
            },
            {
                id:"",
                login:"",
                avatar_url:"",
                html_url:""
            }
        ]
    }

    componentDidMount(){
        console.log("componentDidMount-Users");
    }
    
    render(){
        console.log("render-Users");
        return(
            <div style={userStyle}>
            {this.state.users.map((user)=>(
                <UserItem key={user.id} user={user}/>     
            ))}
            </div>
        );
    }
}

const userStyle={
    display:"grid",
    gridTemplateColumns:"repeat(3,1fr)",
    gridGap:"1rem"
}

export default Users;