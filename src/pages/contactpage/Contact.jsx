import React from 'react'
import './style.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="square">
        <h2>Endereço</h2>
        <p>Rua Exemplo, 123<br/>Cidade, Estado, CEP</p>
      </div>
      <div className="square">
        <h2>Telefone</h2>
        <p>(11) 1234-5678</p>
      </div>
      <div className="square">
        <h2>Email</h2>
        <p>contato@empresa.com</p>
      </div>
      <div className="square">
        <h2>Redes Sociais</h2>
        <p>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a><br/>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a><br/>
          <a href="https://www.linkedin.com/in/kevyn-rodrigu%C3%AAs-529b402b4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </div>
  )
}

export default Contact
