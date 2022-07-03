import { ReactElement } from "react";

import { Navbar, Footer } from "../../layout";

export const PageLayout = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default PageLayout;
