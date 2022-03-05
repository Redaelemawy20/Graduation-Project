const fileInput = document.getElementById("img-input");
const preview = document.getElementById("img-preview");
fileInput.onchange = (event) => {
  const [file] = fileInput.files;
  if (file) {
    preview.src = URL.createObjectURL(file);
  }
};
