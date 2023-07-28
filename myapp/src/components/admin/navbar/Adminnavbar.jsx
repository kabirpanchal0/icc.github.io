import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ListIcon from '@mui/icons-material/List';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
const Adminnavbar = () => {
    
//   const nav = useNavigate();
//   const [loggedIn, setLoggedIn] = useState(localStorage.length !== 0);

//   const[username, setUsername] = useState('');


//   useEffect(() => {
//     if (localStorage.length === 0) {
//       document.getElementById("adminsignout").style.display = 'none';
//       document.getElementById("adminsignin").style.display = 'block';
//     }
//     else {
//       document.getElementById("adminsignin").style.display = 'none';
//     }


//   })
//   function adminsignin() {
//     document.getElementById('adminsignin').style.display = ""
//     setUsername('kabir'); 

//   }
//   function adminsignout() {
//     localStorage.clear();
//     setLoggedIn(false);
//     alert("Sign out successfully");
//     nav("/");

//   }

    return (
        <>

            <div className="navbar">
                <div className="wrapper"> 
                    <div className="search">
                        <input type="text" placeholder="Search....." />
                        <SearchIcon className='searchicon' />
                    </div>
                    <div className="itemss">
                       
                        <div className="itemm">
                            <LanguageIcon/>
                            English
                        </div>
                        <div className="itemm">
                            <NotificationsNoneIcon/>
                      
                        </div>
                        <div className="itemm">
                            <ChatBubbleOutlineIcon/>
                        
                        </div>
                        <div className="itemm">
                            <ListIcon/>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Adminnavbar


// <div className="container">
// <div className="row">
//     <div className="col-12 mx-auto">
//         <nav className="navbar navbar-expand-lg navbar-light">

//             <div className="container">
//                 <NavLink className="navbar-brand" to="/adminhome">Admin Page</NavLink>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <NavLink className="nav-link active" aria-current="page" to="/adminhome">Home</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/manageuser">Manage User</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/collagesdata">Manage Collages</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/countriesdata">Manage Countries</NavLink>
//                         </li>
//                         <div className="dropdown">
//                             <button className="drop-countries" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                             <p className='country-icon '> My Account</p>


//                             </button>

//                             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                
                                
                              
//                                     <h3 className="welcomekabir">Welcome Guest</h3>
                                

//                                 <li className="myaccount-field">
//                                     <NavLink to="/adminsignin" id='adminsignin' onChange={adminsignin} className="signin-icon">  Login </NavLink>

//                                 </li>

//                                 <li className="myaccount-field"><button onClick={adminsignout} id='adminsignout' className="signout-icon"> Logout  </button></li>

//                             </ul>
//                         </div>

//                     </ul>

//                 </div>
//             </div>
//         </nav>
//     </div>

// </div>
// </div>