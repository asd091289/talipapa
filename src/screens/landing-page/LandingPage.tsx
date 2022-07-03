import { ReactElement } from "react";

import { PageLayout } from "../../components";

import { Grid } from "@mui/material";

import Banner from "./banner";

import ProductSection from "./product-section";

export const LandingPage = (): ReactElement => {
  return (
    <>
      <PageLayout>
        <ProductSection />
        {/* <div></div> */}
      </PageLayout>
    </>
  );
};

export default LandingPage;
