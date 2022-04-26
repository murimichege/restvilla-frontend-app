import axios from 'axios'


const API = axios.create({baseURL: "https://restvilla.netlify.app/"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('access_token')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('access_token')).token}`;
    }  
    return req;
  });
//auth
export const login = (form) => API.post('/api/token/',form)
export const register = (form) => API.post('/user/create/',form)
//property
export const add_property = (form) => API.post('/property/create/',form)
export const get_property_location = () => API.get("property/")
export const get_featured_property = () => API.get("property/featured/")
export const create_property_by_organization = () => API.post("user/profile/create/")
export const get_property_by_category = (category_id) => API.get(`property/by_category/${category_id}`)
export const search_property_by_category = (category, location) => API.get(`/property/search/${location}/${category}`)
export const update_property = (property_id) => API.patch(`/property/update/${property_id}`)
export const search_property = (property_id) => API.get(`/property/${property_id}`)
//favorites
export const get_favorites = () => API.get('/user/property/favourites/')
export const delete_favorite =(id) => API.get(`/user/property/delete_favourites/${id}`)
export const add_favorites = (id) => API.get(`user/property/create_favourites/${id}`)
//profile
export const create_profile = () => API.post("user/profile/create/")







