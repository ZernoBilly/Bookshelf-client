import React, { useEffect, useState } from "react";

const useFetch = (
  url: string,
  method: "GET" | "POST" | "PATCH" | "DELETE",
  reqBody: any = {}
) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    let response = null;

    if (method === "GET") {
      response = await fetch(url, {
        method: method,
      });
    } else {
      response = await fetch(url, {
        method: method,
        body: JSON.stringify(reqBody),
      });
    }

    const { data, errors } = await response.json();

    if (errors) {
      setError(errors);
    }

    setData(data);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, [url, method]);

  return {
    data: data,
    error: error,
    loading: loading,
  };
};

export default useFetch;
