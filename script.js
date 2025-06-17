

let currentIndex = 0;

function changeSlide(direction) {
  currentIndex += direction;

  // 画像のインデックスをループさせる
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  document.getElementById("slide-image").src = images[currentIndex];
}


