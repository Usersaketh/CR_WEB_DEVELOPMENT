//song list
let All_song = [
  {
    name: "Make Me Move",
    path: "music/1.mp3",
    img: "images/1.jpg",
    singer: "Native Army [NCS]"
  },
  {
    name: "Beauz & Jvna - Crazy",
    path: "music/2.mp3",
    img: "images/2.jpg",
    singer: "Native Army"
  },
  {
    name: "Skydive - Loxbeats",
    path: "music/3.mp3",
    img: "images/3.jpg",
    singer: "Audio Library"
  },
  {
    name: "Shahed - Indian Fusion",
    path: "music/4.mp3",
    img: "images/4.jpg",
    singer: "imshahed"
  },
  {
    name: "Syn Cole - Feel Good",
    path: "music/5.mp3",
    img: "images/5.jpg",
    singer: "Native Army"
  },
  {
    name: "Yusuf Alev - Yoros",
    path: "music/6.mp3",
    img: "images/1.jpg",
    singer: "Magic Free Release"
  },
  {
    name: "Lost Sky - Where We Started (feat. Jex)",
    path: "music/7.mp3",
    img: "images/2.jpg",
    singer: "NCS Release"
  },
  {
    name: "DEAF KEV - Invincible",
    path: "music/8.mp3",
    img: "images/3.jpg",
    singer: "NCS Release"
  },
  {
    name: "Jim Yosef - Arrow",
    path: "music/9.mp3",
    img: "images/4.jpg",
    singer: "NCS Release"
  },
  {
    name: "Tobu - Hope",
    path: "music/10.mp3",
    img: "images/5.jpg",
    singer: "NCS Release"
  },
  // Repeat the above songs with different names and singers (your favorites)
  {
    name: "Alan Walker - Faded",
    path: "music/6.mp3",
    img: "images/1.jpg",
    singer: "Alan Walker"
  },
  {
    name: "Imagine Dragons - Believer",
    path: "music/9.mp3",
    img: "images/2.jpg",
    singer: "Imagine Dragons"
  },
  {
    name: "Marshmello - Alone",
    path: "music/3.mp3",
    img: "images/3.jpg",
    singer: "Marshmello"
  },
  {
    name: "Linkin Park - In the End",
    path: "music/7.mp3",
    img: "images/4.jpg",
    singer: "Linkin Park"
  },
  {
    name: "Ed Sheeran - Shape of You",
    path: "music/5.mp3",
    img: "images/5.jpg",
    singer: "Ed Sheeran"
  },
  {
    name: "Coldplay - Viva La Vida",
    path: "music/6.mp3",
    img: "images/1.jpg",
    singer: "Coldplay"
  },
  {
    name: "Queen - Bohemian Rhapsody",
    path: "music/7.mp3",
    img: "images/2.jpg",
    singer: "Queen"
  },
  {
    name: "The Chainsmokers - Closer",
    path: "music/8.mp3",
    img: "images/3.jpg",
    singer: "The Chainsmokers"
  },
  {
    name: "Billie Eilish - Bad Guy",
    path: "music/9.mp3",
    img: "images/4.jpg",
    singer: "Billie Eilish"
  },
  {
    name: "Michael Jackson - Thriller",
    path: "music/2.mp3",
    img: "images/5.jpg",
    singer: "Michael Jackson"
  },
  // Repeat the images and songs for more entries if needed
];


/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/