export default function(Photo) {
  Photo.downloadButton = document.getElementById("download");

  Photo.download = function() {
    const a = document.createElement("a");
    a.download = photoName + "-cropped.png";
    a.href = canvas.toDataURL();
    a.click();
  };
}
