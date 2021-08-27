import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const ContactSectionStyles = styled.div`
  background: var(--darkBackground);
  color: white;
  padding: var(--contentPadding);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  gap: 2rem;

  img {
    grid-column: 1/3;
    grid-row: 2;

    margin: 0 auto;
    padding: 10px;
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
`;

const ContactInfoSection = styled.div``;

export default function ContactSection() {
  const { register, handleSubmit } = useForm();

  const [didSubmit, setDidSubmit] = useForm(false);

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

  const coordinates = "32.889641,-96.769518";
  const key = "AIzaSyCiPTto1eRLFQp3_Maz40NHcMclVAHrgGY";
  const mapId = "8d6b254798e644d0";

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
            // onSubmit={handleSubmit(onSubmit)}
            action="/api/form"
            method="POST"
            style={{ display: `block`, width: 400 }}
          >
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              style={{ display: `block`, marginBottom: 16 }}
              name="name"
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              style={{ display: `block`, marginBottom: 16 }}
            />
            {/* 
          <label htmlFor="tel">Mobile number</label>
          <input
            id="tel"
            type="tel"
            style={{ display: `block`, marginBottom: 16 }}
            {...register("Mobile number", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          /> */}

            <label htmlFor="message">Message</label>
            <input
              id="message"
              type="text"
              style={{ display: `block`, marginBottom: 16 }}
              name="message"
            />

            <input type="submit" value="Submit" />
          </form>
        )}
      </ContactFormSection>
      <img
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${coordinates}&zoom=10&size=600x500&key=${key}&map_id=${mapId}`}
        alt="Map of location of LGA"
      />
    </ContactSectionStyles>
  );
}
