// == Get All elements I Needed From DOM ==

const hero = document.querySelector(".hero");
const playBtn = document.querySelector(".play-btn");
const content = document.querySelector(".content");
const bgImg = document.querySelector(".bg-img");
const preview = document.querySelector(".preview");
const loader = document.querySelector(".loader");
const previewVideo = document.querySelector(".preview video");
const closeBtn = document.querySelector(".close-btn");

// ----------------------------------------------

// == Add Click Event To Play Button ==
playBtn.addEventListener("click" , () =>{
  // Add class Video Open 
  hero.classList.add("video-open")
  // show Loader and preview
  loader.style.display = "block"
  preview.style.display = "block"
  // Animate Background img darken
  setTimeout(() =>{
    bgImg.style.filter = "brightness(10%)"
  }, 500);

  // animate Loader fade in 
  setTimeout(() =>{
    loader.style.opacity = "1"

  } , 1000)

  // animate Preview fade in 
  setTimeout(() =>{
    preview.style.opacity = "1"
    loader.style.opacity = "0"
    previewVideo.play()
  } , 3000)
  
})

// Add click to close button 
closeBtn.addEventListener("click" , () =>{
  // Removw video open class
  hero.classList.remove("video-open")
  // Reset Animate Style

  // Filter Not Working and Stope The Over Following Code  
  // -------------=======================
  // bgImg.style.filter = "brightness(100%)"

// ================================

  loader.style.opacity = "0"
  preview.style.opacity = "0"
  previewVideo.pause()

setTimeout(() =>{
  // Hide Loader and preview
  loader.style.display = "none"
  preview.style.display = "none"

}, 10)

})

