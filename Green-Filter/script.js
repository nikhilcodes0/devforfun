var img1, img2;
var c1 = document.getElementById("canvas1");
var c2 = document.getElementById("canvas2");
var c3 = document.getElementById("canvas3");

const upload = () => {
    var imgfile = document.getElementById("1imgFile");
    img1 = new SimpleImage(imgfile);
    img1.drawTo(c1);
}

const upload2 = () => {
    var imgfile = document.getElementById("2img");
    img2 = new SimpleImage(imgfile);
    img2.drawTo(c2);
}

function greenFilter() {
    var mergeImage = new SimpleImage(img1.getWidth(), img1.getHeight());
    for(var pixel of img1.values()) {
        if(pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
            var x = pixel.getX();
            var y = pixel.getY();
            var greenPixel = img2.getPixel(x, y);
            mergeImage.setPixel(x, y, greenPixel);
        }
        else {
            mergeImage.setPixel(pixel.getX(), pixel.getY(), pixel);
        }
        
    }
    mergeImage.drawTo(c3);
}