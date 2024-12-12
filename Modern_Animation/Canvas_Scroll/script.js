const canvas = document.getElementById("frame");
const ctx = canvas.getContext("2d");

const frames = {
  currentFrame: 0,
  totalFrames: 710,
};

let imagesLoaded = 0;
const images = [];

function preLoader() {
  for (let i = 1; i <= frames.totalFrames; i++) {
    const imgUrl = `../anime/frame_${i.toString().padStart(4, "0")}.jpeg`;
    const img = new Image();

    img.src = imgUrl;

    img.onload = () => {
      imagesLoaded++;
      images.push(img);
      if (imagesLoaded === frames.totalFrames) {
        loadImage(frames.currentFrame);
        startAnimation();
      }
    };
  }
}

function loadImage(index) {
  if (index <= frames.totalFrames && index >= 0) {
    const img = images[index];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //  Aspect Ratio
    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;
    const scale = Math.max(scaleX, scaleY);

    const newWidth = img.width * scale;
    const newHeight = img.height * scale;

    const offsetX = (canvas.width - newWidth) / 2;
    const offsetY = (canvas.height - newHeight) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

    frames.currentFrame = index;

    //   const ctx = canvas.getContext("2d");
    //   ctx.drawImage(img, 0, 0);
  }
}

function startAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".parent",
      start: "top top",
      scrub: 4,
      // markers: true,
    },
  });

  tl.to(frames, {
    currentFrame: frames.totalFrames,
    onUpdate: () => {
      loadImage(Math.floor(frames.currentFrame));
      console.log(frames.currentFrame);
    },
  });
}

preLoader();
