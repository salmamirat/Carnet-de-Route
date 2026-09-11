import { useEffect, useState } from "react";
import { getTrips } from "../services/apiService";

export const useTrips = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTrips = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getTrips();
      setTrips(data);
    } catch (error) {
      setError("Impossible de charger les voyages.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrips();
  }, []);

  return {
    trips,
    loading,
    error,
    loadTrips,
  };
};