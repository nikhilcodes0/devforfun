var img;
var c1 = document.getElementById("canvas1");
var c2 = document.getElementById("canvas2");

const upload = () => {
    var imgfile = document.getElementById("imgFile");
    img = new SimpleImage(imgfile);
    img.drawTo(c1);
}

function purpleFilter() {
    var purpleImage = img; 
    for(var pixel of purpleImage.values()) {
        var avgpx = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avgpx);
        pixel.setGreen(avgpx);
        pixel.setBlue(avgpx);
        // pixel.setGreen(0);
    }
    purpleImage.drawTo(c2);
}