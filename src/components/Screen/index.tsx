import React from "react";
import Header from "../Header";

// import { Container } from './styles';

export interface ScreenProps {
  children: React.ReactNode;
}
const Screen: React.FC<ScreenProps> = ({ children, ...rest }) => {
  return (
    <div className="flex flex-col h-screen" {...rest}>
      <Header titulo="Cadastro Brinco" />
      <div className="flex flex-1 flex-col h-full">{children}</div>
    </div>
  );
};

export default Screen;
