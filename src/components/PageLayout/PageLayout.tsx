import { ReactElement } from "react";

import { Navbar, Footer } from "../../layout";

interface PageLayoutProps {
  children: ReactElement;
}

export const PageLayout = (props: PageLayoutProps): ReactElement => {
  const { children } = props;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
