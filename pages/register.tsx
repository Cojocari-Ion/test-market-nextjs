import React from "react";
import MainContainer from "@/components/register&login/MainContainer";
import RegisterForm from "@/components/register&login/RegisterForm";

type Props = {};

const register = (props: Props) => {
  return (
    <>
      <MainContainer form={<RegisterForm />} />
    </>
  );
};

export default register;
