
//OVERSKRIFTEN 
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // CSS STYLING 
    var css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid black}";
    document.body.appendChild(css);
};

// DIV TIL PERSONER

//1
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeInTop");
        }
    })
})

//2
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animated2")[0].classList.add("fadeInRight");
        }
    })
})

//3
const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animated3")[0].classList.add("fadeInLeft");
        }
    })
})


observer.observe(document.querySelector(".animated"));
observer2.observe(document.querySelector(".animated2"));
observer3.observe(document.querySelector(".animated3"));



//VIDEOEN

window.onscroll = function(){
    var interview = document.getElementById("myVideo");
    var produktion = document.getElementById("myVideo2");

    if (produktion.getBoundingClientRect().bottom < 250 || produktion.getBoundingClientRect().top > 250)
        produktion.pause();
        else
        produktion.play();

    if (interview.getBoundingClientRect().bottom < 250 || interview.getBoundingClientRect().top > 250)
        interview.pause();
        else
        interview.play();
}




// Snakker til video elementet 
    let clip = document.getElementById("drink1")
    let clip2 = document.getElementById("drink2")
    let clip3 = document.getElementById("drink3")

  
/* Tilføjer mouseover event på videoklippet 
og kalder derefter play() funktionen til at 
afspille videoen når musen er holdt henover */
clip.addEventListener("mouseover", function () {
    clip.play();
})
  
/* Tilføjer mouseout event på videoklippet 
og kalder pause() funktionen til at stoppe 
videoen når musen er væk fra */
clip.addEventListener("mouseout", function () {
    clip.pause();
})

//2
clip2.addEventListener("mouseover", function () {
    clip2.play();
})


clip2.addEventListener("mouseout", function () {
    clip2.pause();
})

//3
clip3.addEventListener("mouseover", function () {
    clip3.play();
})

clip3.addEventListener("mouseout", function () {
    clip3.pause();
})
