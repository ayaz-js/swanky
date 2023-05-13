import React, { useEffect, useState } from 'react';
import Cleave from 'cleave.js/react';
import 'cleave.js/dist/addons/cleave-phone.kz'
import './style.scss';

const Form = ({ card, isOpen, onClose }) => {
  const baseUrl = 'https://script.google.com/macros/s/AKfycbzjJmwGmaFqMKdXgR3pQquxE_D5bC086qiBuIHrr3g8ROxXzE85Cru_QqN_N_Kt9G4t/exec';

  const options = {
    phone: true,
    phoneRegionCode: 'KZ',
    prefix: '+7',
    delimiter: '-',
  };

  const [formData, setFormData] = useState(
    {
    name: '',
    phone: '',
    productName: card?.name,
    productPrice: card?.price,
  });

  const [inputs, setInputs] = useState({ name: '', phone: '' });

  const { name, phone } = inputs;

  useEffect(() => {
    setInputs({ name: '', phone: '' });
  }, [isOpen])

  const handleChangeName = (event) => {
    setFormData(prev => ({...prev, name: event.target.value}));
    setInputs(prev => ({...prev, name: event.target.value}));
  }

  const handleChangePhone = (event) => {
    setFormData(prev => ({...prev, phone: event.target.value}));
    setInputs(prev => ({...prev, phone: event.target.value}));
  }

  const isValid = name.length > 0 && phone.length === 15;

  const buttonClassName = isValid ? `form__button form__button_active`
    : `form__button`

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      const _formData = new FormData();

      _formData.append('Name', formData.name);
      _formData.append('Phone', formData.phone);
      _formData.append('ProductName', formData.productName);
      _formData.append('ProductPrice', formData.productPrice);

      fetch(baseUrl, {
        method: 'POST',
        body: _formData,
      }).then((response) => {
        setFormData(
          {
            name: '',
            phone: '',
            productName: '',
            productPrice: '',
          });
        setInputs({ name: '', phone: '' });
      }).catch((error) => console.log(error));
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
        className={buttonClassName}
        onClick={onClose}
        disabled={!isValid}
      >Отправить</button>
    </form>
  );
};

export default Form;
