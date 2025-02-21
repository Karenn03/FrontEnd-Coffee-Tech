import React from "react";
import "../../App.css";

import cafePideAqui from "../../assets/img/cafe-pide-aqui.png";
import landing from "../../assets/img/landing.jpg";
import oferta1 from "../../assets/img/oferta-1.png";
import oferta2 from "../../assets/img/oferta-2.png";
import oferta3 from "../../assets/img/oferta-3.png";
import oferta4 from "../../assets/img/oferta-4.png";

import Navbar from "../../components/Navbar/Navbar";
import Button1 from "../../components/Buttons/Button1";
import Box from "../../components/Box/Box";

const LandingPage = () => {
  return (
    <div className="font-montserrat m-0 p-0 bg-[#FFFEFC]">
      <Navbar />
      {/* Welcome Section */}
      <section
        className="relative flex flex-col justify-center items-center bg-cover bg-center text-white w-[100%] h-screen"
        style={{ backgroundImage: `url(${landing})` }}
      >
        <div className="absolute inset-0 bg-[#4A362F] opacity-50 z-10"></div>
        <h1 className="z-20 text-4xl font-montserrat">Bienvenidos a</h1>
        <h2 className="z-20 text-8xl font-fjalla">COFFEE TECH</h2>
      </section>
      {/* Order Here Section */}
      <div className="relative mb-5 p-5 text-center">
        <div className="w-0.5 h-42 bg-[#B7AE8F] mx-auto mb-5 mt-5" />
        <h2 className="text-[#B7AE8F] mt-0 text-3xl text-center mb-2.5 font-extrabold">
          Pide Aquí
        </h2>
        <div className="flex justify-around items-center pt-5 pb-5 pr-8 pl-8">
          <div className="grid p-5 w-[30%] text-left">
            <h3 className="text-[#B7AE8F] text-center mb-6 text-3xl font-bold">
              Domicilio
            </h3>
            <p className="text-xl">
              Disfruta de tu café favorito sin salir de casa. Haz tu pedido a
              domicilio y nosotros nos encargamos de llevarlo hasta tu puerta en
              el menor tiempo posible. Selecciona tus bebidas y bocadillos
              favoritos, y relájate mientras nosotros hacemos el resto.
            </p>
            <div className="grid justify-start">
              <Button1 option={"Pide a domicilio"} />
            </div>
          </div>
          <img
            src={cafePideAqui}
            alt="Coffee"
            className="mt-5 mb-5 mr-0 ml-0 w-93 h-auto"
          />
          <div className="grid p-5 w-[30%] text-right">
            <h3 className="text-[#B7AE8F] mb-6 text-center text-3xl font-bold">
              Para retirar
            </h3>
            <p className="text-xl">
              Haz tu pedido en línea y retíralo en la cafetería cuando te sea
              más conveniente. Evita las filas y asegura tu bebida favorita
              lista para llevar. Perfecto para cuando estás en movimiento pero
              no quieres renunciar a tu café preferido.
            </p>
            <div className="grid justify-end">
              <Button1 option={"Pide para retirar"} />
            </div>
          </div>
        </div>
      </div>
      {/* Special Offers Section */}
      <div className="ofertas-especiales">
        <div className="w-0.5 h-42 bg-[#B7AE8F] mx-auto mb-5 mt-5" />
        <h2 className="text-[#B7AE8F] mt-0 text-3xl text-center mb-2.5 font-extrabold">
          OFERTAS ESPECIALES
        </h2>
        <h4 className="text-[#4A362F] mt-0 mb-5 text-2xl text-center font-semibold">
          ¡No te pierdas nuestras promociones!
        </h4>
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <Box
            image={oferta1}
            title={"Calor y sabor"}
            description={
              "Lleva un Caramel Macchiato y obtén un Espresso Doble gratis. Ideal para los amantes del café intenso."
            }
          />
          <Box
            image={oferta2}
            title={"Delicias al horno"}
            description={
              "Compra una Dona de Chocolate y obtén una Galleta Chips de Chocolate gratis. Doble delicia."
            }
          />
          <Box
            image={oferta3}
            title={"Comienza bien tu día"}
            description={
              "Disfruta de un Wrap de Pollo y obtén un Bowl de Yogurt con 20% de descuento. Un snack saludable y sabroso."
            }
          />
          <Box
            image={oferta4}
            title={"Refresca tu día"}
            description={
              "Compra un Iced Cappuccino y obtén un Iced Caramel Latte con 50% de descuento. Refresca tu paladar."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
