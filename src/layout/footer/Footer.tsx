import { ReactElement } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const StyledFooter = styled(Grid)(({ theme }) => ({
  height: "5rem",
}));

export const Footer = (): ReactElement => {
  return (
    <StyledFooter>
      <Grid></Grid>
    </StyledFooter>
  );
};

export default Footer;
