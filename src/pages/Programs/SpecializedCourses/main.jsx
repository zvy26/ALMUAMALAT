import React from "react";
import Consultation from "../../Home/_components/Consultation";
import InternationalProgram from "../InternationalProgram/InternationalPrograms";
import Information from "../InternationalProgram/Information";
import PopularCourse from "../InternationalProgram/PopularCourse";
import Payment from "../InternationalProgram/Payment";
import Services from "../InternationalProgram/Services";

const Main = () => {
  return (
    <>
      <InternationalProgram />
      <Information />
      <PopularCourse />
      <Payment />
      <Services />
      <Consultation />
    </>
  );
};

export default Main;
