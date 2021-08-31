import React from "react";
import ClassicSection from "../componenents/ClassicSection";
import ContactSection from "../componenents/ContactSection";
import Page from "../componenents/Page";
import PhotoHeader from "../componenents/PhotoHeader";

export default function ContactPage() {
  const coordinates = "32.889641,-96.769518";
  const key = "AIzaSyCiPTto1eRLFQp3_Maz40NHcMclVAHrgGY";
  const mapId = "8d6b254798e644d0";

  return (
    <Page footer fullNav>
      <main>
        <PhotoHeader
          firstWord="Reach"
          title="Out"
          backgroundImage="https://res.cloudinary.com/dbolbbqw7/image/upload/f_auto/ReachOut_hacpop.png"
        />
        <ContactSection />
        <ClassicSection dark>
          <div style={{ textAlign: "center", margin: "0 auto", width: "100%" }}>
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${coordinates}&zoom=10&size=600x500&key=${key}&map_id=${mapId}`}
              alt="Map of location of LGA"
            />
          </div>
        </ClassicSection>
      </main>
    </Page>
  );
}
