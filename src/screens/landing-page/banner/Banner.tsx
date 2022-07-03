import { ReactElement } from "react";
import { styled } from "@mui/material/styles";

import { Grid } from "@mui/material";

import BannerImage from "../../../banner.jpg";

const BannerGrid = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${BannerImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
}));

export const Banner = (): ReactElement => {
  return (
    <>
      <BannerGrid>{/* <img src={BannerImage} alt="" /> */}</BannerGrid>
    </>
  );
};

export default Banner;
