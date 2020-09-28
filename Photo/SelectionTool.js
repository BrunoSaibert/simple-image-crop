export default function(Photo) {
  Photo.selection = document.getElementById("selection-tool");
  Photo.startSelection = false;

  const events = {
    mouseover() {
      this.style.cursor = "crosshair";
    },
    mousedown() {
      Photo.startX = event.clientX;
      Photo.startY = event.clientY;
      Photo.relativeStartX = event.offsetX;
      Photo.relativeStartY = event.offsetY;

      Photo.startSelection = true;
    },
    mousemove() {
      Photo.endX = event.clientX;
      Photo.endY = event.clientY;

      if (startSelection) {
        Photo.selection.style.display = "initial";
        Photo.selection.style.top = startY + "px";
        Photo.selection.style.left = startX + "px";

        Photo.selection.style.width = endX - startX + "px";
        Photo.selection.style.height = endY - startY + "px";
      }
    },
    mouseup() {
      Photo.startSelection = false;

      Photo.relativeEndX = event.layerX;
      Photo.relativeEndY = event.layerY;

      // mostrar botão de corte
      Photo.cropButton.style.display = "initial";
    }
  };

  Object.keys(events).forEach(eventName => {
    Photo.photoPreview.addEventListener(eventName, events[eventName]);
  });
}
