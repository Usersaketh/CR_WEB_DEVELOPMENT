
// Music Player JavaScript - Enhanced Version
let btn = document.querySelectorAll('.song #play_btn');
let song = document.querySelectorAll('#music');

/*popup music player part*/
let p_m_player = document.querySelector('.popup_music_player');
let down_player = document.querySelector('#down_player');
let current_track_name = document.querySelector('#current_track_name');
let current_singer_name = document.querySelector('#current_singer_name');
let song_img = document.querySelector('.song_img');

/*controlls part*/
let play_pause_btn = document.querySelector('#play_pause_btn');
let slider = document.querySelector('#slider');
let forward_btn = document.querySelector('#forward_btn');
let backward_btn = document.querySelector('#backward_btn');

/*songs duration*/
let current_duration = document.querySelector('.controlls .progress_part #current_duration');
let total_duration = document.querySelector('.controlls .progress_part #total_duration');

/*small music player part*/
let s_m_player = document.querySelector('.small_music_player');
let playing_img = document.querySelector('.playing_img');
let wave_animation = document.querySelector('.wave_animation');
let up_player = document.querySelector('#up_player');
let song_name = document.querySelector('#song_name');
let artist_name = document.querySelector('#artist_name');

/*default values*/
let is_song_played = false;
let song_status = false;
let index_no = 0;
let update_timer = null; // Store the interval ID to prevent multiple intervals

// Initialize the player after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializePlayer();
});

function initializePlayer() {
  // Re-query elements after song list is generated
  btn = document.querySelectorAll('.song #play_btn');
  song = document.querySelectorAll('#music');
  
  // Add event listeners to dynamically created buttons
  addPlayButtonListeners();
  
  // Add keyboard controls
  addKeyboardControls();
}

// Add keyboard controls for better user experience
function addKeyboardControls() {
  document.addEventListener('keydown', function(event) {
    // Only activate when not typing in input fields
    if (event.target.tagName.toLowerCase() === 'input') return;
    
    switch(event.key) {
      case ' ': // Spacebar for play/pause
        event.preventDefault();
        play_pause_btn.click();
        break;
      case 'ArrowLeft': // Left arrow for previous
        event.preventDefault();
        backward_btn.click();
        break;
      case 'ArrowRight': // Right arrow for next
        event.preventDefault();
        forward_btn.click();
        break;
    }
  });
}


// Add event listeners to play buttons
function addPlayButtonListeners() {
  btn.forEach((btn, index) => {
    btn.addEventListener('click', function(){
      // Show small music player
      s_m_player.style.transform = 'translateY(0px)';
      
      // If different song is selected, reset status
      if (index != index_no) {
        song_status = false;
      }
      
      index_no = index;
      song[index].currentTime = 0;

      if (song_status == false) {
        play_song();
      } else {
        pause_song();	 
      }
    });
  });
}


/*pause song*/
function pause_song(){
  if (song[index_no]) {
    song[index_no].pause();
  }
  song_status = false;
  
  // Clear the update timer
  if (update_timer) {
    clearInterval(update_timer);
    update_timer = null;
  }
  
  wave_animation.style.opacity = '0';
  play_pause_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


/*This function will update every 1s*/
function update_second(){
  if (!song[index_no]) return;
  
  let position = 0;

  // Update slider position
  if(!isNaN(song[index_no].duration)){
    position = song[index_no].currentTime * (100 / song[index_no].duration);
    slider.value = position;
  }

  // Format duration
  let durationMinutes = Math.floor(song[index_no].duration / 60);
  let durationSeconds = Math.floor(song[index_no].duration - durationMinutes * 60);
  
  // Format current time
  let curr_minutes = Math.floor(song[index_no].currentTime / 60);
  let curr_seconds = Math.floor(song[index_no].currentTime - curr_minutes * 60);

  // Add zero padding for single digits
  if (curr_seconds < 10) { curr_seconds = "0" + curr_seconds; }
  if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }

  // Display the updated duration
  current_duration.textContent = curr_minutes + ":" + curr_seconds;
  total_duration.textContent = durationMinutes + ":" + durationSeconds;

  // Check if song ended
  if (song[index_no].ended) {
    // Auto play next song
    forward_btn.click();
  }
}
 

/*show popup music player */
up_player.addEventListener('click', function(){
   p_m_player.style.transform = 'translateX(-50%) translateY(0%)';
});


/* Hide popup music player */
down_player.addEventListener('click', function(){
   p_m_player.style.transform = 'translateX(-50%) translateY(110%)';
});


/*play pause btn inside the popup Music player*/
play_pause_btn.addEventListener('click', function(){
  if (song_status == false) {
    if (song[index_no]) {
      song[index_no].play();
      song_status = true;
      wave_animation.style.opacity = '1';
      this.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
      
      // Start update timer if not already running
      if (!update_timer) {
        update_timer = setInterval(update_second, 1000);
      }
    }
  } else {
    if (song[index_no]) {
      song[index_no].pause();
      song_status = false;
      wave_animation.style.opacity = '0';
      this.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
      
      // Clear update timer
      if (update_timer) {
        clearInterval(update_timer);
        update_timer = null;
      }
    }
  }
});


// Change slider position 
function change_duration(){
  if (song[index_no] && !isNaN(song[index_no].duration)) {
    let slider_position = song[index_no].duration * (slider.value / 100);
    song[index_no].currentTime = slider_position;
  }
}


/*forward btn (next)*/
forward_btn.addEventListener('click', function(){
  index_no = index_no + 1;
  if (index_no >= All_song.length) {
    index_no = 0;
  }

  song[index_no].currentTime = 0;
  play_song();
});


/*backward btn (previous)*/
backward_btn.addEventListener('click', function(){
  if (index_no == 0) {
    index_no = All_song.length - 1;
  } else {
    index_no = index_no - 1;
  }

  song[index_no].currentTime = 0;
  play_song();
});


/*play function*/
function play_song(){
  if (!song[index_no] || !All_song[index_no]) return;
  
  // Pause any currently playing song
  if (is_song_played == true) {
    let active_song = document.querySelector(".active_song");
    if (active_song) {
      active_song.pause();
      active_song.classList.remove("active_song");
    }
  } else {
    is_song_played = true;
  }
  
  // Play new song
  song[index_no].classList.add("active_song");
  song[index_no].play().catch(error => {
    console.log("Error playing audio:", error);
  });

  song_status = true;
  
  // Clear any existing timer and start new one
  if (update_timer) {
    clearInterval(update_timer);
  }
  update_timer = setInterval(update_second, 1000);
  
  wave_animation.style.opacity = '1';
  p_m_player.style.transform = 'translateX(-50%) translateY(0%)';

  // Update images and text
  song_img.innerHTML = `<img src="${All_song[index_no].img}" alt="Now playing: ${All_song[index_no].name}" />`;
  playing_img.innerHTML = `<img src="${All_song[index_no].img}" alt="Current song: ${All_song[index_no].name}" />`;

  song_name.innerHTML = All_song[index_no].name;
  artist_name.innerHTML = All_song[index_no].singer;

  current_track_name.innerHTML = All_song[index_no].name;
  current_singer_name.innerHTML = All_song[index_no].singer;
  play_pause_btn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}