let willSmithImages = [
    "https://m.media-amazon.com/images/M/MV5BMGI3OTI0NjctMjM2ZC00MjZiLWIxMjctODczN2M4MTFjZmY1XkEyXkFqcGdeQXJoYW5uYWg@._V1_.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2019-02-10-at-10-37-59-pm-1549856343.png?crop=0.417xw:1.00xh;0.389xw,0&resize=1200:*",
    "https://hips.hearstapps.com/hmg-prod/images/will-smith-aladdin-1557876748.png"
];

const imgs = document.getElementsByTagName("img");
for (let i=0; i<imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * willSmithImages.length)
    imgs[i].src = willSmithImages[randomImg];
}