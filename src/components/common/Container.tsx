import React, { ReactNode } from "react";

interface ContainerProps {
  maxWidth: "md" | "lg";
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ maxWidth, children }) => {
  return <div className={`container ${maxWidth}`}>{children}</div>;
};

export default Container;
