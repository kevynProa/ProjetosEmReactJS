import React from 'react'
import './style.css'
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
        <h1>João Silva</h1>
        <p className="profile-title">Desenvolvedor Front-End</p>
      </div>
      <div className="profile-content">
        <section className="profile-section">
          <h2>Sobre Mim</h2>
          <p>Sou um desenvolvedor front-end com paixão por criar interfaces de usuário incríveis. Adoro aprender novas tecnologias e melhorar minhas habilidades. Tenho experiência em React, CSS, e JavaScript.</p>
        </section>
        <section className="profile-section">
          <h2>Informações de Contato</h2>
          <ul>
            <li><strong>Endereço:</strong> Rua Exemplo, 123, Cidade, Estado, CEP</li>
            <li><strong>Telefone:</strong> (11) 1234-5678</li>
            <li><strong>Email:</strong> joao.silva@exemplo.com</li>
          </ul>
        </section>
        <section className="profile-section">
          <h2>Redes Sociais</h2>
          <p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a><br />
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a><br />
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </section>
      </div>
    </div>
  )
}

export default Profile
