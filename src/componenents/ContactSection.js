import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const ContactSectionStyles = styled.div`
  background: var(--darkBackground);
  color: white;
  padding: var(--contentPadding);

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 2rem;

  img {
    grid-column: 1/3;
    grid-row: 2;

    margin: 0 auto;
    padding: 10px;
  }

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`;

const ContactFormSection = styled.div`
  input {
    border: none;
    padding: 10px 20px;
    width: 100%;
  }

  input[type="submit"] {
    background: white;
    border: none;
    font-weight: 500;
    margin: 0 auto;
    width: 150px;
    font-size: 1.25rem;
  }

  form {
    margin: 0 auto;
  }

  label {
    font-size: 1.25rem;
  }

  textarea {
    resize: none;
    height: 150px;
  }
`;

const ContactInfoSection = styled.div`
  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-bottom: 1rem;
  }
`;

export default function ContactSection() {
  const { register, handleSubmit } = useForm();

  const [didSubmit, setDidSubmit] = useState(false);

  const onSubmit = (data) => {
    fetch(`/api/form`, {
      method: `POST`,
      body: JSON.stringify(data),
      headers: {
        "content-type": `application/json`,
      },
    })
      .then((res) => res.json())
      .then((body) => {
        console.log(`response from API:`, body);
        setDidSubmit(true);
      });
  };

  return (
    <ContactSectionStyles>
      <ContactInfoSection>
        <h1>Logan Growth Advisors</h1>
        <h2>10440 North Central Expressway, Suite 800 | Dallas, TX 75231</h2>
        <h2>Phone: 205.901.0276</h2>
        <h2>Email: kevin@logangrowthadvisors.com</h2>
        <h2>
          For Career Opportunities Contact Human Resource’s Camille Telford
          camille@logangrowthadvisors.com
        </h2>
      </ContactInfoSection>
      <ContactFormSection>
        {didSubmit ? (
          <div>Thank you!</div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="/api/form"
            method="POST"
            style={{ width: 400 }}
          >
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              style={{ marginBottom: 16 }}
              name="name"
              {...register("name", { required: true, maxLength: 80 })}
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              style={{ marginBottom: 16 }}
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />

            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="phone"
              name="phone"
              style={{ marginBottom: 16 }}
              {...register("phone", { required: false })}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              type="text"
              style={{ marginBottom: 16, width: "100%" }}
              name="message"
              {...register("message", { required: true, maxLength: 250 })}
            />

            <input type="submit" value="Submit" />
          </form>
        )}
      </ContactFormSection>
    </ContactSectionStyles>
  );
}
