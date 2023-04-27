import React, { useState, useEffect } from "react";
import './App.scss';
import Products from "../Products/Products";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import FooterMobile from "../FooterMobile/FooterMobile";
import Popup from "../Popup/Popup";
import ImagePopup from "../ImagePopup/ImagePopup";

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

  return (
    <div className="page-container">
      <main className="main">
        <Products
          cards={cards}
          onImageClick={(card) => {
            setSelectedCard(card);
            setIsImagePopupOpen(true);
          }}
          onButtonClick={() => setIsOrderPopupOpen(true)}
        />
        <Features />
      </main>
      {!isMobile ? (
        <Footer />
      ):(
        <FooterMobile />
      )}
      <Popup
        isOpen={isOrderPopupOpen}
        onClose={closeAllPopups}
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
