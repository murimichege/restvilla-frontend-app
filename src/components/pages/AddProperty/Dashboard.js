import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { add_property } from "../../../redux/actions/actions";
function Dashboard() {

	const initialstate = 
	{
		property_name: "",
		property_category: "",
		property_cost: "",
		property_location:"",
		property_bedrooms:""
	}
	//states
	const [form, setForm] = useState(initialstate)
	const dispatch = useNavigate()
	const navigate = useDispatch()


	const add_Property_Submit = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
	}
	const onPropertyChange = (e) => {
		e.preventDefault()
		dispatch(add_property(form, navigate))

	}
		
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
                <h4 id="profile_name">Header</h4>
              </div>

              <div className="dash_user_menues">
                <ul>
                  <li>
                    <Link href="my-profile.html">
                      <i class="fa fa-user-tie"></i>My Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="favourites.html">
                      <i class="fa fa-bookmark"></i>Favourite Properties
                      <span class="notti_coun style-2" id="favourite_count">
                        7
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="my-property.html">
                      <i class="fa fa-tasks"></i>My Properties
                    </Link>
                  </li>
                  <li class="active" id="add_property_entry">
                    <Link href="add_property.html">
                      <i class="fa fa-pen-nib"></i>Submit New Property
                    </Link>
                  </li>
                  <li>
                    <Link href="change-password.html">
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

          <div className="col-lg-9 col-md-8">
            <div className="dashboard-body">
              <div className="dashboard-wraper">
                <div className="row">
                  <form id="property">
                    <form
                      className="property_form"
					  onSubmit={add_Property_Submit}
                      id="property_form"
                      autocomplete="off"
                    >
                      <div className="col-lg-12 col-md-12">
                        <div className="submit-page">
                          <div className="frm_submit_block">
                            <h3>Basic Information</h3>
                            <div className="frm_submit_wrap">
                              <div className="form-row">
                                <div className="form-group col-md-12">
                                  <label>
                                    Property Title
                                    <Link
                                      to="/"
                                      class="tip-topdata"
                                      data-tip="Property Title"
                                    >
                                      <i class="ti-help"></i>
                                    </Link>
                                  </label>
                                  <input
                                    type="text"
									name="property_name"
                                    class="form-control"
                                    id="property_name"
									onChange={onPropertyChange}
                                  />
                                </div>

                                <div className="form-group col-md-6">
                                  <label>Property Type</label>
                                  <select
                                    id="ptypes"
                                    className="form-control"
                                    name="property_category"
									onChange={onPropertyChange}

                                  >
                                    <option value="">&nbsp;</option>
                                    <option value="Office">Office</option>
                                    <option value="Studio">Studio</option>
                                    <option value="Industrial">
                                      Industrial
                                    </option>
                                    <option value="Buildings">Buildings</option>
                                    <option value="Commercial">
                                      Commercial
                                    </option>
                                    <option value="Home Villas">
                                      Home & Villas
                                    </option>
                                    <option value="Garages">Garages</option>
                                    <option value="Apartment">Apartment</option>
                                  </select>
                                </div>

                                <div className="form-group col-md-6">
                                  <label>Price</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="property_cost"
                                    name="property_cost"
									onChange={onPropertyChange}
                                  />
                                </div>

                                <div className="form-group col-md-6">
                                  <label>Location</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="property_location"
                                    name="property_location"

                                  />
                                </div>

                                <div className="form-group col-md-6">
                                  <label>Bedrooms</label>
                                  <select
                                    id="bedrooms"
                                    class="form-control"
                                    id="property_bedrooms"
                                    name="property_bedrooms"
									onChange={onPropertyChange}
                                  >
                                    <option value="">&nbsp;</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="frm_submit_block">
                            <div className="frm_submit_wrap">
                              <div className="form-row">
                                <div className="form-group col-md-12">
                                  <label>Description</label>
                                  <textarea
                                    class="form-control h-120"
                                    id="property_description"
                                    name="property_description"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="frm_submit_block">
                            <h3>Gallery</h3>
                            <div className="frm_submit_wrap">
                              <div className="form-row">
                                <div className="form-group col-md-12">
                                  <label>Upload Gallery</label>
                                  <form
                                    action=""
                                    class="dropzone dz-clickable primary-dropzone"
                                  >
                                    <div className="dz-default dz-message">
                                      <i class="ti-gallery"></i>
                                      <span>Drag & Drop To Change Logo</span>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="frm_submit_block">
                            <h3>Contact Information</h3>
                            <div className="frm_submit_wrap">
                              <div className="form-row">
                                <div className="form-group col-md-4">
                                  <label>Name</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="property_contact_name"
                                    name="property_contact_name"
                                  />
                                </div>

                                <div className="form-group col-md-4">
                                  <label>Email</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="property_contact_email"
                                    name="property_contact_email"
                                  />
                                </div>

                                <div className="form-group col-md-4">
                                  <label>Phone</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="property_contact_phone"
                                    name="property_contact_phone"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="form-group col-lg-12 col-md-12">
                            <label>GDPR Agreement *</label>
                            <ul class="no-ul-list">
                              <li>
                                <input
                                  id="aj-1"
                                  class="checkbox-custom"
                                  name="aj-1"
                                  type="checkbox"
                                />
                                <label for="aj-1" class="checkbox-custom-label">
                                  I consent to having this website store my
                                  submitted information so they can respond to
                                  my inquiry.
                                </label>
                              </li>
                            </ul>
                          </div>

                          <div className="form-group col-lg-12 col-md-12">
                            <button
                              class="btn btn-theme"
                              type="button"
                              id="property_form_submit"
                            >
                              Submit & Preview
                            </button>
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
    </section>
  );
}

export default Dashboard;
