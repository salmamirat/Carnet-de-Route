import axios from "axios";
import { Platform } from "react-native";

const apiHost = Platform.select({
  android: "http://10.0.2.2:3001",
  default: "http://localhost:3001",
});

const apiClient = axios.create({
  baseURL: `${apiHost}/api`,
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
