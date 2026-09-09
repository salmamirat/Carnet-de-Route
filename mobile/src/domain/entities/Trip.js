export const createTrip = ({
  id = null,
  title = "",
  destination = "",
  startDate = "",
  endDate = "",
  notes = "",
}) => {
  return {
    id,
    title,
    destination,
    startDate,
    endDate,
    notes,
  };
};