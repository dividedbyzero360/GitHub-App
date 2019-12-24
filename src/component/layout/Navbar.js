import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} />{title}
            </h1>
            <ul>
                <li>
                    <Link to="/" >Home</Link>
                    <Link to="/about" >About</Link>
                </li>
            </ul>
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'Github-finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};



export default Navbar



// export class Navbar extends React.Component
// {
//     static defaultProps={
//         title:'Github-finder',
//         icon:'fab fa-github'
//     }
//     static propTypes={
//         title: PropTypes.string.isRequired,
//         icon:PropTypes.string.isRequired
//     }
//     render(){
//         return(
//             <nav className="navbar bg-primary"> 
//             <h1>
//                 <i className={this.props.icon}/>{this.props.title}
//             </h1>
//             </nav>
//         );
//     }

// }
