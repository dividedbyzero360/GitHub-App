import React  from "react";
import PropTypes from 'prop-types';

const UserItem= ({user: {login,html_url, avatar_url}})=>
{
    return (
        <div className="card text-center">
            <img src={avatar_url} alt=""  className="round-img" style={{width:"60px"}} />
            <h3>{login}</h3>
            <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1"> More</a>
            </div>
        </div>
    );
    
}

UserItem.propTypes={
    user:PropTypes.shape({
        login:PropTypes.string.isRequired, //Have to learn to do the length check
        html_url:PropTypes.string.isRequired,
        avatar_url:PropTypes.string.isRequired
    })
}

export default UserItem;



// export class UserItem extends Component
// {
//     constructor()
//     {
//         super();
//         this.state={
//             id:"",
//             login:"",
//             avatar_url:"",
//             html_url:""
//         }
//     }
//     render(){
//         const {login,html_url, avatar_url} =this.props.user;
//         return (
//             <div className="card text-center">
//                <img src={avatar_url} alt=""  className="round-img" style={{width:"60px"}} />
//                <h3>{login}</h3>
//                <div>
//                    <a href={html_url} className="btn btn-dark btn-sm my-1"> More</a>
//                </div>
//             </div>
//         );
//     }
// }