import { useEffect, useState } from "react";
import { getTripById } from "../services/apiService";

export const useTripDetail = (id) => {
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTrip = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getTripById(id);
      setTrip(data);
    } catch (err) {
      setError("Impossible de charger le voyage.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      loadTrip();
    }
  }, [id]);

  return {
    trip,
    loading,
    error,
  };
};