//toggle icon navbar
let menuIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

//scroll section

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a'); 




window.onscroll = () => {
   sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')
   
    if(top >= offset && top < offset + height){
      //active navbar links
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
  //sticky header
  let header = document.querySelector('header')

  header.classList.toggle('sticky',window.scrollY > 100);

  //remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

}





var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

document.querySelector('.btn').addEventListener('click', (evt) => {
    evt.target.classList.add('loading')
  
    setTimeout(() => {
      evt.target.classList.remove('loading')
    }, 3000);
  })



  var btnContainer = document.getElementById("navbar");

  // Get all buttons with class="btn" inside the container
  var btns = btnContainer.getElementsByClassName("btn");
  
  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }


  /*certification and project*/
  document.addEventListener("DOMContentLoaded", function() { 
    const carousel = document.querySelector(".carousel"); 
    const arrowBtns = document.querySelectorAll(".wrapper i"); 
    const wrapper = document.querySelector(".wrapper"); 
  
    const firstCard = carousel.querySelector(".card"); 
    const firstCardWidth = firstCard.offsetWidth; 
  
    let isDragging = false, 
      startX, 
      startScrollLeft, 
      timeoutId; 
  
    const dragStart = (e) => { 
      isDragging = true; 
      carousel.classList.add("dragging"); 
      startX = e.pageX; 
      startScrollLeft = carousel.scrollLeft; 
    }; 
  
    const dragging = (e) => { 
      if (!isDragging) return; 
    
      // Calculate the new scroll position 
      const newScrollLeft = startScrollLeft - (e.pageX - startX); 
    
      // Check if the new scroll position exceeds 
      // the carousel boundaries 
      if (newScrollLeft <= 0 || newScrollLeft >= 
        carousel.scrollWidth - carousel.offsetWidth) { 
        
        // If so, prevent further dragging 
        isDragging = false; 
        return; 
      } 
    
      // Otherwise, update the scroll position of the carousel 
      carousel.scrollLeft = newScrollLeft; 
    }; 
  
    const dragStop = () => { 
      isDragging = false; 
      carousel.classList.remove("dragging"); 
    }; 
  
    const autoPlay = () => { 
    
      // Return if window is smaller than 800 
      if (window.innerWidth < 800) return; 
      
      // Calculate the total width of all cards 
      const totalCardWidth = carousel.scrollWidth; 
      
      // Calculate the maximum scroll position 
      const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
      
      // If the carousel is at the end, stop autoplay 
      if (carousel.scrollLeft >= maxScrollLeft) return; 
      
      // Autoplay the carousel after every 2500ms 
      timeoutId = setTimeout(() => 
        carousel.scrollLeft += firstCardWidth, 2500); 
    }; 
  
    carousel.addEventListener("mousedown", dragStart); 
    carousel.addEventListener("mousemove", dragging); 
    document.addEventListener("mouseup", dragStop); 
    wrapper.addEventListener("mouseenter", () => 
      clearTimeout(timeoutId)); 
    wrapper.addEventListener("mouseleave", autoPlay); 
  
    // Add event listeners for the arrow buttons to 
    // scroll the carousel left and right 
    arrowBtns.forEach(btn => { 
      btn.addEventListener("click", () => { 
        carousel.scrollLeft += btn.id === "left" ? 
          -firstCardWidth : firstCardWidth; 
      }); 
    }); 
  }); 
  



  