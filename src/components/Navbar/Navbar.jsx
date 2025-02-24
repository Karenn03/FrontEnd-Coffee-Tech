import React from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-stone-300 opacity-95 py-1 z-50 h-18">
      <div className="mx-auto py-2 flex items-center justify-between px-4">
        {/* Lado izquierdo */}
        <div className="flex items-center space-x-4 font-bold text-lg text-[#333]">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Coffee Tech Logo" className="h-12 w-12" />
          </Link>
          <Link to="/menu">Menú</Link>
          <Link to="/mis-pedidos">Mis Pedidos</Link>
          <Link to="/reservar">Reservar Mesa</Link>
          <Link to="/carrito">Carrito</Link>
        </div>
        {/* Lado derecho */}
        <div className="flex items-center space-x-4 font-bold text-lg text-[#333]">
          <Link to="/login">Inicia Sesión</Link>
          <Link to="/signUp">Regístrate</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
