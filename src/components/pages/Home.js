import React from 'react'
import Navbar from './Navbar/Navbar'
function Home() {
    return (
        <div>
			<Navbar/>
			<div class="image-cover hero_banner" style="background:url(assets/img/banner-1.png) no-repeat;" data-overlay="0">
				<div class="container">
					<h3 class="big-header-capt mb-0" id="user_greetings" style="text-align: center;"></h3>
					<h1 class="big-header-capt mb-0">Search Your Next Home</h1>
					<p class="text-center mb-4">Find new & featured property from anywhere.</p>
					
					<div class="row justify-content-center">
						<div class="col-xl-10 col-lg-11 col-md-12">
							<div class="full_search_box nexio_search lightanic_search hero_search-radius modern">
								<div class="search_hero_wrapping">
									<form id="search">
										<form class="search-form" name="search_form" id="search_form" autocomplete="off">
									<div class="row">
										<div class="col-lg-6 col-md-5 col-sm-12">
											<div class="form-group">
												<label>City/Street</label>
												<div class="input-with-icon">
													<select id="location" class="form-control" name="location">
													
													</select>
												</div>
											</div>
										</div>
										
										<div class="col-lg-5 col-md-5 col-sm-12">
											<div class="form-group">
												<label>Category</label>
												<div class="input-with-icon">
													<select id="ptypes" class="form-control" name="category">
														<option value="">&nbsp;</option>
														<option value="Office">Office</option>
														<option value="Studio">Studio</option>
														<option value="Industrial">Industrial</option>
														<option value="Buildings">Buildings</option>
														<option value="Commercial">Commercial</option>
														<option value="Home Villas">Home & Villas</option>
														<option value="Garages">Garages</option>
														<option value="Apartment">Apartment</option>
													</select>
												</div>
											</div>
										</div>
									

										<div class="col-lg-1 col-md-2 col-sm-12 small-padd">
											<div class="form-group none">
												<button class="btn search-btn" type="button" id="search_form_submit"><i class="fa fa-search"></i></button>
											</div>
										</div>
									</div>
									</form>
									</form>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
			<section class="min">
				<div class="container" id="categories">
					
					<div class="row justify-content-center">
						<div class="col-lg-7 col-md-8">
							<div class="sec-heading center">
								<h2>Which property are you looking for?</h2>
								<p>Choose Your Category</p>
							</div>
						</div>
					</div>
					
					<div class="row justify-content-center mt-4">
					
						
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="_category_box">
								<a href="property_list.html?category=Office">
									<div class="_category_elio">
										<div class="_category_thumb">
											<img src="assets/img/f-1.png" class="img-fluid hover" alt="" />
											<img src="assets/img/f-11.png" class="img-fluid simple" alt="" />
										</div>
										<div class="_category_caption">
											<h5>Office</h5>
											
										</div>
									</div>
								</a>
							</div>
						</div>
						
						
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="_category_box">
								<a href="property_list.html?category=Industrial">
									<div class="_category_elio">
										<div class="_category_thumb">
											<img src="assets/img/f-2.png" class="img-fluid hover" alt="" />
											<img src="assets/img/f-22.png" class="img-fluid simple" alt="" />
										</div>
										<div class="_category_caption">
											<h5>Industrial</h5>
											
										</div>
									</div>
								</a>
							</div>
						</div>
						
						
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="_category_box">
								<a href="property_list.html?category=Buildings">
									<div class="_category_elio">
										<div class="_category_thumb">
											<img src="assets/img/f-3.png" class="img-fluid hover" alt="" />
											<img src="assets/img/f-33.png" class="img-fluid simple" alt="" />
										</div>
										<div class="_category_caption">
											<h5>Buildings</h5>
											
										</div>
									</div>
								</a>
							</div>
						</div>
						
						
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="_category_box">
								<a href="property_list.html?category=Commercial">
									<div class="_category_elio">
										<div class="_category_thumb">
											<img src="assets/img/f-4.png" class="img-fluid hover" alt="" />
											<img src="assets/img/f-44.png" class="img-fluid simple" alt="" />
										</div>
										<div class="_category_caption">
											<h5>Commercial</h5>
											
										</div>
									</div>
								</a>
							</div>
						</div>
						
					
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="_category_box">
								<a href="property_list.html?category=Home_Villa">
									<div class="_category_elio">
										<div class="_category_thumb">
											<img src="assets/img/f-5.png" class="img-fluid hover" alt="" />
											<img src="assets/img/f-55.png" class="img-fluid simple" alt="" />
										</div>
										<div class="_category_caption">
											<h5>Home & Villas</h5>
											
										</div>
									</div>
								</a>
							</div>
						</div>
						
						
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="_category_box">
								<a href="property_list.html?category=Garages">
									<div class="_category_elio">
										<div class="_category_thumb">
											<img src="assets/img/f-6.png" class="img-fluid hover" alt="" />
											<img src="assets/img/f-66.png" class="img-fluid simple" alt="" />
										</div>
										<div class="_category_caption">
											<h5>Garages</h5>
											
										</div>
									</div>
								</a>
							</div>
						</div>
						
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="_category_box">
								<a href="property_list.html?category=Studio">
									<div class="_category_elio">
										<div class="_category_thumb">
											<img src="assets/img/f-7.png" class="img-fluid hover" alt="" />
											<img src="assets/img/f-77.png" class="img-fluid simple" alt="" />
										</div>
										<div class="_category_caption">
											<h5>Studio</h5>
											
										</div>
									</div>
								</a>
							</div>
						</div>
						
						
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="_category_box">
								<a href="property_list.html?category=Apartment">
									<div class="_category_elio">
										<div class="_category_thumb">
											<img src="assets/img/f-8.png" class="img-fluid hover" alt="" />
											<img src="assets/img/f-88.png" class="img-fluid simple" alt="" />
										</div>
										<div class="_category_caption">
											<h5>Apartment</h5>
											
										</div>
									</div>
								</a>
							</div>
						</div>
						
					</div>	
					
				</div>
			</section>
	
			<section class="pt-0 min">
				<div class="container">
					
					<div class="row justify-content-center">
						<div class="col-lg-7 col-md-8">
							<div class="sec-heading center">
								<h2>Featured Listed Property</h2>
								<p>Top properties </p>
							</div>
						</div>
					</div>
					
					<div class="row justify-content-center" id="single_property">
						
						
					
					
						
					</div>	
					
				</div>
			</section>
			<div class="clearfix"></div>
        </div>
    )
}

export default Home
