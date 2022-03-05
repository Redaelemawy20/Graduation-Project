let fileList = [];

const fileUploader = document.getElementById("files-uploader");
const output = document.getElementById("output");
fileUploader.onchange = (event) => {
  for (let i = 0; i < fileUploader.files.length; i++) {
    fileList.push(fileUploader.files[i]);
  }
  setOutPut();
};

function deleteFile(name) {
  for (let [index, file] of fileList.entries()) {
    if (file.name === name) fileList.splice(index, 1);
  }
  setOutPut();
}
function setOutPut() {
  let element = "";
  for (let file of fileList) {
    element +=
      '<div class="form-selectgroup-label d-flex justify-content-between p-3">';
    element += file.name;
    element += `<div class="text-danger " onclick=deleteFile("${file.name}") > delete </div>`;
    element += "</div>";
  }
  output.innerHTML = element;
}
