import LinkedList from "../../util/LinkedList";
import image1 from "./img/download.jpg";
import image2 from "./img/image2.jpg";
const map = new LinkedList();
map.append({
  title: "Faculty of Sceince",
  image: image1,
});
map.append({
  title: "Faculty of Computers and Information",
  image: image2,
});
export default map;
