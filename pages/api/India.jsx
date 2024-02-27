import { useEffect, useState } from "react";
import supabase from "./supabase";

const India = () => {
  const [IndiaData, setIndiaData] = useState([]);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    async function fetchIndiaData() {
      try {
        const { data, error, count } = await supabase.from("India").select("*");

        if (error) {
          setError(error.message);
        } else {
          setIndiaData(data || []);
          setTotalCount(count || 0);
        }
      } catch (error) {
        setError(error.message);
      }
    }

    fetchIndiaData();
  }, []);

  return { IndiaData, totalCount, error };
};

export default India;
