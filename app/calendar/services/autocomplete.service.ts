import API from "../../shared/services/https";

export const getAutocomplete = async (
  field: "employee_name" | "department"
): Promise<string[]> => {
  const res = await API.get(`/holidays/autocomplete?field=${field}`);
  return res.data;
};
