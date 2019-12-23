import React  from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner"
import PropTypes from "prop-types";

const Users =({users,loading})=>
{
    console.log("DX "+users)
    if(loading)
    {
        return (
            <Spinner/>
        );
    }
    else{
        return(
            <div style={userStyle}>
            {users.map((user)=>(
                <UserItem key={user.id} user={user}/>     
            ))}
            </div>
        );
    }
};

const userStyle={
    display:"grid",
    gridTemplateColumns:"repeat(3,1fr)",
    gridGap:"1rem"
};

Users.propTypes={
    users: PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
}

export default Users;


// export class Users extends Component
// {
    
//     componentDidMount(){
//         console.log("componentDidMount-Users");
//     }
    
//     render(){
//         console.log("render-Users");
//         return(
//             <div style={userStyle}>
//             {this.props.users.map((user)=>(
//                 <UserItem key={user.id} user={user}/>     
//             ))}
//             </div>
//         );
//     }
// }