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
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };

  const submitTrip = async () => {
    try {
      setLoading(true);
      setError("");

      return await createTrip(form);
    } catch (error) {
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