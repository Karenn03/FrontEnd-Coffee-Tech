import React from "react";
import "../../App.css";
import cafePideAqui from "../../assets/img/cafe-pide-aqui.png";
import landing from "../../assets/img/landing.jpg";
import oferta1 from "../../assets/img/oferta-1.png";
import oferta2 from "../../assets/img/oferta-2.png";
import oferta3 from "../../assets/img/oferta-3.png";
import oferta4 from "../../assets/img/oferta-4.png";
import exclusiveOffers from "../../assets/img/exclusive-offers.jpg";
import comentario from "../../assets/img/comentario.jpg";

import Navbar from "../../components/Navbar/Navbar";
import Button1 from "../../components/Buttons/Button1";
import OffersBox from "../../components/Box/OffersBox";
import Title1 from "../../components/Titles/Title1";
import Title2 from "../../components/Titles/Title2";
import Title3 from "../../components/Titles/Title3";
import Button2 from "../../components/Buttons/Button2";
import CommentsBox from "../../components/Box/CommentsBox";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  return (
    <div className="font-montserrat m-0 p-0 bg-[#FFFEFC]">
      <Navbar />
      {/* Welcome Section */}
      <section
        className="relative flex flex-col justify-center items-center bg-cover bg-center text-white w-[100%] h-screen"
        style={{ backgroundImage: `url(${landing})` }}
      >
        <div className="absolute inset-0 bg-[#4A362F61] z-10"></div>
        <h1 className="z-20 text-4xl font-montserrat">Bienvenidos a</h1>
        <h2 className="z-20 text-8xl font-fjalla">COFFEE TECH</h2>
      </section>
      {/* Order Here Section */}
      <div className="relative mb-5 p-5 text-center">
        <div className="w-0.5 h-42 bg-[#B7AE8F] mx-auto mb-5 mt-5" />
        <Title1 text={"Pide Aquí"} />
        <div className="flex justify-around items-center pt-5 pb-5 pr-8 pl-8">
          <div className="grid p-5 w-[30%] text-left">
            <Title3 text={"Domiclio"} />
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
            <Title3 text={"Para retirar"} />
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
        <Title1 text={"OFERTAS ESPECIALES"} />
        <Title2 text={"¡No te pierdas nuestras promociones!"} />
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <OffersBox
            image={oferta1}
            title={"Calor y sabor"}
            description={
              "Lleva un Caramel Macchiato y obtén un Espresso Doble gratis. Ideal para los amantes del café intenso."
            }
          />
          <OffersBox
            image={oferta2}
            title={"Delicias al horno"}
            description={
              "Compra una Dona de Chocolate y obtén una Galleta Chips de Chocolate gratis. Doble delicia."
            }
          />
          <OffersBox
            image={oferta3}
            title={"Comienza bien tu día"}
            description={
              "Disfruta de un Wrap de Pollo y obtén un Bowl de Yogurt con 20% de descuento. Un snack saludable y sabroso."
            }
          />
          <OffersBox
            image={oferta4}
            title={"Refresca tu día"}
            description={
              "Compra un Iced Cappuccino y obtén un Iced Caramel Latte con 50% de descuento. Refresca tu paladar."
            }
          />
        </div>
      </div>
      {/* Exclusive Offers Section */}
      <section
        className="relative flex flex-col pt-24 pb-24 pr-0 pl-0 justify-center items-center text-center mt-36 mb-14 w-full min-h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${exclusiveOffers})` }}
      >
        <div className="relative z-30 text-white p-5 rounded-xl">
          <h2 className="text-4xl m-0 mb-5 text-white font-bold">
            ¡Recibe Ofertas Exclusivas!
          </h2>
          <p className="text-xl m-0 mb-5 text-white">
            Suscríbete para recibir las mejores ofertas directamente en tu
            correo
          </p>
          <form className="flex justify-center items-center">
            <input
              className="py-2 px-3 text-gray-800 text-lg rounded-l-xl outline-none z-20 w-70 bg-[#FFFEFC] placeholder:text-gray-400 cursor-auto"
              placeholder="Ingresa tu correo electrónico"
              type="email"
            />
            <button
              className="py-2 px-3 text-lg border-none rounded-r-xl bg-[#B7AE8F] text-white cursor-pointer w-32 hover:bg-[#978F84]"
              type="submit"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </section>
      {/* Comments Section */}
      <div className="w-0.5 h-42 bg-[#B7AE8F] mx-auto mb-5 mt-5" />
      <div className="max-w-7xl mx-auto p-1">
        <Title1 text={"COMENTARIOS"} />
        <Title2 text={"¡Tu opinión también cuenta!"} />
        <div className="flex justify-between items-center border-b border-gray-300 pb-5 mb-5">
          <div className="text-center grid">
            <span className="font-montserrat text-5xl font-bold basis-[20%] text-center text-[#4A362F]">
              4,5
            </span>
            <span className="text-[#4A362F] text-2xl">★★★★★</span>
            <span className="font-montserrat text-sm text-[#4A362F]">
              29156 Reseñas
            </span>
          </div>
        </div>
        <div className="flex justify-between mb-5">
          <Button2 option={"Escribir una reseña"} />
          <div className="flex">
            <Button2 option={"Filtrar"} />
            <Button2 option={"Ordenar"} />
          </div>
        </div>
        <CommentsBox
          imageSrc={comentario}
          userName="Nicol Vasquez"
          rating="★★★★☆"
          commentDate="Hace 1 mes"
          commentText="Buena atención, muy amables, un sitio bastante acogedor recomendado si gustas de una experiencia diferente, los desayunos son deliciosos."
        />
        <CommentsBox
          imageSrc={comentario}
          userName="Zareth Blanco"
          rating="★★★★★"
          commentDate="Hace un año"
          commentText="Un local muy amplio y el ambiente es muy tranquilo. El personal es siempre muy amable y la variedad de café lo hace un lugar genial. Cuenta con WiFi y mobiliario adecuado para pasar el rato, trabajar y conversar con amigos. El menú es costoso (más caro que en una sala de onces) pero muy parecidos a los precios de otras franquicias de ese estilo."
        />
        <CommentsBox
          imageSrc={comentario}
          userName="Alex Ramos"
          rating="★★★★★"
          commentDate="Hace 7 meses"
          commentText="El personal es siempre amable y servicial, y hacen que la experiencia sea aún más agradable. Sus baristas son conocedores y están dispuestos a ayudarte a elegir la bebida perfecta para tu gusto. Ya sea que prefieras un café clásico o una bebida más elaborada, encontrarás una amplia variedad en su menú."
        />
      </div>
      <br />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
