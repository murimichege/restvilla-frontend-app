import React from 'react'
import {Link} from 'react-router-dom'
import { FaSignInAlt } from "react-icons/fa";

function Navbar() {

    return (
        <div className="header header-transparent change-logo">
            <div className="container">
                <nav id="navigation" className="navigation navigation-landscape">
                    <div className="nav-header">
                        <a className="nav-brand static-logo" href="index.html"><img src="restvilla.png" className="logo" alt="restvilla" /></a>
                        <a className="nav-brand fixed-logo" href="index.html"><img src="restvilla.png" className="logo" alt="restvilla" /></a>
                        <div className="nav-toggle"></div>
                        <div className="mobile_nav">
                            <ul>
                                <li>
                                    <Link to="/auth" className="alio_green" id="mobile_login_action">
                                        <i className="fas fa-sign-in-alt mr-1"><FaSignInAlt/></i><span className="dn-lg">Sign In</span>
                                    </Link>
                                </li>
                                <li className="nav-item avatar dropdown" id="mobile_user_profile_action">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
                                      aria-haspopup="true" aria-expanded="false" style={{paddingTop: '7px'}}>
                                          
                                      <img src="https://mdbootstrap.com/img/Photos/Avatars/img (1).jpg" class="avatar"
                                        alt="avatar " style={{borderRadius: "50% !important",
                                        width: "34px"}}/>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-lg-right dropdown-dark"
                                      aria-labelledby="navbarDropdownMenuLink-55">
                                      <Link className="dropdown-item" to="/Profile"> Profile</Link>
                                      <Link className="dropdown-item" to="/Favourites">My Favourites</Link>
                                      <Link className="dropdown-item" to="/">Settings</Link>
                                      <Link className="dropdown-item" href="#" onclick="backToLogin()">Log Out</Link>
                                    </div>
                                  </li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-menus-wrapper" style="transition-property: none;">
                        <ul className="nav-menu">
                            <li className="active"><Link to="/">Home</Link>
                            </li>
                            <li><Link to="/About">About</Link>
                            </li>
                           <li className="active"><Link to="/">Home<span className="submenu-indicator"></span></Link>
                                <ul className="nav-dropdown nav-submenu">
                                    <li><a href="index-2.html">Home 1</a></li>
                                    <li><a href="home-2.html">Home 2</a></li>
                                    <li><a href="home-3.html">Home 3</a></li>
                                    <li><a href="home-4.html">Home 4</a></li>
                                    <li><a href="home-5.html">Home 5</a></li>
                                    <li><a href="home-6.html">Home 6</a></li>
                                    <li><a href="home-7.html">Home 7</a></li>
                                    <li><a href="map.html">Map Home</a></li>
                                </ul>
                            </li>
                           
                            <li><Link to="/">Categories<span class="submenu-indicator"></span></Link>
                                <ul class="nav-dropdown nav-submenu">
                                    <li><Link to="/Property_List?category=Office">Office </Link>	
                                    </li>
                                    <li><Link to="/Property_List?category=Studio">Studio</Link>	
                                    </li>
                                    <li><Link to="/Property_List?category=Industrial">Industrial</Link>	
                                    </li>
                                    <li><Link to ="/Property_List?category=Buildings">Buildings</Link>	
                                    </li>
                                    <li><Link to="/Property_Listcategory=Commercial">Commercial</Link>	
                                    </li>
                                    <li><Link to="/Property_List?category=Home_Villas">Home & Villas</Link>	
                                    </li>
                                    <li><Link to="/Property_List?category=Garages">Garages</Link>	
                                    </li>
                                    <li><Link to="/Property_List?category=Apartment">Apartment</Link>	
                                    </li>
                                    <li><Link href="/Property_List?category=Warehouses">Warehouses</Link>	
                                    </li>
                                </ul>
                            </li>
                            
                            
                            <li><Link to ="/Contact">Contact Us</Link>
                            </li>
                            
                        </ul>
                        

                        <ul class="nav-menu nav-menu-social align-to-right">
                            
                            <li>
                                <Link to ="/Auth" class="alio_green" id="login_action">
                                    <i class="fas fa-sign-in-alt mr-1"></i><span class="dn-lg">Sign In</span>
                                </Link>
                            </li>





                            <li class="nav-item avatar dropdown" id="user_profile_action">
                                <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
                                  aria-haspopup="true" aria-expanded="false" style={{paddingTop: "7px"}}>
                                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img (1).jpg" className="avatar"
                                    alt="avatar" style={{borderRadius: '50% !important',
                                    width: "34px"}}/>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-lg-right dropdown-dark"
                                  aria-labelledby="navbarDropdownMenuLink-55">
                                  <Link className="dropdown-item" to="/Profile"> Profile</Link>
                                  <Link className="dropdown-item" to="/Favorites">My Favourites</Link>
                                  <Link className="dropdown-item" to="/Settings">Settings</Link>
                                  <Link className="dropdown-item" to="/" onclick="backToLogin()">Log Out</Link>
                                </div>
                              </li>
                            <li class="add-listing">
                                <a href="submit-property.html"  class="theme-cl">
                                     <i class="fas fa-plus-circle mr-1"></i>Add Property
                                </a>
                            </li> 
                        </ul>
                    </div>
                </nav>
            </div>
        </div>


    )
}

export default Navbar
