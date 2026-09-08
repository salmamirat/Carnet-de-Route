import Trip from "../models/Trip.js";

export const getTrips = async (req, res) => {
  try {
    const trips = await Trip.findAll();

    res.json(trips);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
    });
  }
};

export const getTripById = async (req, res) => {
  try {
    const trip = await Trip.findByPk(req.params.id);

    if (!trip) {
      return res.status(404).json({
        message: "Voyage introuvable",
      });
    }

    res.json(trip);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
    });
  }
};

export const createTrip = async (req, res) => {
  try {
    const { title, destination, startDate, endDate, notes } = req.body;

    const trip = await Trip.create({
      title,
      destination,
      startDate,
      endDate,
      notes,
    });

    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
    });
  }
};