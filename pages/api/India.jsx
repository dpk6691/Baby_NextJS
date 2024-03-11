import { useQuery } from "react-query";

const fetchIndiaData = async () => {
  const response = await fetch("/api/getData"); // Fetch data from server-side function
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
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
