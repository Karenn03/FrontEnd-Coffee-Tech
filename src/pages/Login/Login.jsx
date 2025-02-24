import React from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import forms from "../../assets/img/forms.jpg";
import Input1 from "../../components/Inputs/Input1";
import PasswordInput from "../../components/Inputs/PasswordInput";

const Login = () => {
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
          <h2 className="font-montserrat font-bold text-[#4A362F] text-base mb-5">
            ¿No tienes una cuenta?{" "}
            <Link to="/signUp" className="text-white">
              Regístrate
            </Link>
          </h2>
          <form className="space-y-4">
            <Input1
              icon="fa-envelope"
              type={"email"}
              placeholder={"Correo Electrónico"}
            />
            <PasswordInput placeholder={"Contraseña"} />
            <Link
              to="/resetPassword"
              className="block text-[#D9D9DB] text-base mb-2 mt-1"
            >
              ¿Olvidaste la contraseña?
            </Link>
            <button
              type="submit"
              className="w-full py-2 bg-[#4A362F] text-white border-none rounded-xl cursor-pointer text-base mt-2 h-10"
            >
              Inicia Sesión
            </button>
          </form>
          <div className="mt-4">
            {/*
            <p className="text-base mb-2">O conéctate con</p>
            <div className="flex justify-center space-x-4">
              <a
                className="text-[#4A362F] no-underline text-2xl my-0 mx-2.5"
                href="#"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a
                className="text-[#4A362F] no-underline text-2xl my-0 mx-2.5"
                href="#"
              >
                <i className="fa-brands fa-google" />
              </a>
            </div>
            */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
