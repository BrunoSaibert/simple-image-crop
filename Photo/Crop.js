export default function(Photo) {
  Photo.crop = function() {
    const { width: imgW, height: imgH } = Photo.image;
    const { width: prevW, height: prevH } = Photo.photoPreview;

    const [factorWidth, factorHeight] = [+(imgH / prevH), +(imgW / prevW)];

    const [selectionWidth, selectionHeight] = [
      +Photo.selection.style.width.replace("px", ""),
      +Photo.selection.style.height.replace("px", "")
    ];

    const [croppedWidth, croppedHeight] = [
      +(selectionWidth * factorWidth),
      +(selectionHeight * factorHeight)
    ];

    const [actualX, actualY] = [
      +(relativeStartX * factorWidth),
      +(relativeStartY * factorHeight)
    ];

    // pegar do ctx a imagem cortada
    const croppedImage = Photo.ctx.getImageData(
      actualX,
      actualY,
      croppedWidth,
      croppedHeight
    );

    // limpar o ctx
    Photo.ctx.clearRect(0, 0, Photo.ctx.width, Photo.ctx.height);

    // ajuste de proporções
    Photo.image.width = Photo.canvas.width = croppedWidth;
    Photo.image.height = Photo.canvas.height = croppedHeight;

    // adicionar imagem cortada ao ctx
    Photo.ctx.putImageData(croppedImage, 0, 0);

    // esconder ferramenta de seleção
    Photo.selection.style.display = "none";

    // atualizar o preview da imagem
    Photo.photoPreview.src = Photo.canvas.toDataURL();

    // mostrar botão de download de
    Photo.downloadButton.style.display = "initial";
  };
}
