const photos = [
 "https://picsum.photos/id/1015/800/600",
 "https://picsum.photos/id/1016/800/600",
 "https://picsum.photos/id/1024/800/600",
 "https://picsum.photos/id/1036/800/600",
 "https://picsum.photos/id/1043/800/600",
 "https://picsum.photos/id/1050/800/600"
];

const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.getElementById("close");

photos.forEach(imgSrc => {
  const img = document.createElement("img");
  img.src = imgSrc;

  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = imgSrc;
  });

  gallery.appendChild(img);
});

closeBtn.onclick = () => {
  popup.style.display = "none";
};
