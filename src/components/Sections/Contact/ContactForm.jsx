import React, { useState } from "react";
import { Icon } from "../../../index";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSending(true); // Actualizar estado para comenzar la animación del botón
    const formData = new FormData(event.target);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => {
        console.log("Form successfully submitted");
        return response.text(); // Leer la respuesta como texto en lugar de JSON
      })
      .then((data) => {
        console.log(data);
        // Agregue aquí cualquier código que necesite después de enviar el formulario
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      })
      .finally(() => {
        // Después de unos segundos, restablecer el estado del botón
        setTimeout(() => {
          setIsSending(false);
        }, 3000);
      });
  };

  return (
    <form
      className="contact-right-form"
      method="POST"
      onSubmit={handleSubmit}
      name="contact"
      data-netlify="true"
      data-netlify-recaptcha="true"
    >
      <input
        type="hidden"
        name="FormulariodeContacto"
        value="FormularioContacto"
      />

      <input
        type="text"
        placeholder="Name"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        id="subject"
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Write a message"
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit" className="input-send" disabled={isSending}>
        {isSending ? (
          "Sending..."
        ) : (
          <>
            Send <Icon css="icon" icon={faPaperPlane} />
          </>
        )}
      </button>

      <div className="recaptcha">
        <div data-netlify-recaptcha="true"></div>
      </div>
    </form>
  );
};

export default ContactForm;
