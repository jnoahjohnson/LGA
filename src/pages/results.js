import React from "react";
import Page from "../componenents/Page";
import PhotoHeader from "../componenents/PhotoHeader";
import ResultsGrid from "../componenents/ResultsGrid";

export default function ResultsPage() {
  return (
    <Page footer fullNav>
      <main>
        <PhotoHeader
          firstWord="Our"
          title="Past Transactions"
          backgroundImage="https://res.cloudinary.com/dbolbbqw7/image/upload/f_auto/PastTransactions_ogfb5c.png"
        />
        <ResultsGrid />
      </main>
    </Page>
  );
}
