import * as React from "react";
import "./style.css";

interface IMain {
  children: React.ReactNode;
}

export const Main = ({ children }: IMain) => {
  return <div className="main">{children}</div>;
};
