/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../styles/home.css";
import MyImage from "../assets/image1.jpg";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-title">Bienvenue sur Notre Plateforme !</h1>
        <p>Rejoignez-nous pour découvrir et vous inscrire facilement.</p>
      </header>
      <section className="home-content">
        <div className="card">
          <img src={MyImage} alt="Image 1" />
          <h2>Genie Civil</h2>
          <p>Découvrez les derniers événements organisés près de chez vous.</p>
        </div>
        <div className="card">
          <img src={MyImage} alt="Image 2" />
          <h2>Topologie </h2>
          <p>Inscrivez-vous en quelques étapes simples et rapides.</p>
        </div>
        <div className="card">
          <img src={MyImage} alt="Image 3" />
          <h2>Communauté Accueillante</h2>
          <p>Rejoignez une communauté dynamique et engagée.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
