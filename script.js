let currentPage = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
  pages[currentPage].classList.remove('active');
  currentPage++;
  if (currentPage < pages.length) {
    pages[currentPage].classList.add('active');
  }
}
function toggleMusic() {
  const music = document.getElementById('bg-music');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
function cutCake() {
  const knife = document.getElementById('knife');
  const cake = document.getElementById('cake-img');
  const cutBtn = document.getElementById('cut-btn');
  const lightenBtn = document.getElementById('lighten-btn');

  // Trigger knife animation
  knife.classList.add('animate');

  // Optionally fade the cake to look cut
  setTimeout(() => {
    cake.classList.add('cut');
    cutBtn.style.display = 'none';
    lightenBtn.style.display = 'inline-block';
  }, 2000); // Match the knife transition duration
}
