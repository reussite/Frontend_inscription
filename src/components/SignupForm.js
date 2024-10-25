// src/components/SignupForm.js
import React, { useState } from "react";
import { Rings } from "react-loader-spinner";
import "../styles/SignupForm.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Le nom est requis";
    if (!formData.firstname) newErrors.firstname = "Le prénom est requis";
    if (!formData.lastname) newErrors.lastname = "Le nom de famille est requis";
    if (!formData.phone) newErrors.phone = "Le numéro de téléphone est requis";
    if (!formData.address) newErrors.address = "L'adresse est requise";
    if (!formData.city) newErrors.city = "La ville est requise";
    if (!formData.state) newErrors.state = "L'état est requis";
    if (!formData.email) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setSuccessMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/students/inscription",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Une erreur est survenue lors de l'envoi des données");
      }

      const result = await response.json();
      console.log("Inscription réussie:", result);
      setSuccessMessage("Inscription réussie !");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Inscription</h2>
      {[
        "name",
        "firstname",
        "lastname",
        "phone",
        "address",
        "city",
        "state",
        "email",
      ].map((field) => (
        <div key={field}>
          <label htmlFor={field}>
            {field.charAt(0).toUpperCase() + field.slice(1)}:
          </label>
          <input
            type={field === "email" ? "email" : "text"}
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
          />
          {errors[field] && <span className="error">{errors[field]}</span>}
        </div>
      ))}
      <button type="submit" disabled={loading}>
        {loading ? "Chargement..." : "S'inscrire"}
      </button>
      {loading && (
        <div className="loader-container">
          <Rings
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="rings-loading"
            visible={true}
          />
        </div>
      )}
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
};

export default SignupForm;
