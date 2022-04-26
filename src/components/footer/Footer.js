import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/assets.css";
function Footer() {
  return (
    <div>
      <section className="theme-bg call_action_wrap-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call_action_wrap">
                <div className="call_action_wrap-head">
                  <h3>Do You Have Questions ?</h3>
                  <span>
                    We'll assist you in finding the best property or homestay.
                  </span>
                </div>
                <Link to="/contact" class="btn btn-call_action_wrap">
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="dark-footer skin-dark-footer style-2">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5">
                <div className="footer_widget">
                  <img
                    src="restvilla.png"
                    class="img-footer small mb-2"
                    alt="restvilla"
                  />
                  <h4 className="extream mb-3">
                    Do you require assistance with<br>anything?</br>
                  </h4>
                  <p>
                    Every month, receive updates, hot deals, tutorials, and
                    discounts delivered directly to your inbox.
                  </p>
                  <div className="foot-news-last">
                    <div className="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Email Address"
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          class="input-group-text theme-bg b-0 text-light"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-7 ml-auto">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="footer_widget">
                      <h4 className="widget_title">Quick Links</h4>
                      <ul className="footer-menu">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="index.html#categories">Categories</Link>
                        </li>
                        <li>
                          <Link href="contact.html">Contacts</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4">
                    <div className="footer_widget"></div>
                  </div>

                  <div className="col-lg-4 col-md-4">
                    <div className="footer_widget">
                      <h4 className="widget_title">Company</h4>
                      <ul className="footer-menu">
                        <li>
                          <Link href="about-us.html">About</Link>
                        </li>
                        <li>
                          <Link href="#">Pricing</Link>
                        </li>
                        <li>
                          <Link href="#">Partners</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 text-center">
                <p className="mb-0">
                  © 2022 RestaVilla. Designed By Collins & Restercuter
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Link id="back2Top" class="top-scroll" title="Back to top" to="/">
        <i class="ti-arrow-up"></i>
      </Link>
    </div>
  );
}

export default Footer;
