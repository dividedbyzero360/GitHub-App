import React ,{useState, Fragment} from 'react';
import Navbar from "./component/layout/Navbar";
import Search from "./component/user/Search";
import Users from "./component/user/Users";
import User from "./component/user/User";
import Alert from "./component/user/Alert";
import About from "./component/pages/About";
import './App.css';
import Axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import GithubState from './context/github/GithubState';

const App = ()=> {

   const [users,setUsers]=useState([]);
   const [user,setUser]=useState({});
   const [loading,setLoading]=useState(false);
   const [alert,setAlert]=useState(null);
   const [repos,setRepos]=useState([]);



  const searchUser= async username=>{
    setLoading(true);
    const res= await Axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
    `&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
    setUser(res.data);
    setLoading(false);
  }

  const getUserRepos= async username=>{
    setLoading(true);
    const res= await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
    `&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
    setRepos(res.data)
    setLoading(false);
  }

  const clearUsers=()=> {
    setUsers([]);
    setLoading(false);
  }

  const showAlert=(msg,type)=>{
    setAlert({msg,type});
    setTimeout(()=> setAlert(null) ,2000);
  }

 
    
    return (
      <GithubState>
      <Router>
      <div>
        <Navbar/>
        <div className="container">
        <Alert  alert={alert}/>
        <Switch>
          <Route exact path="/" render={props=>(
            <Fragment>
              <Search clearUsers={clearUsers} showClear={users.length > 0 ? true : false} setAlert={showAlert} />
              <Users users={users} loading={loading}/>
            </Fragment>
          )}>
          </Route>
          <Route exact path="/about" component={About}/>
          <Route exact path="/user/:login" render={props=>(
            <User {...props} 
            getUser={searchUser} 
            user={user} 
            loading={loading} 
            getUserRepos={getUserRepos}
            repos={repos}
            />
            )}/>
        </Switch>
        </div>
      </div>
      </Router>
      </GithubState>
    );
  }
  
export default App;



// class App extends Component {
//   // componentDidMount(){
//   //   console.log("componentDidMount");
//   //   Axios.get("https://api.github.com/users").then((res)=>{
//   //     console.log(res.data);
//   //   });
//   // }
//   state={
//     users:[],
//     user:{},
//     loading:false,
//     alert:null,
//     repos:[]
//   }
//   async componentDidMount(){
//     console.log("App compentDidMount")
//     // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
//     // console.log(process.env.REACT_APP_GITHUB_SECRET);
//      this.setState({loading:true});
//     //  console.log("componentDidMountAsync");
//     console.log("App compentDidMount2")
//      const res= await Axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
//      `&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
//      this.setState({users:res.data,loading:false});
//   }

//   searchUsers= async text=> {
//     this.setState({loading:true});
//     const res= await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
//     `&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
//     this.setState({users:res.data.items,loading:false});
//   }

//   searchUser= async username=>{
//     this.setState({loading:true});
//     const res= await Axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
//     `&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
//     this.setState({user:res.data,loading:false});
//   }

//   getUserRepos= async username=>{
//     this.setState({loading:true});
//     const res= await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
//     `&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
//     this.setState({repos:res.data,loading:false});
//   }

//   clearUsers=()=> this.setState({users:[],loading:false});

//   setAlert=(msg,type)=>{
//     this.setState({alert:{msg,type}});
//     setTimeout(()=> this.setState({alert:null}) ,2000);
//   }

//   render(){
//     const {users, loading,user,repos}=this.state;
//     return (
//       <Router>
//       <div>
//         <Navbar/>
//         <div className="container">
//         <Alert  alert={this.state.alert}/>
//         <Switch>
//           <Route exact path="/" render={props=>(
//             <Fragment>
//               <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false} setAlert={this.setAlert} />
//               <Users users={users} loading={loading}/>
//             </Fragment>
//           )}>
//           </Route>
//           <Route exact path="/about" component={About}/>
//           <Route exact path="/user/:login" render={props=>(
//             <User {...props} 
//             getUser={this.searchUser} 
//             user={user} 
//             loading={loading} 
//             getUserRepos={this.getUserRepos}
//             repos={repos}
//             />
//             )}/>
//         </Switch>
//         </div>
//       </div>
//       </Router>
//     );
//   }
//   }
// export default App;
