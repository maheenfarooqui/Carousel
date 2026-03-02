var dispaly = document.getElementById("img1");
var imgArr = [
  "assets/image1.jpg",
  "assets/image2.jpg",
  "assets/image3.jpg",
 "assets/image4.jpg",
  "assets/image5.jpg",
  "assets/image6.jpg",
  "assets/image7.jpg",
 "assets/image8.jpg",
 "assets/image9.jpg",
];
var index = 0;
function nextImg() {
    if(index === imgArr.length - 1){
        index = 0;
    }
    else{
 index ++;
    }
   
    dispaly.src = imgArr[index];
}
function previous() {
    if(index === 0){
        index = imgArr.length -1;
        }
        else{
            index--
        }
        dispaly.src = imgArr[index];
}
setInterval(() => {
 nextImg()
}, 2000);
