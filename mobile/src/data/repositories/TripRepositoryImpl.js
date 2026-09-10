import apiClient from "../api/apiClient";
import { TripRepository } from "../../domain/repositories/TripRepository";

export class TripRepositoryImpl extends TripRepository {
  async getTrips() {
    const response = await apiClient.get("/trips");
    return response.data;
  }

  async getTripById(id) {
    const response = await apiClient.get(`/trips/${id}`);
    return response.data;
  }

  async createTrip(trip) {
    const response = await apiClient.post("/trips", trip);
    return response.data;
  }
}