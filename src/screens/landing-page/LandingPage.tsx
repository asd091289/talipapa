import { ReactElement } from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { PageLayout } from "../../components";

import Banner from "./banner-carousel";
import ProductSection from "./product-section";
import { AboutUs } from "../pages/about-us";
import { Faqs } from "../pages/faqs";
import { TermOfUse } from "../pages/term-of-use";
import { Support } from "../pages/support";
import { Shop } from "../pages/shop";
import { PrivacyPolicy } from "../pages/privacy-policy";

// import { Grid } from "@mui/material";



export const LandingPage = (): ReactElement => {
  return (
    <>
      <PageLayout>
        <>
        <Banner/>
        <Router>
        <Routes>
          <Route path="/" element={<ProductSection />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/FaQs" element={<Faqs />} />
          <Route path="/terms-of-use" element={<TermOfUse />} />
          <Route path="/support" element={<Support />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/*" element={<ProductSection />} />
        </Routes>
      </Router>
        </>
      </PageLayout>
    </>
  );
};

export default LandingPage;
