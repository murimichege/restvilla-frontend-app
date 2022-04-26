import React from 'react'
import Founders from './Founders'

function About() {
    return (
        <div>
    <div className="page-title" style={{background:"#f4f4f4 url(assets/img/login_1.jpeg)"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    
                    <div className="breadcrumbs-wrap">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                        <h2 className="breadcrumb-title">About Us - Who We Are?</h2>
                    </div>
                    
                </div>
            </div>
        </div>
       
</div>
<Founders/>
</div>




    )
}

export default About
