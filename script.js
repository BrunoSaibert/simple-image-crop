import Photo from "./Photo";
let photoPreview = document.getElementById("photo-preview");
let image;
let photoName = "";

window.addEventListener("DOMContentLoaded", () => {
  Photo.load();
});

// Selecionar foto
document.getElementById("select-image").onclick = () => {
  document.getElementById("photo-file").photoFile.click();
};

// Cortar imagem
const cropButton = document.getElementById("crop-image");
cropButton.onclick = () => {
  Photo.crop();
};

// Download
const downloadButton = document.getElementById("download");
downloadButton.onclick = ()=> Photo.download();
};
