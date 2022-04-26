import React from 'react'
import { Link } from 'react-router-dom'
import SavedProperties from './Favorites/SavedProperties'
function ChangePassword() {

    return (
        <div>
            <SavedProperties/>
			<section class="gray pt-5 pb-5">
				<div class="container-fluid">
								
					<div class="row">
						
						<div class="col-lg-3 col-md-4">
							<div class="property_dashboard_navbar">
								
								<div class="dash_user_avater">
									<img src="https://mdbootstrap.com/img/Photos/Avatars/img (1).jpg" class="img-fluid avater" alt=""/>
									<h4 id="profile_name">Header</h4>
								</div>
								
								<div class="dash_user_menues">
									<ul>
										<li><a href="my-profile.html"><i class="fa fa-user-tie"></i>My Profile</a></li>
										<li ><a href="favourites.html"><i class="fa fa-bookmark"></i>Favourite Properties<span class="notti_coun style-2" id="favourite_count">7</span></a></li>
										<li><a href="my-property.html"><i class="fa fa-tasks"></i>My Properties</a></li>
										<li id="add_property_entry"><a href="add_property.html"><i class="fa fa-pen-nib"></i>Submit New Property</a></li>
										<li class="active"><a href="change-password.html"><i class="fa fa-unlock-alt"></i>Change Password</a></li>
									</ul>
								</div>
								
								<div class="dash_user_footer">
									<ul>
										<li><Link to="/"><i class="fa fa-power-off"></i></Link></li>
										<li><Link to="/"><i class="fa fa-comment"></i></Link></li>
										<li><Link to="/"><i class="fa fa-cog"></i></Link></li>
									</ul>
								</div>
								
							</div>
						</div>
						
						<div class="col-lg-9 col-md-8 col-sm-12">
							<div class="dashboard-body">
							
								<div class="dashboard-wraper">
								
									<div class="frm_submit_block">	
										<h4>Change Your Password</h4>
										<div class="frm_submit_wrap">
											<div class="form-row">
											
												<div class="form-group col-lg-12 col-md-6">
													<label>Old Password</label>
													<input type="password" class="form-control"/>
												</div>
												
												<div class="form-group col-md-6">
													<label>New Password</label>
													<input type="password" class="form-control"/>
												</div>
												
												<div class="form-group col-md-6">
													<label>Confirm password</label>
													<input type="password" class="form-control"/>
												</div>
												
												<div class="form-group col-lg-12 col-md-12">
													<button class="btn btn-theme" type="submit">Save Changes</button>
												</div>
												
											</div>
										</div>
									</div>
									
								</div>
								

							
							</div>
						</div>
						
					</div>
				</div>
			</section>

            
        </div>
    )
}

export default ChangePassword
