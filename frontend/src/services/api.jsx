import axios from 'axios';

const API=axios.create({
    baseURL:'http://localhost:8000/api',
});

API.interceptors.request.use((config)=>{
    const token=localStorage.getItem('token');
    if(token){
     config.headers.Authorization=`Bearer ${token}`;

    }
    return config;
});



export const registration=(data)=> API.post('/user/register',data);

export const login=(data)=> API.post('/user/login',data);

export const submitContact=(data)=>API.post('/contact/submit', data);