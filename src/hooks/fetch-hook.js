import { useEffect, useState } from "react";

export function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if (!uri) return;
      fetch(uri)
        .then((data) => data.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
    }, 2000);
  }, [uri]);
  return {
    loading,
    data,
    error,
  };
}
