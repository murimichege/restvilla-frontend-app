import React from 'react'
import SingleProperty from './SingleProperty'
function PropertyList() {
    return (
        <div>
            <div class="page-title" style={{background:"#f4f4f4"}}>
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-md-12">
							
							<div class="breadcrumbs-wrap">
								<ol class="breadcrumb">
									<li class="breadcrumb-item active" aria-current="page">Properties</li>
								</ol>
								<h2 class="breadcrumb-title">Search Results</h2>
							</div>
							
						</div>
					</div>
				</div>
			</div>
			<SingleProperty/>
        </div>
    )
}

export default PropertyList
