import { ReactElement } from "react";

import { PageLayout } from "../../components";

import { Grid } from "@mui/material";

import Banner from "./banner";

export const LandingPage = (): ReactElement => {
  return (
    <>
      <PageLayout>
        <Grid>
          <Banner />
        </Grid>
      </PageLayout>
    </>
  );
};

export default LandingPage;
