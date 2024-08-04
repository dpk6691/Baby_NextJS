import { useQuery } from "react-query";

const fetchIndiaData = async () => {
  try {
    const response = await fetch("/api/getData");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    // Filter out entries where culture is blank or only whitespace
    const filteredData = data.filter(
      (entry) => entry.culture && entry.culture.trim() !== ""
    );

    return filteredData || [];
  } catch (error) {
    throw new Error("Failed to fetch and filter data: " + error.message);
  }
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
