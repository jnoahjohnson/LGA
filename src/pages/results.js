import React from "react";
import Page from "../componenents/Page";
import PhotoHeader from "../componenents/PhotoHeader";
import ResultsGrid from "../componenents/ResultsGrid";
import CallToActionSection from "../componenents/CallToActionSection";

export default function ResultsPage() {
  return (
    <Page footer fullNav>
      <main style={{ background: "var(--light)" }}>
        <PhotoHeader
          firstWord="Our"
          title="Recent Transactions"
          backgroundImage="https://res.cloudinary.com/dbolbbqw7/image/upload/f_auto/PastTransactions_ogfb5c.png"
        />
        <ResultsGrid />
        <CallToActionSection />
      </main>
    </Page>
  );
}
