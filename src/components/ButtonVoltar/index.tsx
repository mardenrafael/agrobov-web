import { useRouter } from "next/router";
import React from "react";
import Button from "../Button";

const ButtonVoltar: React.FC = () => {
  const router = useRouter();
  return (
    <Button variant="outline" onClick={() => router.back()}>
      Voltar
    </Button>
  );
};

export default ButtonVoltar;
