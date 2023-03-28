import { PropsWithChildren } from "react";
import TopBar from "../components/TopBar/TopBar";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};

export default AuthLayout;
