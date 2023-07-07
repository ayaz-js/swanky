import React, { FC, useEffect, useState } from 'react';
// @ts-ignore
import Cleave from 'cleave.js/react';
import 'cleave.js/dist/addons/cleave-phone.kz'
import './style.scss';
import { useDispatch } from "react-redux";
import { handleLoading, resetLoading } from "../../store/actions/loaderAction";
import { Props } from "./types";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const Form: FC<Props> = ({ card, isOpen, onClose }) => {
  const baseUrl = 'https://script.google.com/macros/s/AKfycbzjJmwGmaFqMKdXgR3pQquxE_D5bC086qiBuIHrr3g8ROxXzE85Cru_QqN_N_Kt9G4t/exec';

  const dispatch = useDispatch()

  const { isLoading } = useTypedSelector(state => state.loader)

  const options = {
    phone: true,
    phoneRegionCode: 'KZ',
    prefix: '+7',
    delimiter: '-',
  };

  const [formData, setFormData] = useState(
    {
    productId: card?.id,
    name: '',
    phone: '',
    productName: card?.name,
    productPrice: card?.price,
  });

  const [inputs, setInputs] = useState({ name: '', phone: '' });

  const { name, phone } = inputs;

  useEffect(() => setInputs({ name: '', phone: '' }), [isOpen])

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({...prev, name: event.target.value}));
    setInputs(prev => ({...prev, name: event.target.value}));
  }

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({...prev, phone: event.target.value}));
    setInputs(prev => ({...prev, phone: event.target.value}));
  }

  const isValid = name.length > 0 && phone.length === 15;

  const buttonClassName = isValid ? `form__button form__button_active`
    : `form__button`;

  const loaderAnimation = isLoading ? `form__button_loader` : `form__button`

  const resetForm = () => {
    setFormData(
      {
        productId: '',
        name: '',
        phone: '',
        productName: '',
        productPrice: '',
      });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(handleLoading())

    if (isValid) {
      const _formData = new FormData();

      _formData.append('id', formData.productId);
      _formData.append('Name', formData.name);
      _formData.append('Phone', formData.phone);
      _formData.append('ProductName', formData.productName);
      _formData.append('ProductPrice', formData.productPrice);

      setInputs({ name: '', phone: '' });

      fetch(baseUrl, {
        method: 'POST',
        body: _formData,
      }).then(() => resetForm())
        .then(() => onClose())
        .catch((error) => console.log(error))
        .finally(() => dispatch(resetLoading()))
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ваше имя"
        className="form__input"
        value={name}
        onChange={handleChangeName}
      />
      <Cleave
        placeholder="Ваш номер телефона (WhatsApp)"
        className="form__input"
        options={options}
        value={phone}
        onChange={handleChangePhone}
      />
      <button
        type="submit"
        className={`${buttonClassName} ${loaderAnimation}`}
        disabled={!isValid || isLoading}
      >{isLoading ? "" : "Отправить"}</button>
    </form>
  );
};
