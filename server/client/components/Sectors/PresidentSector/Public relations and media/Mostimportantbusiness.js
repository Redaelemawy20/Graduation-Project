import React from "react";
import navLinks from "../NavLinksObjectofpresedentuniversity";
import Header from "../../../Home_Page/Header2";
import HugeTafftext from "../../Common/HugeTafftext";
export default function Mostimportantbusiness() {
  const text = {
    Title: "Most important business",
    lines: [
      "The administration issued a brochure about the university and its various faculties and units, as well as Al-Manara magazine, the seventeenth issue, as well as the Manarat Al-Marefa book, and participated in preparing a documentary film about the university on the occasion of the thirty-seventh anniversary.",
      "See all that is published in the Egyptian daily newspapers and magazines that are published in all their directions..And pick news related to education activities in general and higher education in particular and all relatedFrom the University of Menoufia and its activities.",
      "Responding to news and investigations published in newspapers and magazines or in radio and television programs, which requires a response, and clarifying the truth about what is published.",
      "Participation and coordination were carried outWith the General Department of Community Service and Environmental Development affairs in organizing many conferences, seminars and medical convoys and covering them in the media, including:",
      "A medical convoy of the village of Ajhor al-Raml on 15 September 2013.",
      "The Caravan of the College of Nursing for The Bajaur on 16 September 2013.",
      "The Convoy of the Faculty of Education of the Boys Foundation in Manouf on 17 September 2013.",
      "The Vision Seminar of the University of Menoufia in the draft constitution on 26 October 2013.",
      "Convoy of the Faculty of Quality Education of the village of Visha Minor In Bajaur on 27 October 2013.",
      "Convoy of the Faculty of Science in the Industrial Zone of Our Province on 30 October 2013.",
      "Nephritis Symposium on 24/11/2013",
      "Caravan of the Old High School of Home Economics on 27 November 2013.",
      "Egyptian Child Education Seminar for Life in a Democratic Society on 3/12/2013",
      "The department has also participated in conferences and seminars, including:",
      "The 16th Arab Conference on Home Economy in the Service of Industry on September 10, 2013.",
      "Graduate ceremony at the Faculty of Engineering.",
      "Graduation ceremony for the 33rd class of the Faculty of Science on 26 October 2013.",
      "The university's strategy, which was held on 8,22, 29/10, 26/11/2013.",
      "The ceremony of the Association of Thanked Endeavors on 17 December 2013.",
      "Graduate ceremony of the Faculty of Electronic Engineering on 3 December 2013",
      "The department also sent telegrams at various events to public figures, faculty and staff.",
      "The Department has also issued several passports to the faculty members who have been issued with a travel decision from the competent authority.",
      "Then the preparations for the University’s Day during this period, and the University Day was celebrated on December 25, 26, 2013, and the faculty members (the age of sixty - winners of university awards) honored in international and local forums - winners of the Prof. Honoring the faculty members and the supporting staff who died while serving - the faculties that won the Environmental Excellence Award - the best faculty at the university level.",
      "The honorees are those granted master’s and doctoral degrees, the first holders of a bachelor’s and a bachelor’s degree (regularity-affiliation-directed-open education), the first people, as well as workers of all degrees who have reached the retirement age, the departments that won the Environmental Excellence Award, and the workers who died while in service.",
      "A photo archive of the university's various activities has been created electronically."
    ],
  };
  return (
    <div>
      <Header navLinks={navLinks} />
      <HugeTafftext text={text} />
    </div>
  );
}
