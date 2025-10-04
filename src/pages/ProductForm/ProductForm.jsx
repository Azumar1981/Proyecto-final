import React, { useState } from "react";
import styles from "./ProductForm.module.css";

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Formulario enviado:\nNombre: ${formData.name}\nEmail: ${formData.email}\nMensaje: ${formData.message}`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.productForm}>
      <h1>Contacta al vendedor</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mensaje:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Enviar Mensaje</button>
      </form>
    </div>
  );
}
