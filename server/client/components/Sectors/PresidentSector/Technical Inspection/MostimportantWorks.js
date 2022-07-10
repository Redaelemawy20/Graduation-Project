import React from "react";
import TextPages from "../../Common/TextPagesTemplate";
export default function MostimportantWorks() {
  const data = {
    Title: "Important Works",
    lines: [
      "Receiving the Second Place Award for Environmental Excellence for the second year in a row.",
      "Follow-up of all units during maintenance work.",
      "View ways to treat the rodent problem and follow up until it is eliminated.",
      "Follow-up and guidance of pick-up, processing, distribution of meals, hygiene and storage work with a total of 512 visits during this period.",
    ],
  };
  return (
    <div>
      <TextPages text={data} />
    </div>
  );
}
