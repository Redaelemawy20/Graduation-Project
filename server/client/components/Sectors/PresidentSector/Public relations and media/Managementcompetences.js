import React from "react";
import TextPages from "../../Common/TextPagesTemplate";
export default function Managementcompetences() {
  const data = {
    Title: "Management Competences",

    lines: [
      "Developing and implementing programs to strengthen relations between the university family of faculty, staff and students.",
      "Organizing the university's participation in various national, local and national events.",
      "Strengthening relations between the university and other universities and the environment surrounding the local and regional university.",
      "Organizing the reception of local and foreign delegations, developing appropriate programmes for them and supervising their implementation.",
      "Linking the university to various media such as journalism, radio and television, organizing regular press conferences and meetings of newspaper delegates with university officials.",
      "Drawing up public relations and media policy at the university, planning management programs and projects and presenting plans and projects before the start of implementation to university officials, not its decision and adoption and issuing the necessary instructions to implement it.",
      "Preparing documentaries about the university and its activities and showing it to university visitors.",
      "Propose the needs of the public administration of tools and souvenirs necessary for distribution to visiting guests and present these proposals to officials not their decision and adoption.", 
      "Issuing publications and media publications aimed at providing information to publicize the university's activities to its target audience."
    ],
  };
  return (
    <div>
      <TextPages text={data} />
    </div>
  );
}
