// src/components/Tabela.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tabela = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/clientes');
        setClientes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Número</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <tr key={cliente._id}>
            <td>{cliente.nome}</td>
            <td>{cliente.email}</td>
            <td>{cliente.numero}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
