import React from "react";
import "../../App.css";
// import { useCart } from "../../pages/Shopping Cart/CartContext";
import Navbar from "../../components/Navbar/Navbar";
import TitleMenu from "../../components/Titles/TitleMenu";
import ProductBox from "../../components/Box/ProductBox";

import CappuccinoAmericano from "../../assets/img/cappuccino-americano.png";
import Cappuccino from "../../assets/img/cappuccino.png";
import CaramelMacchiato from "../../assets/img/caramel-macchiato.png";
import EspressoDoble from "../../assets/img/espresso-doble.png";
import EspressoSencillo from "../../assets/img/espresso-sencillo.png";
import Chocolate from "../../assets/img/chocolate.png";
import ChocolateBlanco from "../../assets/img/chocolate-blanco.jpg";
import LatteMacchiato from "../../assets/img/latte-macchiato.png";
import Latte from "../../assets/img/latte.png";
import Macchiato from "../../assets/img/macchiato.png";
import MacchiatoEspresso from "../../assets/img/macchiato-espresso.png";
import Mocha from "../../assets/img/mocha.png";

import FrappéMocca from "../../assets/img/frappé-mocca.png";
import FrappéOreo from "../../assets/img/frappé-oreo.png";
import IcedCappuccino from "../../assets/img/iced-cappuccino.png";
import IcedCaramelLatte from "../../assets/img/iced-caramel-latte.png";
import IcedCaramelMacchiato from "../../assets/img/iced-caramel-macchiato.png";
import IcedMacchiato from "../../assets/img/iced-macchiato.png";
import IcedMocha from "../../assets/img/iced-mocha.png";
import IcedLatte from "../../assets/img/iced-latte.png";
import MilkshakeChocolate from "../../assets/img/milkshake-chocolate.png";
import MilkshakeFresa from "../../assets/img/milkshake-fresa.png";
import MilkshakeOreo from "../../assets/img/milkshake-oreo.png";
import MilkshakeVainilla from "../../assets/img/milkshake-vainilla.png";

import CheesecakeFresa from "../../assets/img/cheesecake-de-fresa.png";
import CroissantAlmendras from "../../assets/img/croissant-de-almendras.png";
import CroissantChocolate from "../../assets/img/croissant-de-chocolate.png";
import CroissantJamónQueso from "../../assets/img/croissant-de-jamón-y-queso.png";
import CroissantMantequilla from "../../assets/img/croissant-de-mantequilla.png";
import DonaChocolateBlanco from "../../assets/img/dona-chocolate-blanco.png";
import DonaChocolate from "../../assets/img/dona-chocolate.png";
import DonaFresa from "../../assets/img/dona-fresa.png";
import GalletaChipsChocolate from "../../assets/img/galleta-chips-chocolate.png";
import GalletaAvena from "../../assets/img/galleta-avena.png";
import GalletaChocolate from "../../assets/img/galleta-chocolate.png";
import GalletaMantequilla from "../../assets/img/galleta-mantequilla.png";
import MuffinChipsBanana from "../../assets/img/muffin-chips-banana.png";
import MuffinChipsChocolate from "../../assets/img/muffin-chips-chocolate.png";
import MuffinArándanos from "../../assets/img/muffin-arandanos.png";
import MuffinChocolate from "../../assets/img/muffin-chocolate.png";
import MuffinFresa from "../../assets/img/muffin-fresa.png";
import MuffinOreo from "../../assets/img/muffin-oreo.png";
import MuffinRedVelvet from "../../assets/img/muffin-red-velvet.png";
import PastelChocolate from "../../assets/img/pastel-chocolate.png";
import PastelLimón from "../../assets/img/pastel-limon.png";
import PastelRedVelvet from "../../assets/img/pastel-red-velvet.jpg";
import PastelZanahoria from "../../assets/img/pastel zanahoria.png";
import Tiramisú from "../../assets/img/tiramisu.png";

import BagelJamónQueso from "../../assets/img/bagel-de-jamón-y-queso.png";
import BagelQuesoCrema from "../../assets/img/bagel-de-queso-crema.png";
import BagelSalmónAhumado from "../../assets/img/bagel-de-salmón-ahumado.png";
import Benedictinos from "../../assets/img/benedictinos.png";
import BowlAçai from "../../assets/img/bowl-de-açai.png";
import BowlYogurt from "../../assets/img/bowl-de-yogurt.png";
import BowlQuinuaVegetales from "../../assets/img/bowl-de-quinua-y-vegetales.png";
import Pancakes from "../../assets/img/pancakes.png";
import PancakesChocolate from "../../assets/img/pancakes-de-chocolate.png";
import SándwichCarneQueso from "../../assets/img/sándwich-de-carne-y-queso.png";
import SándwichJamónQueso from "../../assets/img/sándwich-de-jamón-y-queso.png";
import SándwichPavoAguacate from "../../assets/img/sándwich-de-pavo-y-aguacate.png";
import TortillaJamónQueso from "../../assets/img/tortilla-de-jamón-y-queso.png";
import TostadaAguacate from "../../assets/img/tostada-de-aguacate.png";
import TostadasFrancesas from "../../assets/img/tostadas-francesas.png";
import TostadaJamónQueso from "../../assets/img/tostada-de-jamón-y-queso.png";
import Waffles from "../../assets/img/waffles.png";
import WrapCarnesMozzarella from "../../assets/img/wrap-carnes-y-mozzarella.png";
import WrapCostillitas from "../../assets/img/wrap-costillitas.png";
import WrapHawaiano from "../../assets/img/wrap-hawaiano.png";
import WrapJamónMozzarella from "../../assets/img/wrap-de-jamón-y-mozzarella.png";
import WrapPollo from "../../assets/img/wrap-pollo.png";
import WrapRoastBeef from "../../assets/img/wrap-roast-beef.png";
import WrapTradicionalRes from "../../assets/img/wrap-tradicional-de-res.png";

const Menu = () => {
  // const { addToCart } = useCart();
  return (
    <>
      <Navbar />
      <TitleMenu title="Bebidas Calientes" />
      <div className="flex justify-center flex-wrap gap-5 p-5">
        <ProductBox
          className="drink"
          title="CAPPUCCINO AMERICANO"
          imageSrc={CappuccinoAmericano}
          imageAlt="Cappuccino Americano"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "CAPPUCCINO AMERICANO",
              price: 4.99,
              image: CappuccinoAmericano,
            })
          }
            */
        />
        <ProductBox
          className="drink"
          title="CAPPUCCINO"
          imageSrc={Cappuccino}
          imageAlt="Cappuccino"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "CAPPUCCINO", price: 4.99, image: Cappuccino })
          }
            */
        />
        <ProductBox
          className="drink"
          title="CARAMEL MACCHIATO"
          imageSrc={CaramelMacchiato}
          imageAlt="Caramel Macchiato"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "CARAMEL MACCHIATO",
              price: 4.99,
              image: CaramelMacchiato,
            })
          }
            */
        />
        <ProductBox
          className="drink"
          title="ESPRESSO DOBLE"
          imageSrc={EspressoDoble}
          imageAlt="Espresso Doble"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "ESPRESSO DOBLE",
              price: 4.99,
              image: EspressoDoble,
            })
          }
            */
        />
        <ProductBox
          className="drink"
          title="ESPRESSO SENCILLO"
          imageSrc={EspressoSencillo}
          imageAlt="Espresso Sencillo"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "ESPRESSO SENCILLO",
              price: 4.99,
              image: EspressoSencillo,
            })
          }
            */
        />
        <ProductBox
          className="drink"
          title="CHOCOLATE"
          imageSrc={Chocolate}
          imageAlt="Chocolate"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "CHOCOLATE", price: 4.99, image: Chocolate })
          }
            */
        />
        <ProductBox
          className="drink"
          title="CHOCOLATE BLANCO"
          imageSrc={ChocolateBlanco}
          imageAlt="Chocolate Blanco"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "CHOCOLATE BLANCO",
              price: 4.99,
              image: ChocolateBlanco,
            })
          }
          */
        />
        <ProductBox
          className="drink"
          title="LATTE MACCHIATO"
          imageSrc={LatteMacchiato}
          imageAlt="Latte Macchiato"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "LATTE MACCHIATO",
              price: 4.99,
              image: LatteMacchiato,
            })
          }
          */
        />
        <ProductBox
          className="drink"
          title="LATTE"
          imageSrc={Latte}
          imageAlt="Latte"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "LATTE", price: 4.99, image: Latte })
          }
          */
        />
        <ProductBox
          className="drink"
          title="MACCHIATO"
          imageSrc={Macchiato}
          imageAlt="Macchiato"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "MACCHIATO", price: 4.99, image: Macchiato })
          }
          */
        />
        <ProductBox
          className="drink"
          title="MACCHIATO ESPRESSO"
          imageSrc={MacchiatoEspresso}
          imageAlt="Macchiato Espresso"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "MACCHIATO ESPRESSO",
              price: 4.99,
              image: MacchiatoEspresso,
            })
          }
          */
        />
        <ProductBox
          className="drink"
          title="MOCHA"
          imageSrc={Mocha}
          imageAlt="Mocha"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "MOCHA", price: 4.99, image: Mocha })
          }
          */
        />
      </div>
      <TitleMenu title="Bebidas Frías" />
      <div className="flex justify-center flex-wrap gap-5 p-5">
        <ProductBox
          className="drink"
          title="FRAPPÉ MOCCA"
          imageSrc={FrappéMocca}
          imageAlt="Frappé Mocca"
          detailsLink="/"
          price={4.99}
          /*
            onAddToCart={() =>
              addToCart({
                title: "FRAPPÉ MOCCA",
                price: 4.99,
                image: FrappéMocca,
              })
            }
            */
        />
        <ProductBox
          className="drink"
          title="FRAPPÉ OREO"
          imageSrc={FrappéOreo}
          imageAlt="Frappé Oreo"
          detailsLink="/"
          price={4.99}
          /*
            onAddToCart={() =>
              addToCart({
                title: "FRAPPÉ OREO",
                price: 4.99,
                image: FrappéOreo,
              })
            }
            */
        />
        <ProductBox
          className="drink"
          title="ICED CAPPUCCINO"
          imageSrc={IcedCappuccino}
          imageAlt="Iced Cappuccino"
          detailsLink="/"
          price={4.99}
          /*
            onAddToCart={() =>
              addToCart({
                title: "ICED CAPPUCCINO",
                price: 4.99,
                image: IcedCappuccino,
              })
            }
            */
        />
        <ProductBox
          className="drink"
          title="ICED CARAMEL LATTE"
          imageSrc={IcedCaramelLatte}
          imageAlt="Iced Caramel Latte"
          detailsLink="/"
          price={4.99}
          /*
            onAddToCart={() =>
              addToCart({
                title: "ICED CARAMEL LATTE",
                price: 4.99,
                image: IcedCaramelLatte,
              })
            }
            */
        />
        <ProductBox
          className="drink"
          title="ICED CARAMEL MACCHIATO"
          imageSrc={IcedCaramelMacchiato}
          imageAlt="Iced Caramel Macchiato"
          detailsLink="/"
          price={4.99}
          /*
            onAddToCart={() =>
              addToCart({
                title: "ICED CARAMEL MACCHIATO",
                price: 4.99,
                image: IcedCaramelMacchiato,
              })
            }
            */
        />
        <ProductBox
          className="drink"
          title="ICED MACCHIATO"
          imageSrc={IcedMacchiato}
          imageAlt="Iced Macchiato"
          detailsLink="/"
          price={4.99}
          /*
            onAddToCart={() =>
              addToCart({
                title: "ICED MACCHIATO",
                price: 4.99,
                image: IcedMacchiato,
              })
            }
            */
        />
        <ProductBox
          className="drink"
          title="ICED MOCHA"
          imageSrc={IcedMocha}
          imageAlt="Iced Mocha"
          detailsLink="/"
          price={4.99}
          /*
            onAddToCart={() =>
              addToCart({ title: "ICED MOCHA", price: 4.99, image: IcedMocha })
            }
            */
        />
        <ProductBox
          className="drink"
          title="ICED LATTE"
          imageSrc={IcedLatte}
          imageAlt="Iced Latte"
          detailsLink="/"
          price={4.99}
          /*
            onAddToCart={() =>
              addToCart({ title: "ICED LATTE", price: 4.99, image: IcedLatte })
            }
            */
        />
        <ProductBox
          className="drink"
          title="MILKSHAKE CHOCOLATE"
          imageSrc={MilkshakeChocolate}
          imageAlt="Milkshake Chocolate"
          detailsLink="/"
          price={4.99}
          /*
            onAddToCart={() =>
              addToCart({
                title: "MILKSHAKE CHOCOLATE",
                price: 4.99,
                image: MilkshakeChocolate,
              })
            }
            */
        />
        <ProductBox
          className="drink"
          title="MILKSHAKE FRESA"
          imageSrc={MilkshakeFresa}
          imageAlt="Milkshake Fresa"
          detailsLink="/"
          price={4.99}
          /*
            onAddToCart={() =>
              addToCart({
                title: "MILKSHAKE FRESA",
                price: 4.99,
                image: MilkshakeFresa,
              })
            }
            */
        />
        <ProductBox
          className="drink"
          title="MILKSHAKE OREO"
          imageSrc={MilkshakeOreo}
          imageAlt="Milkshake Oreo"
          detailsLink="/"
          price={4.99}
          /*
            onAddToCart={() =>
              addToCart({
                title: "MILKSHAKE OREO",
                price: 4.99,
                image: MilkshakeOreo,
              })
            }
            */
        />
        <ProductBox
          className="drink"
          title="MILKSHAKE VAINILLA"
          imageSrc={MilkshakeVainilla}
          imageAlt="Milkshake Vainilla"
          detailsLink="/"
          price={4.99}
          /*
            onAddToCart={() =>
              addToCart({
                title: "MILKSHAKE VAINILLA",
                price: 4.99,
                image: MilkshakeVainilla,
              })
            }
            */
        />
      </div>
      <TitleMenu title="Panadería y Pastelería" />
      <div className="flex justify-center flex-wrap gap-5 p-5">
        <ProductBox
          className="food"
          title="CHEESECAKE DE FRESA"
          imageSrc={CheesecakeFresa}
          imageAlt="Cheesecake de Fresa"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "CHEESECAKE DE FRESA",
              price: 4.99,
              image: CheesecakeFresa,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="CROISSANT DE ALMENDRAS"
          imageSrc={CroissantAlmendras}
          imageAlt="Croissant de Almendras"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "CROISSANT DE ALMENDRAS",
              price: 4.99,
              image: CroissantAlmendras,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="CROISSANT DE CHOCOLATE"
          imageSrc={CroissantChocolate}
          imageAlt="Croissant de Chocolate"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "CROISSANT DE CHOCOLATE",
              price: 4.99,
              image: CroissantChocolate,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="CROISSANT DE JAMÓN Y QUESO"
          imageSrc={CroissantJamónQueso}
          imageAlt="Croissant de Jamón y Queso"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "CROISSANT DE JAMÓN Y QUESO",
              price: 4.99,
              image: CroissantJamónQueso,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="CROISSANT DE MANTEQUILLA"
          imageSrc={CroissantMantequilla}
          imageAlt="Croissant de Mantequilla"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "CROISSANT DE MANTEQUILLA",
              price: 4.99,
              image: CroissantMantequilla,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="DONA DE CHOCOLATE BLANCO"
          imageSrc={DonaChocolateBlanco}
          imageAlt="Dona de Chocolate Blanco"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "DONA DE CHOCOLATE BLANCO",
              price: 4.99,
              image: DonaChocolateBlanco,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="DONA DE CHOCOLATE"
          imageSrc={DonaChocolate}
          imageAlt="Dona de Chocolate"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "DONA DE CHOCOLATE",
              price: 4.99,
              image: DonaChocolate,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="DONA DE FRESA"
          imageSrc={DonaFresa}
          imageAlt="Dona de Fresa"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "DONA DE FRESA", price: 4.99, image: DonaFresa })
          }
          */
        />
        <ProductBox
          className="food"
          title="GALLETA CHIPS DE CHOCOLATE"
          imageSrc={GalletaChipsChocolate}
          imageAlt="Galleta Chips de Chocolate"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "GALLETA CHIPS DE CHOCOLATE",
              price: 4.99,
              image: GalletaChipsChocolate,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="GALLETA DE AVENA"
          imageSrc={GalletaAvena}
          imageAlt="Galleta de Avena"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "GALLETA DE AVENA",
              price: 4.99,
              image: GalletaAvena,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="GALLETA DE CHOCOLATE"
          imageSrc={GalletaChocolate}
          imageAlt="Galleta de Chocolate"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "GALLETA DE CHOCOLATE",
              price: 4.99,
              image: GalletaChocolate,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="GALLETA DE MANTEQUILLA"
          imageSrc={GalletaMantequilla}
          imageAlt="Galleta de Mantequilla"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "GALLETA DE MANTEQUILLA",
              price: 4.99,
              image: GalletaMantequilla,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="MUFFIN CHIPS DE BANANA"
          imageSrc={MuffinChipsBanana}
          imageAlt="Muffin Chips de Banana"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "MUFFIN CHIPS DE BANANA",
              price: 4.99,
              image: MuffinChipsBanana,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="MUFFIN CHIPS DE CHOCOLATE"
          imageSrc={MuffinChipsChocolate}
          imageAlt="Muffin Chips de Chocolate"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "MUFFIN CHIPS DE CHOCOLATE",
              price: 4.99,
              image: MuffinChipsChocolate,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="MUFFIN DE ARÁNDANOS"
          imageSrc={MuffinArándanos}
          imageAlt="Muffin de Arándanos"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "MUFFIN DE ARÁNDANOS",
              price: 4.99,
              image: MuffinArándanos,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="MUFFIN DE CHOCOLATE"
          imageSrc={MuffinChocolate}
          imageAlt="Muffin de Chocolate"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "MUFFIN DE CHOCOLATE",
              price: 4.99,
              image: MuffinChocolate,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="MUFFIN DE FRESA"
          imageSrc={MuffinFresa}
          imageAlt="Muffin de Fresa"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "MUFFIN DE FRESA",
              price: 4.99,
              image: MuffinFresa,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="MUFFIN DE OREO"
          imageSrc={MuffinOreo}
          imageAlt="Muffin de Oreo"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "MUFFIN DE OREO",
              price: 4.99,
              image: MuffinOreo,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="MUFFIN DE RED VELVET"
          imageSrc={MuffinRedVelvet}
          imageAlt="Muffin de Red Velvet"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "MUFFIN DE RED VELVET",
              price: 4.99,
              image: MuffinRedVelvet,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="PASTEL DE CHOCOLATE"
          imageSrc={PastelChocolate}
          imageAlt="Pastel de Chocolate"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "PASTEL DE CHOCOLATE",
              price: 4.99,
              image: PastelChocolate,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="PASTEL DE LIMÓN"
          imageSrc={PastelLimón}
          imageAlt="Pastel de Limón"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "PASTEL DE LIMÓN",
              price: 4.99,
              image: PastelLimón,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="PASTEL DE RED VELVET"
          imageSrc={PastelRedVelvet}
          imageAlt="Pastel de Red Velvet"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "PASTEL DE RED VELVET",
              price: 4.99,
              image: PastelRedVelvet,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="PASTEL DE ZANAHORIA"
          imageSrc={PastelZanahoria}
          imageAlt="Pastel de Zanahoria"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({
              title: "PASTEL DE ZANAHORIA",
              price: 4.99,
              image: PastelZanahoria,
            })
          }
          */
        />
        <ProductBox
          className="food"
          title="TIRAMISÚ"
          imageSrc={Tiramisú}
          imageAlt="Tiramisú"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "TIRAMISÚ", price: 4.99, image: Tiramisú })
          }
          */
        />
      </div>
      <TitleMenu title="Desayunos y Brunch" />
      <div className="flex justify-center flex-wrap gap-5 p-5">
        <ProductBox
          className="food"
          title="BAGEL DE JAMÓN Y QUESO"
          imageSrc={BagelJamónQueso}
          imageAlt="Bagel de Jamón y Queso"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="BAGEL DE QUESO CREMA"
          imageSrc={BagelQuesoCrema}
          imageAlt="Bagel de Queso Crema"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="BAGEL DE SALMÓN AHUMADO"
          imageSrc={BagelSalmónAhumado}
          imageAlt="Bagel de Salmón Ahumado"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="BENEDICTINOS"
          imageSrc={Benedictinos}
          imageAlt="Benedictinos"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="BOWL DE AÇAI"
          imageSrc={BowlAçai}
          imageAlt="Bowl de Açai"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="BOWL DE YOGURT"
          imageSrc={BowlYogurt}
          imageAlt="Bowl de Yogurt"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="BOWL DE QUINUA Y VEGETALES"
          imageSrc={BowlQuinuaVegetales}
          imageAlt="Bowl de Quinua y Vegetales"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="PANCAKES"
          imageSrc={Pancakes}
          imageAlt="Pancakes"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="PANCAKES DE CHOCOLATE"
          imageSrc={PancakesChocolate}
          imageAlt="Pancakes de Chocolate"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="SÁNDWICH DE CARNE Y QUESO"
          imageSrc={SándwichCarneQueso}
          imageAlt="Sándwich de Carne y Queso"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="SÁNDWICH DE JAMÓN Y QUESO"
          imageSrc={SándwichJamónQueso}
          imageAlt="Sándwich de Jamón y Queso"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="SÁNDWICH DE PAVO Y AGUACATE"
          imageSrc={SándwichPavoAguacate}
          imageAlt="Sándwich de Pavo y Aguacate"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="TORTILLA DE JAMÓN Y QUESO"
          imageSrc={TortillaJamónQueso}
          imageAlt="Tortilla de Jamón y Queso"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="TOSTADA DE AGUACATE"
          imageSrc={TostadaAguacate}
          imageAlt="Tostada de Aguacate"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="TOSTADAS FRANCESAS"
          imageSrc={TostadasFrancesas}
          imageAlt="Tostadas Francesas"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="TOSTADA DE JAMÓN Y QUESO"
          imageSrc={TostadaJamónQueso}
          imageAlt="Tostada de Jamón y Queso"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="WAFFLES"
          imageSrc={Waffles}
          imageAlt="Waffles"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="WRAP CARNES Y MOZZARELLA"
          imageSrc={WrapCarnesMozzarella}
          imageAlt="Wrap Carnes y Mozzarella"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="WRAP COSTILLITAS"
          imageSrc={WrapCostillitas}
          imageAlt="Wrap Costillitas"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="WRAP HAWAIANO"
          imageSrc={WrapHawaiano}
          imageAlt="Wrap Hawaiano"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="WRAP DE JAMÓN Y MOZZARELLA"
          imageSrc={WrapJamónMozzarella}
          imageAlt="Wrap de Jamón y Mozzarella"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="WRAP DE POLLO"
          imageSrc={WrapPollo}
          imageAlt="Wrap de Pollo"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="WRAP ROAST BEEF"
          imageSrc={WrapRoastBeef}
          imageAlt="Wrap Roast Beef"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
        <ProductBox
          className="food"
          title="WRAP TRADICIONAL DE RES"
          imageSrc={WrapTradicionalRes}
          imageAlt="Wrap Tradicional de Res"
          detailsLink="/"
          price={4.99}
          /*
          onAddToCart={() =>
            addToCart({ title: "AMERICANO", price: 4.99, image: Americano })
          }
          */
        />
      </div>
    </>
  );
};

export default Menu;
