const imageData = [
  { title: "Happy Birthday", imageUrl: 'birthday.jpg' },
  { title: "Crazy Clown", imageUrl: "images/clown.jpg" },
  { title: "It's Raining", imageUrl: "images/rain.jpg" },
  { title: "Quiet Time", imageUrl: "images/read.jpg" },
  { title: "Working Hard", imageUrl: "images/shovel.jpg" },
  { title: "Work from Home", imageUrl: "images/work.jpg" }
];

const populateTitles = () => {
  const gallery = document.getElementById('imageGallery');
  imageData.forEach(item => {
      const titleElement = document.createElement('div');
      titleElement.classList.add('title');
      titleElement.textContent = item.title;
      titleElement.addEventListener('click', () => openPopup(item));
      gallery.appendChild(titleElement);
  });
};

const openPopup = (item) => {
  console.log("Opening popup for: " + item.title);

  const popup = document.getElementById('popupBox');
  const popupTitle = document.getElementById('popupTitle');
  const popupImage = document.getElementById('popupImage');

  popupTitle.textContent = item.title;
  popupImage.src = item.imageUrl;
  popup.classList.remove('hidden'); 
};

const closePopup = () => {
  const popup = document.getElementById('popupBox');
  popup.classList.add('hidden');
};

document.getElementById('close').addEventListener('click', closePopup);

document.addEventListener('DOMContentLoaded', () => {
  populateTitles();
});
