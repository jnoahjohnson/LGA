import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as Icon from "react-feather";

const PerspectiveImage = () => (
  <StaticImage
    src="../images/perspective-image.png"
    alt="Looking up at skyscrapers"
    placeholder="blurred"
  />
);
const ProcessImage = () => (
  <StaticImage
    src="../images/process-image.png"
    alt="Sticky notes on a board"
    placeholder="blurred"
  />
);
const PerformanceImage = () => (
  <StaticImage
    src="../images/performance-image.png"
    alt="Man looking at buildings"
    placeholder="blurred"
  />
);

export const WhyLoganData = [
  {
    title: "Perspective",
    text: "Logan has been on all sides of deals including buying companies as PE investors, running companies as CEO and CFOs, and selling companies as bankers, so it knows what investors want and how difficult that is to achieve.",
    image: <PerspectiveImage />,
    icon: <Icon.Crop />,
  },
  {
    title: "Process",
    text: "Our world-class ABC (assess, build, and capture value) process increases value, defends founders, and improves speed / certainty to close.",
    image: <ProcessImage />,
    icon: <Icon.BarChart />,
  },
  {
    title: "Performance",
    text: "Logan completed 10 deals in the last. Many of which were very difficult situations. Logan has a culture of grit and hustle and will move heaven and earth to get a win for the biggest financial event of a founder’s life.",
    image: <PerformanceImage />,
    icon: <Icon.DollarSign />,
  },
];
