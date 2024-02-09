import { useEffect, useState, useMemo } from "react";

export const useGetFlights = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const jetSetGoApi = "https://api.npoint.io/4829d4ab0e96bfab50e7";

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(jetSetGoApi);

      if (!response.ok) {
        setLoading(false);
        throw new Error("Network response was not ok");
      }
      const getData = await response.json();
      setLoading(false);
      setData(getData.data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sourceCities = useMemo(() => {
    const citySet = new Set();
    data.forEach((item) => {
      citySet.add(item.displayData.source.airport.cityCode);
    });
    return Array.from(citySet).map((cityCode) => ({
      cityCode,
      cityName: data.find(
        (item) => item.displayData.source.airport.cityCode === cityCode
      ).displayData.source.airport.cityName,
    }));
  }, [data]);

  const destinationCities = useMemo(() => {
    const citySet = new Set();
    data.forEach((item) => {
      citySet.add(item.displayData.destination.airport.cityCode);
    });
    return Array.from(citySet).map((cityCode) => ({
      cityCode,
      cityName: data.find(
        (item) => item.displayData.destination.airport.cityCode === cityCode
      ).displayData.destination.airport.cityName,
    }));
  }, [data]);

  return [data, loading, sourceCities, destinationCities];
};
