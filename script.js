// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Scroll-triggered section animations
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach(section => {
  observer.observe(section);
});

//Hero section
const texts = [
  { id: "type-hello", text: "Hello, I'm", speed: 80 },
  { id: "type-name", text: "Apurba Goswami", speed: 100 },
  { id: "type-subtitle", text: "A Passionate Web Developer || Frontend Developer", speed: 50 }
];

function typeWriter(id, text, speed, callback) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById(id).innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      setTimeout(callback, 300);
    }
  }
  typing();
}

function startTyping() {
  let index = 0;
  function typeNext() {
    if (index < texts.length) {
      const { id, text, speed } = texts[index];
      typeWriter(id, text, speed, () => {
        index++;
        typeNext();
      });
    }
  }
  typeNext();
}

document.addEventListener('DOMContentLoaded', startTyping);  // Trigger typing when DOM is loaded






//footer text typing 
const line1 = "© 2025 APURBA GOSWAMI. ALL RIGHTS RESERVED.";
  const line2 = "Made with ❤️ by Apu";

  const line1Target = document.getElementById("typing-line-1");
  const line2Target = document.getElementById("typing-line-2");

  let i = 0;
  let j = 0;

  function typeLine1() {
    if (i < line1.length) {
      line1Target.innerHTML += line1.charAt(i);
      i++;
      setTimeout(typeLine1, 80);
    } else {
      setTimeout(typeLine2, 500);
    }
  }

  function typeLine2() {
    if (j < line2.length) {
      line2Target.innerHTML += line2.charAt(j);
      j++;
      setTimeout(typeLine2, 80);
    } else {
      setTimeout(resetTyping, 3000);
    }
  }

  function resetTyping() {
    line1Target.innerHTML = "";
    line2Target.innerHTML = "";
    i = 0;
    j = 0;
    setTimeout(typeLine1, 500);
  }

  typeLine1();

//3rd and 4th sem text animation 
document.addEventListener('DOMContentLoaded', () => {
  const text = "Final sheet coming soon";
  const target = document.getElementById("comingSoonText");
  let index = 0;

  function typeText() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 100); // Typing speed
    } else {
      target.style.borderRight = "none"; // Remove cursor after typing is done
      setTimeout(() => {
        target.textContent = ''; // Clear the text
        index = 0; // Reset the index for infinite loop
        target.style.borderRight = "2px solid #ff0000"; // Add the cursor back
        typeText(); // Start typing again
      }, 1000); // Wait for 1 second before restarting
    }
  }

  // Start typing animation after a slight delay
  setTimeout(typeText, 500);
});

