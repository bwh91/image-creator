# image-creator

##This is a simple script that allows you to create images from canvas elements.

### First include script:
```html
<script src="image-app.js"></script>
```

### Then create new Image object:
```javascript
var i = new Image("c", "test2", "png");
```

## Below are a few ways to use this library.

### To automatically download image:
```javascript
i.createImageAuto();
```

### To get path to file:
```javascript
i.createImage();
var urlToImage = i.URI;
```

### To open image in new window:
```javascript
i.openNewWindow();
```
