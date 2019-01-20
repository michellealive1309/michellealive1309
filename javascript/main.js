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