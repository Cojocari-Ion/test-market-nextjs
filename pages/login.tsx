import React from "react";
import MainContainer from "../components/register&login/MainContainer";
import LoginForm from "@/components/register&login/LoginForm";

type Props = {};

const login = (props: Props) => {
  return (
    <>
      <MainContainer form={<LoginForm />} />
    </>
  );
};

export default login;
