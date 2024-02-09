import {
  Stack,
  Autocomplete,
  TextField,
  Container,
  Card,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";

export const FieldCard = ({ sourceCity, destinationCities, handleSubmit }) => {
  const [city, setCity] = useState({
    source: {},
    destination: {},
  });
  return (
    <Container sx={{ mt: 3 }}>
      <Card
        sx={{
          minHeight: "300px",
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "space-between",
          borderRadius: "12px",
        }}
        component={Paper}
        elevation={4}
      >
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <Typography variant="h6">Select Source and Destination:</Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
          mt={3}
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={sourceCity}
            getOptionLabel={(options) =>
              `${options.cityName} (${options.cityCode})`
            }
            sx={{ width: 300, my: 1 }}
            onChange={(_e, value) =>
              setCity((prevData) => ({
                ...prevData,
                source: value,
              }))
            }
            renderInput={(params) => <TextField {...params} label="Source" />}
          />

          <ion-icon name="arrow-forward-outline" size="large"></ion-icon>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={destinationCities}
            getOptionLabel={(options) =>
              `${options.cityName} (${options.cityCode})`
            }
            sx={{ width: 300, my: 1 }}
            onChange={(_e, value) =>
              setCity((prevData) => ({
                ...prevData,
                destination: value,
              }))
            }
            renderInput={(params) => (
              <TextField {...params} label="Destination" />
            )}
          />
        </Stack>

        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ marginTop: "auto" }}
        >
          <Button variant="contained" onClick={() => handleSubmit(city)}>
            Search
          </Button>
        </Stack>
      </Card>
    </Container>
  );
};
