import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setDataLoading(true);
    fetch(url)
      .then((response) =>
        response.json().then((data) => {
          setData(data);
          setDataLoading(false);
        })
      )
      .catch((error) => {
        console.log(error);
        setError(true);
        setDataLoading(false);
      });
  }, [url]);

  return { data, isDataLoading, error };
};
