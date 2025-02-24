import React from "react";
import { Link } from "react-router-dom";
import forms from "../../assets/img/forms.jpg";
import logo from "../../assets/img/logo.png";
import Navbar from "../../components/Navbar/Navbar";
import Input1 from "../../components/Inputs/Input1";

const ResetPassword = () => {
  return (
    <>
      <Navbar />
      <section
        className="flex justify-center items-center h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${forms})` }}
      >
        <div className="absolute inset-0 bg-[#150D0C99] z-10"></div>
        <div className="bg-[#978F84F2] bg-opacity-95 rounded-3xl p-6 max-w-[360px] w-full shadow-lg text-center text-white z-20 relative mr-[45%] ">
          <div className="text-center mb-4">
            <img className="w-[70px] mx-auto" src={logo} alt="Logo" />
          </div>
          <h2 className="font-montserrat font-bold text-[#4A362F] text-base mb-4">
            ¿Olvidaste tu contraseña?
          </h2>
          <h4 className="font-montserrat font-bold text-white text-base mb-4">
            Ingresa tu correo electrónico para restablecerla.
          </h4>
          <form className="space-y-4">
            <Input1
              icon="fa-envelope"
              type={"email"}
              placeholder={"Correo Electrónico"}
            />
            <button
              type="submit"
              className="w-full py-2 bg-[#4A362F] text-white border-none rounded-xl cursor-pointer text-base mt-2 h-10"
            >
              Restablecer Contraseña
            </button>
            <Link
              to="/login"
              className="w-full content-center font-montserrat block text-[#4A362F] border-2 rounded-xl text-base mt-0.5 mb-2 no-underline font-bold h-10"
            >
              Inicia Sesión
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
