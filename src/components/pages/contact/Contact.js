import React from 'react'
function Contact() {
    return (
        <div>
        
			<div className="page-title" style={{background:"#f4f4f4"}}>
				<div className="ht-80"></div>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="_page_tetio">
								<div className="pledtio_wrap"><span>Get In Touch</span></div>
								<h2 className="text-light mb-0">Get Assist and Friendly Support</h2>
								<p>Do you require assistance? We are available 24 hours a day, 7 days a week.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="ht-120"></div>
			</div>

<section className="pt-0">
    <div className="container">
        <div className="row align-items-center pretio_top">
            
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="contact-box">
                    <i class="ti-shopping-cart theme-cl"></i>
                    <h4>Mail Sales</h4>
                    <p>customercare@restvilla.com</p>
                
                </div>
            </div>
            
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="contact-box">
                    <i class="ti-user theme-cl"></i>
                    <h4>Call Sales</h4>
                    <span>+254 715 804742</span>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="contact-box">
                    <i className="ti-comment-alt theme-cl"></i>
                    <h4>Start Live Chat</h4>
                    <span>+254 715 804742</span>
                    <span class="live-chat">Live Chat</span>
                </div>
            </div>
            
        </div>
        
        
        <div className="row">
            <div className="col-lg-8 col-md-7">
                <div className="property_block_wrap">
                    <div className="property_block_wrap_header">
                        <h4 className="property_block_title">Fillup The Form</h4>
                    </div>
                    
                    <form action="https://loopcode.xyz/rentvilla/send_mail.php" method="post" id="contact_form">
                        <div className="contact-form">
                            
                            <div className="form-group">
                                <label className="control-label col-sm-2" for="fname">First Name*:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" for="lname">Last Name*:</label>
                                <div className="col-sm-10">
                                    <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" for="email">Email*:</label>
                                <div className="col-sm-10">
                                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" for="comment">Message*:</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" rows="5" name="comment" id="comment" placeholder="Type your message here"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" class="btn theme-bg text-light rounded">Send</button>
                                </div>
                            </div>
                            <div id="message" class="alert alert-success alert-dismissible fade"></div>
                        </div>
                    </form>
                    
                </div>
            </div>
            
            <div className="col-lg-4 col-md-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3559.303346004152!2d81.00657231451953!3d26.86210176873481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1621502911489!5m2!1sen!2sin" width="100%" height="470" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            
        </div>
      		
    </div>	
</section>
<div class="clearfix"></div>
</div>
    )
}

export default Contact
