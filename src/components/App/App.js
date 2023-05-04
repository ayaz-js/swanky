import React, { useState, useEffect, useRef } from "react";
import './App.scss';
import Products from "../Products/Products";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import FooterMobile from "../FooterMobile/FooterMobile";
import Popup from "../Popup/Popup";
import ImagePopup from "../ImagePopup/ImagePopup";
import Header from "../Header/Header";
import HeaderMobile from "../HeaderMobile/HeaderMobile";

const App = () => {
  const baseUrl = `https://docs.google.com/spreadsheets/d/10ssBE9-nkUx7xhZvwBgRUGFvy0hSHuQoHOHlpMcFooU/gviz/tq?tqx=out:json&sheet=products`;

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOrderPopupOpen, setIsOrderPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const closeAllPopups = () => {
    setIsOrderPopupOpen(false);
    setIsImagePopupOpen(false);
  };

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 820;

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.text())
      .then((text) => {
        const json = JSON.parse(text.substr(47).slice(0, -2));

        const labels = json.table.cols.map((title) =>
          title.label !== "" ? title.label : "Техническое поле"
        );

        const initialArr = json.table.rows;

        const createPureArr = (initialArr, labels) => {
          return initialArr.map((item) => {
            return Object.assign(
              ...labels.map((n, i) => ({
                [n]: item.c[i] ? item.c[i].v : false,
              }))
            );
          });
        };

        const newData = createPureArr(initialArr, labels);
        newData.shift();
        setCards(newData);
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  }, [baseUrl]);

  const headerSection = useRef(null);
  const productSection = useRef(null);

  const handleHeaderScroll = () => {
    headerSection.current.scrollIntoView({block: "start", behavior: "smooth"});
  }

  const handleProductScroll = () => {
    productSection.current.scrollIntoView({block: "start", behavior: "smooth"});
  }

  return (
    <div className="page-container">
      {!isMobile ? (
        <Header
          headerSection={headerSection}
          onArrowClick={handleProductScroll}
        />
      ):(
        <HeaderMobile
          headerSection={headerSection}
          onArrowClick={handleProductScroll}
        />
      )}
      <main className="main">
        <Products
          productSection={productSection}
          cards={cards}
          onImageClick={(card) => {
            setSelectedCard(card);
            setIsImagePopupOpen(true);
          }}
          onButtonClick={(card) => {
            setSelectedCard(card);
            setIsOrderPopupOpen(true);
          }}
        />
        <Features />
      </main>
      {!isMobile ? (
        <Footer onArrowClick={handleHeaderScroll} />
      ):(
        <FooterMobile onArrowClick={handleHeaderScroll} />
      )}
      <Popup
        isOpen={isOrderPopupOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      />

      <ImagePopup
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      />
    </div>
  );
}

export default App;
