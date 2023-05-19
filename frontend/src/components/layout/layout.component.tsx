import { BrowserRouter as Router, Route /*, Switch */ } from "react-router-dom";
import { HeaderSection } from "../header";
import { MainComponent } from "../main";
import { FooterComponent } from "../footer";

export default function LayoutComponent() {
  return (
    <>
      <HeaderSection />

      <MainComponent />

      <FooterComponent />
    </>

    //can implement a sidebar if needed??
  );
}
