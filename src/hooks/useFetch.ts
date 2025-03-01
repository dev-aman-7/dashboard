import { useState, useEffect } from "react";
import { toast } from "sonner";

const useFetch = (fn: any, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    if (typeof fn !== "function") {
      toast.error("Invalid fetch function provided!");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fn(params);
        if (isMounted) setData(response.data);
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [fn, JSON.stringify(params)]);

  return { data, loading };
};

export default useFetch;
