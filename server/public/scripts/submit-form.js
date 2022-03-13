console.log("HI");
function getPayload() {
  const formData = new FormData();
  formData.append("title", document.getElementById("title").value);
  formData.append("content", document.getElementById("content").value);
  formData.append(
    "show",
    document.getElementById("show").value === "on" ? true : false
  );
  formData.append("mainImage", fileInput.files[0]);
  for (let idx = 0; idx < fileList.length; idx++) {
    formData.append("files", fileList[idx]);
  }
  return formData;
}
function submitForm(event) {
  event.preventDefault();
  var url = "http://localhost:3000/news/create";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText);
    }
  };
  xhr.send(getPayload());
}
function updateForm(event, id) {
  event.preventDefault();
  var url = `http://localhost:3000/news/${id}/update`;
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText);
    }
  };
  xhr.send(getPayload());
}
