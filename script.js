const card = document.getElementById('card');
const messageDiv = document.getElementById('message');
const audio = document.getElementById('bg-music');

const message = `Dear Mom, 

Thank you for every hug, every word of encouragement, and every act of love. You are my inspiration, my hero, and my best friend.

Happy Mother’s Day! 💖`;

let isFlipped = false;
let i = 0;

card.addEventListener('click', () => {
  if (isFlipped) return;
  card.style.transform = 'rotateY(180deg)';
  isFlipped = true;
  typeMessage();
  audio.play();
});

function typeMessage() {
  if (i < message.length) {
    messageDiv.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeMessage, 50);
  }
}
