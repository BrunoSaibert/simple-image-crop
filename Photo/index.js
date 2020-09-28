import Canvas from "./Canvas";
import Preview from "./Preview";
import Load from "./Load";
import SelectionTool from "./SelectionTool";
import Crop from "./Crop";
import Download from "./Download";

const Photo = {
  photoPreview: document.getElementById("photo-preview")
};

Canvas(Photo);
Preview(Photo);
Load(Photo);
SelectionTool(Photo);
Crop(Photo);
Download(Photo);

export default Photo;
