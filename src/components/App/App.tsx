import React, { useState, useEffect, useRef } from "react";
import './App.scss';
import { Products } from "../Products";
import { Features } from "../Features";
import { Footer } from "../Footer";
import { FooterMobile } from "../FooterMobile";
import { Popup } from "../Popup";
import { ImagePopup } from "../ImagePopup";
import { Header } from "../Header";
import { HeaderMobile } from "../HeaderMobile";
import { useDispatch, useSelector } from "react-redux";
import { resetModals } from "../../store/actions/popupActions";


export const App = () => {
  const baseUrl = `https://docs.google.com/spreadsheets/d/1EgdkG5Xnt9RISCXwpzfHokv0HPsPIdRv478i85JlgNY/gviz/tq?tqx=out:json&sheet=products`;

  const dispatch = useDispatch()

  const { showImageModal, showOrderModal, cardData } = useSelector(state => state.popup)

  const cards = useSelector(state => state.products)

  const closeAllPopups = () => dispatch(resetModals());

  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => setWidth(window.innerWidth);

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

        const labels = json.table.cols.map((title) => title.label !== "" ? title.label : "Техническое поле");

        const initialArr = json.table.rows;

        // @ts-ignore
          const createPureArr = (initialArr, labels) => {
          // @ts-ignore
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
        dispatch({type: "products", payload: newData });
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  }, [baseUrl]);

  const headerSection = useRef(null);
  const productSection  = useRef(null);

  const handleHeaderScroll = () => headerSection.current.scrollIntoView({block: "start", behavior: "smooth"});

  const handleProductScroll = () => productSection?.current.scrollIntoView({block: "start", behavior: "smooth"});

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
        <Products cards={cards} productSection={productSection} />
        <Features />
      </main>
      {!isMobile ? (
        <Footer onArrowClick={handleHeaderScroll} />
      ):(
        <FooterMobile onArrowClick={handleHeaderScroll} />
      )}
      <Popup
        isOpen={showOrderModal}
        onClose={closeAllPopups}
        card={cardData}
      />

      <ImagePopup
        isOpen={showImageModal}
        onClose={closeAllPopups}
        card={cardData}
      />
    </div>
  );
}
