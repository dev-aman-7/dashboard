import { useState, useEffect } from "react";
import { toast } from "sonner";

interface UseFetchProps<T> {
  fetchFn: () => Promise<T>;
  dependencies?: any[];
  onError?: (error: any) => void;
}

const useFetch = <T>({
  fetchFn,
  dependencies = [],
  onError,
}: UseFetchProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    if (typeof fetchFn !== "function") {
      toast.error("Invalid fetch function provided!");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchFn();
        if (isMounted) setData(response);
      } catch (error) {
        console.error("Fetch Error:", error);
        if (onError) onError(error);
        else toast.error("Failed to fetch data.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, dependencies);

  return { data, loading };
};

export default useFetch;
