import React from "react";
import footer from "../../assets/img/footer.jpg";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-no-repeat bg-center text-white pt-20 pb-2.5 px-5 relative min-h-[400px] z-10"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <div className="max-w-7xl mx-auto relative z-20">
        <h2 className="mb-2.5 ml-2.5 text-2xl text-white">COFFEE TECH</h2>
        <div className="grid grid-cols-4 gap-4 pt-4">
          <div className="m-2.5 text-[#F8F8F8]">
            <h4 className="mb-5 text-xl text-white">Sobre Nosotros</h4>
            <ul className="list-none p-0">
              <li className="mb-3.5">
                <a
                  className="text-white hover:text-[#B7AE8F] no-underline text-base"
                  href="#"
                >
                  Quienes somos
                </a>
              </li>
              <li className="mb-3.5">
                <a
                  className="text-white hover:text-[#B7AE8F] no-underline text-base"
                  href="#"
                >
                  Servicios
                </a>
              </li>
              <li className="mb-3.5">
                <a
                  className="text-white hover:text-[#B7AE8F] no-underline text-base"
                  href="#"
                >
                  Nuestras sedes
                </a>
              </li>
              <li className="mb-3.5">
                <a
                  className="text-white hover:text-[#B7AE8F] no-underline text-base"
                  href="#"
                >
                  Trabaja con Coffee Tech
                </a>
              </li>
            </ul>
          </div>

          <div className="m-2.5 text-[#F8F8F8]">
            <h4 className="mb-5 text-xl text-white">Soporte</h4>
            <ul className="list-none p-0">
              <li className="mb-3.5">
                <a
                  className="text-white hover:text-[#B7AE8F] no-underline text-base"
                  href="#"
                >
                  Ayuda y FAQs
                </a>
              </li>
              <li className="mb-3.5">
                <a
                  className="text-white hover:text-[#B7AE8F] no-underline text-base"
                  href="#"
                >
                  Soporte en línea
                </a>
              </li>
              <li className="mb-3.5">
                <a
                  className="text-white hover:text-[#B7AE8F] no-underline text-base"
                  href="#"
                >
                  +57 315 667 7315
                </a>
              </li>
              <li className="mb-3.5">
                <a
                  className="text-white hover:text-[#B7AE8F] no-underline text-base"
                  href="mailto:soporte@coffeetech.com"
                >
                  Soporte@coffeetech.com
                </a>
              </li>
            </ul>
          </div>

          <div className="m-2.5 text-[#F8F8F8]">
            <h4 className="mb-5 text-xl text-white">Legal</h4>
            <ul className="list-none p-0">
              <li className="mb-3.5">
                <a
                  className="text-white hover:text-[#B7AE8F] no-underline text-base"
                  href="#"
                >
                  Aviso legal
                </a>
              </li>
              <li className="mb-3.5">
                <a
                  className="text-white hover:text-[#B7AE8F] no-underline text-base"
                  href="#"
                >
                  Política de privacidad
                </a>
              </li>
              <li className="mb-3.5">
                <a
                  className="text-white hover:text-[#B7AE8F] no-underline text-base"
                  href="#"
                >
                  Política de cookies
                </a>
              </li>
              <li className="mb-3.5">
                <a
                  className="text-white hover:text-[#B7AE8F] no-underline text-base"
                  href="#"
                >
                  Política de calidad
                </a>
              </li>
            </ul>
          </div>

          <div className="m-2.5 text-[#F8F8F8]">
            <h4 className="mb-5 text-xl text-white">Redes Sociales</h4>
            <ul className="list-none p-0">
              <li className="mb-3.5">
                <a
                  className="text-white hover:text-[#B7AE8F] no-underline text-sm"
                  href="#"
                >
                  <i className="fa-brands fa-instagram mr-2 text-base" />
                  Instagram
                </a>
              </li>
              <li className="mb-3.5">
                <a
                  className="text-white hover:text-[#B7AE8F] no-underline text-sm"
                  href="#"
                >
                  <i className="fa-brands fa-facebook mr-2 text-base" />
                  Facebook
                </a>
              </li>
              <li className="mb-3.5">
                <a
                  className="text-white hover:text-[#B7AE8F] no-underline text-sm"
                  href="#"
                >
                  <i className="fa-brands fa-twitter mr-2 text-base" /> Twitter
                </a>
              </li>
              <li className="mb-3.5">
                <a
                  className="text-white hover:text-[#B7AE8F] no-underline text-sm"
                  href="#"
                >
                  <i className="fa-brands fa-youtube mr-2 text-base" /> YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-white text-sm mt-2.5 py-2.5 border-t-2 border-white">
        <p>© Coffee Tech. Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
