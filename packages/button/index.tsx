import React from "react";

interface ButtonProps {
  children: string;
  onClick?: () => void;
}
//button
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
