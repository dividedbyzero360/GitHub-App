import React,{useState, useContext} from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';


const Search =({clearUsers,showClear,setAlert})=>
{
    const [text, setText]=useState("");
    const githubContext = useContext(GithubContext); 
    
    const onChange=(e)=> setText(e.target.value)
    function onSubmit(e){
        e.preventDefault();
        if(text===''){
            setAlert('Please enter something','light')
        }
        else{
            githubContext.searchUsers(text);
            setText('');
        }
    }
        return(
            <div>
                <form className='form' onSubmit={onSubmit}>
                    <input 
                    type='text' 
                    name='text' 
                    placeholder='Search users...' 
                    value={text} 
                    onChange={onChange}/>
                    <input type='submit' value='search' className='btn btn-dark btn-block'/>
                </form>
                {showClear && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
            </div>
        );
    
};

Search.propTypes={
    clearUsers:PropTypes.func.isRequired
};

export default Search;





// class Search extends Component
// {
//     state={
//         text:''
//     };
//     static propTypes={
//         searchUsers:PropTypes.func.isRequired,
//         clearUsers:PropTypes.func.isRequired
//     }
//     onChange=(e)=> this.setState({[e.target.name] : e.target.value})
//     onSubmit(e){
//         e.preventDefault();
//         if(this.state.text===''){
//             this.props.setAlert('Please enter something','light')
//         }
//         else{
//             this.props.searchUsers(this.state.text);
//             this.setState({text:''});
//         }
//     }
//     render(){
//         const {clearUsers,showClear}=this.props;
//         return(
//             <div>
//                 <form className='form' onSubmit={this.onSubmit.bind(this)}>
//                     <input 
//                     type='text' 
//                     name='text' 
//                     placeholder='Search users...' 
//                     value={this.state.text} 
//                     onChange={this.onChange}/>
//                     <input type='submit' value='search' className='btn btn-dark btn-block'/>
//                 </form>
//                 {showClear && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
//             </div>
//         );
//     };
// }