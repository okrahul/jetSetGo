import { Stack, Card, Typography, Paper } from "@mui/material";
import { formatDateTime } from "../utils/constant";

export const FlightDetails = ({ flightDetails }) => {
  console.log("flightDetailsflightDetails", flightDetails);
  return (
    <Card
      sx={{
        p: 3,
        m: 2,
        borderRadius: "12px",
      }}
      component={Paper}
      elevation={4}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Stack>
          <Typography variant="body2">
            {flightDetails.displayData.source.airport.cityName}
          </Typography>
          <Typography variant="body2">
            {flightDetails.displayData.source.airport.airportName}
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            {formatDateTime(flightDetails.displayData.source.depTime)}
          </Typography>
        </Stack>

        <Stack
          alignContent="center"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="body2">
            {flightDetails.displayData.stopInfo}
          </Typography>
          <ion-icon name="airplane-outline"></ion-icon>
          <Typography variant="body2">
            {flightDetails.displayData.totalDuration}
          </Typography>
        </Stack>

        <Stack>
          <Typography variant="body2">
            {flightDetails.displayData.destination.airport.cityName}
          </Typography>
          <Typography variant="body2">
            {flightDetails.displayData.destination.airport.airportName}
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            {formatDateTime(flightDetails.displayData.destination.arrTime)}
          </Typography>
        </Stack>

        <Stack>
          <Typography variant="body2">
            {flightDetails.displayData.airlines[0].airlineName}
          </Typography>
          <Typography variant="body2">₹{flightDetails.fare}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
