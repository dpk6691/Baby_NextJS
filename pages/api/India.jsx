import { useState, useEffect } from "react";

const fetchIndiaData = async () => {
  try {
    const response = await fetch("/api/getData"); // Fetch data from server-side function
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    console.log("Fetched data:", data);

    if (!Array.isArray(data)) {
      throw new Error("Fetched data is not an array");
    }

    // Filter out entries where culture is blank or only whitespace
    const filteredData = data.filter(
      (entry) => entry.culture && entry.culture.trim() !== ""
    );

    return filteredData;
  } catch (error) {
    console.error("Error fetching and filtering data:", error);
    throw new Error("Failed to fetch and filter data: " + error.message);
  }
};

const India = () => {
  const [IndiaData, setIndiaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIndiaData();
        setIndiaData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();

    // Clean up function
    return () => {
      // Any clean up code if needed
    };
  }, []); // Empty dependency array to run effect only once

  return { IndiaData, isLoading, isError };
};

export default India;
