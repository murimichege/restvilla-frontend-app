import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <section className="gray pt-5 pb-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="property_dashboard_navbar">
              <div className="dash_user_avater">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img (1).jpg"
                  class="img-fluid avater"
                  alt=""
                />
                <h4 id="profile_name"></h4>
              </div>

              <div className="dash_user_menues">
                <ul>
                  <li>
                    <Link to="/My_Property">
                      <i class="fa fa-user-tie"></i>My Profile
                    </Link>
                  </li>
                  <li class="active">
                    <Link a="favourites.html">
                      <i class="fa fa-bookmark"></i>Favourite Properties
                      <span class="notti_coun style-2" id="favourite_count">
                        7
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/My_Property">
                      <i class="fa fa-tasks"></i>My Properties
                    </Link>
                  </li>
                  <li id="/AddProperty">
                    <Link to="add_property.html">
                      <i class="fa fa-pen-nib"></i>Submit New Property
                    </Link>
                  </li>
                  <li>
                    <Link to="change-password.html">
                      <i class="fa fa-unlock-alt"></i>Change Password
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="dash_user_footer">
                <ul>
                  <li>
                    <Link to="/">
                      <i class="fa fa-power-off"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="fa fa-comment"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="fa fa-cog"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="dashboard-body">
              <div className="dashboard-wraper">
                <div className="frm_submit_block">
                  <h4>Favourites</h4>
                </div>

                <table className="property-table-wrap responsive-table bkmark">
                  <tbody id="favourites_list"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
