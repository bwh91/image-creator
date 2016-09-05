/*
  Image class:

  canvasID: id of the canvas object
  filename: the name of the file minus the extension
  fileType: the file extension

*/
var Image = function (canvasID, filename, fileType) {
  this.canvasID = canvasID;
  try {
    this.canvas = document.getElementById(this.canvasID);
    this.imageHeight = this.canvas.height;
    this.imageWidth = this.canvas.width;
    this.URI = this.canvas.toDataURL("image/" + this.fileType).replace("image/" + this.fileType, "image/octet-stream");
  }
  catch(err) {
    console.log("canvas id could not be found");
    this.canvas = "";
    this.imageHeight = "";
    this.imageWidth = "";
    this.URI = "";
  }
  this.filename = filename;
  this.fileType = fileType;


};

/*
  function creates the image and automatically downloads the file
*/
Image.prototype.createImageAuto = function() {

    var a = document.createElement('a');
    a.href = this.URI;
    a.download = this.filename + "." + this.fileType;
    a.click();

};

/*
  function cretes the URI to the file and returns the path
*/
Image.prototype.createImage = function() {


  return this.canvas.toDataURL("image/" + this.fileType).replace("image/" + this.fileType, "image/octet-stream");

};

/*
  function opens the image in a new window
*/
Image.prototype.openNewWindow = function() {

  window.open(this.URI, "Image", "width=" + this.imageWidth + ",height=" + this.imageHeight );



};
