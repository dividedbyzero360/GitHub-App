import React ,{Component, Fragment} from 'react';
import Navbar from "./component/layout/Navbar";
import Search from "./component/user/Search";
import Users from "./component/user/Users";
import User from "./component/user/User";
import Alert from "./component/user/Alert";
import About from "./component/pages/About";
import './App.css';
import Axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  // componentDidMount(){
  //   console.log("componentDidMount");
  //   Axios.get("https://api.github.com/users").then((res)=>{
  //     console.log(res.data);
  //   });
  // }
  state={
    users:[],
    user:{},
    loading:false,
    alert:null
  }
  async componentDidMount(){
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    // console.log(process.env.REACT_APP_GITHUB_SECRET);
     this.setState({loading:true});
    //  console.log("componentDidMountAsync");
     const res= await Axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
     `&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
     this.setState({users:res.data,loading:false});
  }

  searchUsers= async text=> {
    this.setState({loading:true});
    const res= await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
    `&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
    this.setState({users:res.data.items,loading:false});
  }

  searchUser= async username=>{
    this.setState({loading:true});
    const res= await Axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
    `&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
    this.setState({user:res.data,loading:false});

  }

  clearUsers=()=> this.setState({users:[],loading:false});

  setAlert=(msg,type)=>{
    this.setState({alert:{msg,type}});
    setTimeout(()=> this.setState({alert:null}) ,2000);
  }

  render(){
    const {users, loading,user}=this.state;
    return (
      <Router>
      <div>
        <Navbar/>
        <div className="container">
        <Alert  alert={this.state.alert}/>
        <Switch>
          <Route exact path="/" render={props=>(
            <Fragment>
              <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false} setAlert={this.setAlert} />
              <Users users={users} loading={loading}/>
            </Fragment>
          )}>
          </Route>
          <Route exact path="/about" component={About}/>
          <Route exact path="/user/:login" render={props=>(
            <User {...props} getUser={this.searchUser} user={user} loading={loading}/>
            )}/>
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
  }
export default App;
