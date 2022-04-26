import React from 'react'
import { Link } from "react-router-dom";
import DELIGENCE from '../../../assets/img/DELIGENCE.png'
import Mark from '../../../assets/img/Mark.jpg'
import Collins from '../../../assets/img/Collins.jpg'
import Lazarus from '../../../assets/img/Lazarus.jpg'

function Founders() {
    return (
        <div class="container">
				
        <div class="row align-items-center">
            
            <div class="col-lg-6 col-md-6">
                <div class="story-wrap explore-content">
                    
                    <h2>The RestVilla Story</h2>
                    <span class="theme-cl">Check out our company story and work process</span> 
                    <p class="mt-4">RestVilla is the brain child of Devligence Limited.</p>
                    <Link to="https://devligence.com" target="_blank" class="btn theme-bg btn-rounded">More About Us</Link>
                </div>
            </div>
            
            <div class="col-lg-6 col-md-6">
                <img src={DELIGENCE} class="img-fluid rounded" alt="" />
                <img src="restvilla.png" class="img-fluid rounded" alt="" />
            </div>
            
        </div>
        <div class="container">
				
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="sec-heading center">
                            <h2>Meet Our Team</h2>
                            <p>Professional & Dedicated Team</p>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    
                        <div className="team-slide item-slide">
                            
                          
                            <div className="single-team">
                                <div className="team-grid">
                            
                                    <div className="teamgrid-user">
                                        <img src={Mark} alt="" class="img-fluid" />
                                    </div>
                                    
                                    <div className="teamgrid-content">
                                        <h4>John Mark</h4>
                                        <span>Co-Founder</span>
                                    </div>
                                    
                                    <div className="teamgrid-social">
                                        <ul>
                                            <li><Link to="/About" class="f-cl"><i class="ti-facebook"></i></Link></li>
                                            <li><Link to="/About" class="t-cl"><i class="ti-twitter"></i></Link></li>
                                            <li><Link to="/About" class="i-cl"><i class="ti-instagram"></i></Link></li>
                                            <li><Link href="/About" class="l-cl"><i class="ti-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                        
                                </div>
                            </div>
                            
                            <div className="single-team">
                                <div className="team-grid">
                            
                                    <div className="teamgrid-user">
                                        <img src={Collins} alt="" class="img-fluid" />
                                    </div>
                                    
                                    <div className="teamgrid-content">
                                        <h4>Collins Munene</h4>
                                        <span>Founder</span>
                                    </div>
                                    
                                    <div className="teamgrid-social">
                                        <ul>
                                        <li><Link to="/About" class="f-cl"><i class="ti-facebook"></i></Link></li>
                                            <li><Link to="/About" class="t-cl"><i class="ti-twitter"></i></Link></li>
                                            <li><Link to="/About" class="i-cl"><i class="ti-instagram"></i></Link></li>
                                            <li><Link href="/About" class="l-cl"><i class="ti-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                        
                                </div>
                            </div>

                        
                            <div className="single-team">
                                <div className="team-grid">
                            
                                    <div className="teamgrid-user">
                                        <img src={Lazarus} alt="" class="img-fluid" />
                                    </div>
                                    
                                    <div className="teamgrid-content">
                                        <h4>Lazarus Chakara</h4>
                                        <span>Content Writer</span>
                                    </div>
                                    
                                    <div className="teamgrid-social">
                                        <ul>
                                        <li>
                                            <Link to="/About" class="f-cl"><i class="ti-facebook"></i></Link></li>
                                            <li><Link to="/About" class="t-cl"><i class="ti-twitter"></i></Link></li>
                                            <li><Link to="/About" class="i-cl"><i class="ti-instagram"></i></Link></li>
                                            <li><Link href="/About" class="l-cl"><i class="ti-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                        
                                </div>
                            </div>
                        
                            
                        </div>
                    
                    </div>
                </div>
            
            </div>
        
    </div>
    )
}

export default Founders
