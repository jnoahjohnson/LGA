import React from "react";
import ContactSection from "../componenents/ContactSection";
import Page from "../componenents/Page";
import PhotoHeader from "../componenents/PhotoHeader";

export default function ContactPage() {
  return (
    <Page footer fullNav>
      <main>
        <PhotoHeader
          firstWord="Reach"
          title="Out"
          backgroundImage="https://res.cloudinary.com/dbolbbqw7/image/upload/f_auto/ReachOut_hacpop.png"
        />
        <ContactSection />
      </main>
    </Page>
  );
}
