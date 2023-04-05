

let text = `Hello! I'm Natalia Dvinskikh`;
let i=0;
let speed =70;

function textType() {
  if(i<text.length) {
    document.querySelector('.par').textContent += text.charAt(i);
    i++;
    setTimeout(textType,speed);
  }
}
textType();

gsap.from('.par_description',{delay:2.5, duration:1.2, opacity:0})
gsap.from('.btn',{delay:3.5, duration:1.2, opacity:0})


// !!!! код взят отсюда
// https://codepen.io/VincentGarreau/pen/bGxvQd

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100, //кол-во
      "density": {
        "enable": true,
        "value_area": 1800 //скученность
      }
    },
    "color": {
      "value": "#14279B"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#14279B"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 30,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#14279B",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


//РАЗМЕЩЕНИЕ ПОРТФОЛИО

const btn = document.querySelector('.btn');
const screens = document.querySelectorAll('.screen')

btn.addEventListener('click',event =>{
  event.preventDefault();
screens[0].classList.add('up');
})


const items = document.querySelectorAll ('.item');

items.forEach(item => {
  item.addEventListener('mouseover', () => {
    removeFocus();
    item.classList.add('selected');

  })
    // removeFocus = () => {
    //   items.forEach(item => {
    //     item.classList.remove ('selected');
    //   })
    // }

    function removeFocus() {
      items.forEach(item => {
        item.classList.remove ('selected');
      })
    }


})



