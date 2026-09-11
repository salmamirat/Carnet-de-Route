import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://192.168.1.10:3001/api",
  timeout: 10000,
});

export const getTrips = async () => {
  const response = await apiClient.get("/trips");
  return response.data;
};

export const getTripById = async (id) => {
  const response = await apiClient.get(`/trips/${id}`);
  return response.data;
};

export const createTrip = async (trip) => {
  const response = await apiClient.post("/trips", trip);
  return response.data;
};
