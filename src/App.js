import React ,{Component} from 'react';
import Navbar from "./component/layout/Navbar";
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
     this.setState({loading:false});
     console.log("componentDidMountAsync");
     const res= await Axios.get("https://api.github.com/users");
     this.setState({users:res.data,loading:true});
  }

  render(){
    console.log("render");
    return (
      <div>
        <Navbar/>
        <div className="container">
        <Users users={this.state.users}/>
        </div>
       
      </div>
    );
  }
  }
export default App;
