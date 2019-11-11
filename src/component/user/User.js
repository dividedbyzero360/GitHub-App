import React ,{Component, Fragment} from 'react';
import Spinner from "../layout/Spinner"

class User extends Component {
    componentDidMount(){
        console.log(this.props);
        this.props.getUser(this.props.match.params.login);
    }
    render(){

        const {loading}=this.props;
        const {name, avatar_url, location, bio, blog,login,html_url,followers,following,public_repos,public_gists,hireable}=this.props.user;
        if(this.props.loading){
            return (
                <Spinner/>
            );
        }
        else{
            return(
                <Fragment>{name}</Fragment>
            );
        }
    }
}

export default User;