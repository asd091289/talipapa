import { ReactElement } from "react";

import { PageLayout } from "../../components";

import { Grid } from "@mui/material";

import Banner from "./banner";
import { Body } from "../../layout/Body";

export const LandingPage = (): ReactElement => {
  return (
    <>
      <PageLayout>
       <Body/>
      </PageLayout>
    </>
  );
};

export default LandingPage;
