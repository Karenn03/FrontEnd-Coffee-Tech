import React from "react";
import logo from "../../assets/img/logo.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import forms from "../../assets/img/forms.jpg";
import Input1 from "../../components/Inputs/Input1";
import PasswordInput from "../../components/Inputs/PasswordInput";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <section
        className="flex justify-center items-center h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${forms})` }}
      >
        <div className="absolute inset-0 bg-[#150D0C99] z-10"></div>
        <div className="bg-[#978F84F2] bg-opacity-95 rounded-3xl p-6 max-w-[360px] w-full shadow-lg text-center text-white z-20 relative mr-[45%] mt-12">
          <div className="text-center mb-4">
            <img className="w-[70px] mx-auto" src={logo} alt="Logo" />
          </div>
          <h2 className="font-montserrat font-bold text-[#4A362F] text-base mb-5">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-white">
              Inicia sesión
            </Link>
          </h2>
          <form className="space-y-4">
            <Input1 icon="fa-id-card" type={"text"} placeholder={"Documento"} />
            <Input1 icon="fa-user-pen" type={"text"} placeholder={"Nombres"} />
            <Input1
              icon="fa-user-large"
              type={"text"}
              placeholder={"Apellidos"}
            />
            <Input1
              icon="fa-envelope"
              type={"text"}
              placeholder={"Correo Electrónico"}
            />
            <PasswordInput placeholder={"Contraseña"} />
            <PasswordInput placeholder={"Confirmar contraseña"} />
            <Input1 icon="fa-phone" type={"text"} placeholder={"Telefono"} />
            <Input1
              icon="fa-location-dot"
              type={"text"}
              placeholder={"Dirección"}
            />
            <button
              type="submit"
              className="w-full p-2.5 bg-[#4A362F] text-white border-none rounded-2xl cursor-pointer text-sm mt-2.5 h-10"
              onClick={(e) => savePerson(e)}
            >
              Regístrate
            </button>
          </form>
          {/*
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="mt-4">
            <p className="text-sm mb-2.5" >O conéctate con</p>
            <div className="social-icons">
              <a href="#" className="text-[#4A362F] no-underline text-2xl my-0 mx-2.5">
                <i className="fab fa-facebook" />
              </a>
              <a href="#" className="text-[#4A362F] no-underline text-2xl my-0 mx-2.5">
                <i className="fab fa-google" />
              </a>
            </div>
          </div>
          */}
        </div>
      </section>
    </>
  );
};

export default SignUp;
