import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { FieldCard, FlightDetails } from "../components";
import { useGetFlights } from "../hook/useGetFlights";
import { useState } from "react";

export const ActionSection = () => {
  const [data, loading, sourceCity, destinationCities] = useGetFlights();
  const [flightDetails, setFlightDetails] = useState([]);
  const handleSubmit = (city) => {
    const filteredData = data.filter(
      (ele) =>
        ele.displayData.source.airport.cityName === city.source.cityName &&
        ele.displayData.destination.airport.cityName ===
          city.destination.cityName
    );
    setFlightDetails(filteredData);
  };
  return (
    <>
      <FieldCard
        sourceCity={sourceCity}
        destinationCities={destinationCities}
        handleSubmit={handleSubmit}
      />

      {loading ? (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          mt={5}
        >
          <CircularProgress color="secondary" />
        </Stack>
      ) : (
        <>
          {flightDetails.length > 0 ? (
            flightDetails.map((details) => (
              <FlightDetails key={details.id} flightDetails={details} />
            ))
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: 200,
              }}
            >
              <Stack alignContent="center" alignItems="center" spacing={2}>
                <ion-icon name="alert-circle-outline" size="large"></ion-icon>
                <Typography variant="h4"> No Data </Typography>
              </Stack>
            </Box>
          )}
        </>
      )}
    </>
  );
};
