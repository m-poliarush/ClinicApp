import React from "react";
import "../Styles/Home.scss";

const Home = () => {
  return (
    <div className="page-container">
      <div className="home-header">
        <img src="/clinic-logo.png" alt="Clinic Logo" className="logo-image" />
        <div className="buttons">
          <button className="btn btn-primary">Auth</button>
          <button className="btn btn-secondary">Reg</button>
        </div>
      </div>

      <hr className="divider" />

      <div className="search-section">
        {/* <input
          type="text"
          placeholder="Введите фамилию врача"
          className="search-input"
        /> */}
        <button className="search-button">Искать</button>
      </div>

      <div className="doctor-cards">
        <div className="doctor-card">
          <img
            src="/doctor1-photo.jpg"
            alt="Doctor 1"
            className="doctor-photo"
          />
          <h3>Dr. Дядя Богдан</h3>
          <p>
            Учредитель клиники и ведущий мировой специалист в сфере
            Нейрохирургии - Богдан Гаченко
          </p>
        </div>
        <div className="doctor-card">
          <img
            src="/doctor2-photo.jpg"
            alt="Doctor 2"
            className="doctor-photo"
          />
          <h3>Dr. Папаня</h3>
          <p>
            Ведущий психолог клиники Дяди Богдана, проводящий онлайн
            консультации по програмам "Духовное Здоровье" и "Сдерживание Гнева
          </p>
        </div>
        <div className="doctor-card">
          <img
            src="/doctor3-photo.jpg"
            alt="Doctor 3"
            className="doctor-photo"
          />
          <h3>Dr. Bald from Brazzers</h3>
          <p>Проктолог</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
