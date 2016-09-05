
/*
  function creates an image of the supplied canvas object and auto downloads image

  canvasID: id of the canvas elemet that is being converted
  filename: The name of the file minus the extension
  fileType: The extension of the file ex. 'jpeg' or 'png'
*/
function createImageAuto(canvasID, filename, fileType) {

  //Get canvas URI
  var c = document.getElementById(canvasID);
  var i = canvas.toDataURL("image/" + fileType).replace("image/" + fileType, "image/octet-stream");

  //create element and "click" to download
  var a = document.createElement('a');
  a.href = i;
  a.download = filename + "." + fileType;
  a.click();

}

/*
  function creates an image of the supplied canvas object. This should be
  used when you want to actually create a link to download the image instead
  of automatically downloading the image

  canvasID: id of the canvas elemet that is being converted
  filename: The name of the file minus the extension
  fileType: The extension of the file ex. 'jpeg' or 'png'

  returns: a link to the file
*/
function createImage(canvasID, filename, fileType) {

  //Get canvas URI
  var c = document.getElementById(canvasID);

  return canvas.toDataURL("image/" + fileType).replace("image/" + fileType, "image/octet-stream");



}
