import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About/About'
import AddProperty from "../pages/AddProperty/AddProperty";
import ChangePassword from "../pages/ChangePassword";
import Contact from "../pages/contact/Contact";
import Favorites from "../pages/Favorites/Favorites";
import MyProperty from "../pages/myproperty/MyProperty";
import Profile from "../pages/profile/Profile";
import PropertyList from "../pages/PropertyList/PropertyList";
import Auth from '../Authentication/Register'
import Register from "../Authentication/Register";
import SavedProperties from "../pages/Favorites/SavedProperties";
import Login from "../Authentication/Login";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Add_Property' element={<AddProperty/>}/>
          <Route path='/Change_Password' element={<ChangePassword/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Favorites' element={<Favorites/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/My_Property' element={<MyProperty/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Property_List' element={<PropertyList/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Saved_Properties' element={<SavedProperties/>}/>



          <Route/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
