import BannerImg from "../assets/banner.jpg";
import { Box } from "@mui/material";

export const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <img
        src={BannerImg}
        alt="Banner"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </Box>
  );
};
