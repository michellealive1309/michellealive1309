document.addEventListener('mousemove', parallax);
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX * speed)/100;
        const y = (window.innerHeight - e.pageY * speed)/100;

        layer.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
    });
}
$(document).ready(function(){
    var sections = ['profile', 'education', 'skills', 'workexp'];
    $('.port-btn').on('click', function(e){
        e.stopImmediatePropagation();
        var button_value = $(this).val()
        for (let section of sections) {
            if (button_value === 'portipat') {
                $('.port-' + section).animate({
                    "max-width": '300px',
                    "width": '100%'
                }).css({
                    "display": "flex"
                });
                $('.' + section + '-content').animate({
                    "width": '0%'
                }).css({
                    "display": 'none'
                });
                $('.' + section + '-head').animate({
                    "max-width": '300px',
                    "width": '100%',
                }).css({
                    "writing-mode": 'horizontal-tb',
                    "-ms-writing-mode": 'horizontal-tb',
                    
                });
                $('.' + section + '-head button').css({
                    "word-break": 'unset',
                    "width": '100%'
                }).prop('disabled', false);
                $('.portipat-head button .port-all-menu').css({
                    "display": 'none'
                });
            }
            else if (section === button_value) {
                $('.port-' + section).animate({
                    "max-width": '1200px',
                    "width": '100%'
                });
                $('.' + section + '-content').animate({
                    "max-width": '1100px',
                    "width": '100%'
                }).css({
                    "display": 'inline-block',
                });
                $('.' + section + '-head').animate({
                    "max-width": '100px',
                    "width": '100%'
                }).css({
                    "writing-mode": 'tb-rl',
                    "-ms-writing-mode": 'tb-rl',
                });
                $('.' + section + '-head button').css({
                    "word-break": 'break-word',
                    "width": '30px'
                }).prop('disabled', true);
                $('.portipat-head button .port-all-menu').css({
                    "display": 'block'
                });
            }
            else {
                $('.port-' + section).animate({
                    "max-width": '0px',
                    "width": '0%'
                }, function(){
                    $('.port-' + section).css({
                        "display": "none"
                    });
                });
            }
        }
    });
    $('.port-btn-contact button').on('click', (e)=>{
        e.stopImmediatePropagation()
        if (this.value === 'active') {
            $('.port-btn-contact').animate({
                "bottom": '0px'
            });
            $('.contact-content').animate({
                "max-height": '0px',
                "height": '0%',
                "width": '100%'
            }, () => {
                $(this).css({
                    "display": 'none'
                });
            })
            $('.port-special-thank').animate({
                "bottom": '0px'
            });
            this.value = 'deactive'
        }
        else {
            $('.port-btn-contact').animate({
                "bottom": '50px'
            });
            $('.contact-content').animate({
                "max-height": '50px',
                "height": '100%',
                "width": '100%'
            }).css({
                "display": 'block'
            });
            $('.port-special-thank').animate({
                "bottom": '50px'
            });
            this.value = 'active'
        }
    });
});