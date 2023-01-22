let imgtag = document.createElement("img");
  let slidediv = document.getElementById("fullslide1");
  slidediv.append(imgtag);
let currentIndex = 0;

var slideImages = [
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674288302_web-3.gif","https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674295547_exclusivestamp01_hpweb-1.jpg","https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674289317_streax-streax-professional-combined-2596x836-3.jpeg","https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674156457_web-hp.gif","https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674289315_mcaffeine_moisturize-2596x836.jpeg","https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674209099_faces_yami-kajal-2596x836.jpg"]
slideshowFun(slideImages);

function slideshowFun(images){
  imgtag.setAttribute("src",images[currentIndex]);
  if(currentIndex==images.length-1){
    currentIndex = 0;
  }else{
    currentIndex++;
  }
}
window.addEventListener("load", function () {
    setInterval(slideshowFun,2000,slideImages);
  });