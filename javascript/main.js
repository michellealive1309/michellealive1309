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

var controller = new ScrollMagic.Controller();

var tween = TweenMax.staggerFromTo(".stagger", 2, {left: 700}, {left: 0, ease: Back.easeOut}, 0.15);

var scene = new ScrollMagic.Scene({triggerElement: "#triggerhome1", duration: 300})
                                .setTween(tween)
                                .addTo(controller);