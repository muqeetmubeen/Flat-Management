import axios from 'axios';
import { getConfig } from './axios.config.js';

const API = "http://localhost:4000/api"
// Flats
export const createFlat = (flatData) => {
     axios.post(`${API}/flat/createFlat`,flatData,getConfig())
}

export const getmyFlats = () => 
     axios.get(`${API}/flat/getFlat`,getConfig())

export const getApprovedFlats = () => 
     axios.get(`${API}/flat/getApprove`,getConfig())

export const createEnquiry = (flatId,message) => 
     axios.post(`${API}/enquiry/sendEnquiry`,{flat_id : flatId , message},getConfig())

export const getMyEnquiries = () => 
     axios.get(`${API}/enquiry/getEnquiry`,getConfig())

export const getSellerSoldEnquiry = () => 
     axios.get(`${API}/enquiry/flats/received`,getConfig())

export const markFlatSold = (flatId,buyerUserId) => 
     axios.put(`${API}/flat/${flatId}/sold`,{sold_to_user_id : Number(buyerUserId)},getConfig())