export class TripRepository {
  async getTrips() {
    throw new Error("getTrips() must be implemented");
  }

  async getTripById(id) {
    throw new Error("getTripById() must be implemented");
  }

  async createTrip(trip) {
    throw new Error("createTrip() must be implemented");
  }
}