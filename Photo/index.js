import createCanvas from "./Canvas";
import setPreview from "./Preview";
import configureLoad from "./Load";
import createSelectionTool from "./SelectionTool";
import canCrop from "./Crop";
import canDownload from "./Download";

const Photo = {};

createCanvas(Photo);
setPreview(Photo);
configureLoad(Photo);
createSelectionTool(Photo);
canCrop(Photo);
canDownload(Photo);

export default Photo;
