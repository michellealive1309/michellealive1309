$(function() {
    var controller = new ScrollMagic.Controller();

    var wipeAnimation = new TimelineMax()
            .fromTo("section.panel.achieved", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
            .fromTo("section.panel.about", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone});
    
    new ScrollMagic.Scene({
            triggerElement: "#Pincontainer",
            triggerHook: "onLeave",
            duration: "300%"
    })
    .setPin("#Pincontainer")
    .setTween(wipeAnimation)
    .addTo(controller);
});

$(function() {
    $(window).scroll(function(){
        $("#portipat").css("opacity", 1 - $(window).scrollTop() / 700)
    });
});

var stars = document.getElementById('stars')
var star = document.getElementsByClassName('star')


for (var j = 0; j < 30; j++) {
    var newStar = document.createElement("div")
    newStar.className = "star"
    newStar.style.top = randomDistance(30, -30) + 'px'
    newStar.style.left = randomDistance(150, 20) + 'px'
    stars.appendChild(newStar)
}


function randomDistance(max, min) {
    var distance = Math.floor(Math.random() * (max - min + 1) * 10 + min)
    return distance
}


for (var i = 0, len = star.length; i < len; i++) {
    if (i % 6 == 0) {
        star[i].style.animationDelay = '0s'
    } else {
        star[i].style.animationDelay = i * 0.8 + 's'
    }
}