import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const getTrips = async () => {
  const response = await axios.get(`${API_URL}/trips`);
  return response.data;
};

export const getTripById = async (id) => {
  const response = await axios.get(`${API_URL}/trips/${id}`);
  return response.data;
};

export const createTrip = async (trip) => {
  const response = await axios.post(`${API_URL}/trips`, trip);
  return response.data;
};