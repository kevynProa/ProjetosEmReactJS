import React from 'react'
import './style.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="square">
        <h2>Missão</h2>
        <p>Nossa missão é proporcionar a melhor experiência aos nossos usuários...</p>
      </div>
      <div className="square">
        <h2>Visão</h2>
        <p>Queremos ser líderes no mercado, reconhecidos pela nossa inovação...</p>
      </div>
      <div className="square">
        <h2>Valores</h2>
        <p>Integridade, compromisso e qualidade são os pilares da nossa empresa...</p>
      </div>
      <div className="square">
        <h2>Equipe</h2>
        <p>Nosso time é composto por profissionais altamente qualificados...</p>
      </div>
    </div>
  )
}

export default About
