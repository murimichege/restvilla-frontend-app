import React from 'react'
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        
	
			<section class="gray pt-5 pb-5">
				<div class="container-fluid">
								
					<div class="row">
						
						<div class="col-lg-3 col-md-4">
							<div class="property_dashboard_navbar">
								<div class="dash_user_avater">
									<img src="https://mdbootstrap.com/img/Photos/Avatars/img (1).jpg" class="img-fluid avater" alt=""/>
									<h4 id="profile_name"></h4>
								
								</div>
								
								<div class="dash_user_menues">
									<ul>
										<li><Link to="/MyProperty"><i class="fa fa-user-tie"></i>My Profile</Link></li>
										<li ><Link to ="/Favorites.js"><i class="fa fa-bookmark"></i>Favourite Properties<span class="notti_coun style-2" id="favourite_count">7</span></Link></li>
										<li class="active"><Link to="/MyProperty"><i class="fa fa-tasks"></i>My Properties</Link></li>
										<li id="add_property_entry"><Link to="/AddProperty"><i class="fa fa-pen-nib"></i>Submit New Property</Link></li>
										<li><Link to="/ChangePassword"><i class="fa fa-unlock-alt"></i>Change Password</Link></li>
									</ul>
								</div>
								
								<div class="dash_user_footer">
									<ul>
										<li><a href="#"><i class="fa fa-power-off"></i></a></li>
										<li><a href="#"><i class="fa fa-comment"></i></a></li>
										<li><a href="#"><i class="fa fa-cog"></i></a></li>
									</ul>
								</div>
								
							</div>
						</div>
						
						<div class="col-lg-9 col-md-8 col-sm-12">
							<div class="dashboard-body">
							
								<div class="row">
									<div class="col-lg-12 col-md-12">
										<div class="_prt_filt_dash">
											<div class="_prt_filt_dash_flex">
												<div class="foot-news-last">
													<div class="input-group">
													  <input type="text" class="form-control" placeholder="Email Address"/>
														<div class="input-group-append">
															<span type="button" class="input-group-text theme-bg b-0 text-light"><i class="fas fa-search"></i></span>
														</div>
													</div>
												</div>
											</div>
											<div class="_prt_filt_dash_last m2_hide">
												<div class="_prt_filt_radius">
													
												</div>
												<div class="_prt_filt_add_new">
													<a href="add_property.html" class="prt_submit_link"><i class="fas fa-plus-circle"></i><span class="d-none d-lg-block d-md-block">List New Property</span></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div class="row">
									<div class="col-lg-12 col-md-12">
										<div class="dashboard_property">
											<div class="table-responsive">
												<table class="table">
													<thead class="thead-dark">
														<tr>
														  <th scope="col">Property</th>
														  <th scope="col" class="m2_hide">Leads</th>
														  <th scope="col" class="m2_hide">Stats</th>
														  <th scope="col" class="m2_hide">Posted On</th>
														  <th scope="col">Status</th>
														  <th scope="col">Action</th>
														</tr>
													</thead>
													<tbody id="my_properties_list">
													
												
														
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								
							
								
							</div>
								
						</div>
						
					</div>
				</div>
			</section>
		
    )
}

export default Dashboard
