// src/components/Formulario.js
import React, { useState } from 'react';
import axios from 'axios';

const Formulario = () => {
  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    numero: '',
  });

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/clientes', cliente);
      // Limpar os campos após o envio
      setCliente({ nome: '', email: '', numero: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:</label>
      <input type="text" name="nome" value={cliente.nome} onChange={handleChange} required />
      <label>Email:</label>
      <input type="email" name="email" value={cliente.email} onChange={handleChange} required />
      <label>Número:</label>
      <input type="text" name="numero" value={cliente.numero} onChange={handleChange} required />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Formulario;
