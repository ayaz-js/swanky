import React, { useEffect, useState } from 'react';
import './style.scss';

const Form = ({isOpen, onClose}) => {
  const baseUrl = 'https://script.google.com/macros/s/AKfycbyRei9QCnuLYHRVjqet_f6BHeyqLFniGpvumqxGAQCn7QTa2EP3SlLPjwNDSDAOqNBR/exec'
  const [formData, setFormData] = useState({ name: '', phone: '', productName: '' });
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const _formData = new FormData();

    _formData.append('Name', formData.name);
    _formData.append('Phone', formData.phone);
    _formData.append('ProductName', formData.productName);

    fetch(baseUrl, {
      method: 'POST',
      body: _formData,
    }).then((response) => {
      setFormData({ name: '', phone: '', productName: '' });
      setInputs({ name: '', phone: '' });
    }).catch((error) => console.log(error));
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
      <input
        type="text"
        placeholder="Ваш номер телефона (WhatsApp)"
        className="form__input"
        value={phone}
        onChange={handleChangePhone}
      />
      <button
        type="submit"
        className="form__button"
      >Отправить</button>
    </form>
  );
};

export default Form;
