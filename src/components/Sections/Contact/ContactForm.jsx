import React, { useEffect, useState } from "react";
import { useForm } from "../../../index";

import { Icon } from "../../../index";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  const { name, email, subject, comments } = form;
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  errors.name =
    (!name.trim() && "El campo 'Nombre' es Requerido") ||
    (!regexName.test(name.trim()) &&
      "El campo 'Name' solo acepta letras y espacios en blanco");
  errors.email =
    (!email.trim() && "El campo 'Correo' es Requerido") ||
    (!regexEmail.test(email.trim()) && "El campo 'Email' es incorrecto");
  errors.subject = !subject.trim() && "El campo 'Subject' es Requerido";
  errors.comments =
    (!comments.trim() && "El campo 'Mensaje' es Requerido") ||
    (!regexComments.test(comments.trim()) &&
      "El campo 'Mensaje' no debe exceder los 255 caracteres");

  return errors;
};

let styles = { fontWeight: "bold", color: "#dc3545" };

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <form
      className="contact-right-form"
      action="https://formsubmit.co/waliuxd@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
      name="contact"
    >
      <input
        type="hidden"
        name="FormulariodeContacto"
        value="FormularioContacto"
      />
      <input
        type="text"
        placeholder="Write your name"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {errors.name && <p style={styles}>{errors.name}</p>}
      <input
        type="text"
        placeholder="Email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {errors.email && <p style={styles}>{errors.email}</p>}
      <input
        type="text"
        placeholder="Subject"
        id="subject"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {errors.subject && <p style={styles}>{errors.subject}</p>}
      <textarea
        placeholder="Write a message"
        id="message"
        name="comments"
        value={form.comments}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      ></textarea>
      {errors.comments && <p style={styles}>{errors.comments}</p>}
      <input type="submit" value="Enviar" />
    </form>
   // {loading &&}
  );
};

export default ContactForm;
