import React from "react";
import { ReactComponent as Dio } from "../components/icons/logo.svg";

export default function NavBar() {
  return (
    <div className="nav-bar h-12 flex items-center px-1 text-white justify-between">
      <Dio height={"2rem"} />
      <div className="links flex gap-3">
        <button>Home</button>
        <button className="btn">Entrar</button>
        <button className="btn">Cadastrar</button>
      </div>
    </div>
  );
}
