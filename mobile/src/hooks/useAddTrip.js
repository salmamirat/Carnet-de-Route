import { useState } from "react";
import { createTrip } from "../services/apiService";

export const useAddTrip = () => {
  const [form, setForm] = useState({
    title: "",
    destination: "",
    startDate: "",
    endDate: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const submitTrip = async () => {
    try {
      setLoading(true);
      setError("");

      const newTrip = await createTrip(form);

      return newTrip;
    } catch (err) {
      setError("Impossible d'enregistrer le voyage.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    setField,
    submitTrip,
    loading,
    error,
  };
};