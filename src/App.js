import React ,{Component} from 'react';
import Navbar from "./component/layout/Navbar";
import Search from "./component/user/Search";
import Users from "./component/user/Users";
import './App.css';
import Axios from 'axios';

class App extends Component {
  // componentDidMount(){
  //   console.log("componentDidMount");
  //   Axios.get("https://api.github.com/users").then((res)=>{
  //     console.log(res.data);
  //   });
  // }
  state={
    users:[],
    loading:false
  }
  async componentDidMount(){
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    console.log(process.env.REACT_APP_GITHUB_SECRET);
     this.setState({loading:true});
     console.log("componentDidMountAsync");
     const res= await Axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
     `&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
     this.setState({users:res.data,loading:false});
  }

  searchUser= async text=> {
    this.setState({loading:true});
    const res= await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
    `&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
    this.setState({users:res.data.items,loading:false});
  }

  render(){
    return (
      <div>
        <Navbar/>
        <div className="container">
        <Search searchUser={this.searchUser}/>
        <Users users={this.state.users} loading={this.state.loading}/>
        </div>
       
      </div>
    );
  }
  }
export default App;
