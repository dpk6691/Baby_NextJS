// India.js
import { useQuery } from "react-query";
import supabase from "./supabase";

const fetchIndiaData = async () => {
  const { data, error } = await supabase
    .from("India")
    .select(
      "gender, culture, name, language, meaning_of_name, meaning_in_language"
    );

  if (error) {
    throw new Error(error.message);
  }

  // Filter out entries where culture is blank
  const filteredData = data.filter((entry) => entry.culture !== "");

  return filteredData || [];
};

const India = () => {
  const {
    data: IndiaData,
    isLoading,
    isError,
  } = useQuery("IndiaData", fetchIndiaData, {
    staleTime: 600000000, // Cache data for 1 minute (adjust as needed)
  });

  return { IndiaData, isLoading, isError };
};

export default India;
