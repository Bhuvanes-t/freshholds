// script.js
$(document).ready(function () {

    // 1. Sticky Navbar Effect
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // To ensure correct initial state on hard refresh
    if ($(window).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
    }

    // 2. Smooth Scrolling for Anchor Links
    $('a.nav-link, a.btn').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var offset = $(hash).offset().top - 70; // Adjust for sticky navbar height

            $('html, body').animate({
                scrollTop: offset
            }, 800, function () {
                // Optional: add hash to URL
                // window.location.hash = hash;
            });

            // Close mobile menu if open
            if ($('.navbar-collapse').hasClass('show')) {
                $('.navbar-toggler').click();
            }
        }
    });

    // 3. Scroll Reveal Animations (using jQuery for logic and CSS for transitions)
    function revealOnScroll() {
        var windowHeight = $(window).height();
        var windowScrollTop = $(window).scrollTop();
        var revealPoint = windowHeight - 100; // Trigger slightly before it's fully in view

        $('.fade-in-up, .slide-in-left, .slide-in-right').each(function () {
            var elementTop = $(this).offset().top;

            // Apply delay if specified in data attribute
            var delay = $(this).data('delay') ? $(this).data('delay') : 0;

            if (windowScrollTop > elementTop - revealPoint) {
                var el = $(this);
                setTimeout(function () {
                    el.addClass('visible');
                }, delay);
            }
        });
    }

    // Trigger on load
    revealOnScroll();

    // Trigger on scroll
    $(window).scroll(function () {
        revealOnScroll();
    });

    // 4. Contact Form Submission (Mock)
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        var btn = $(this).find('button[type="submit"]');
        var originalText = btn.text();

        btn.html('<i class="bx bx-loader-alt bx-spin"></i> Sending...');
        btn.prop('disabled', true);

        // Simulate AJAX request
        setTimeout(function () {
            btn.text(originalText);
            btn.prop('disabled', false);
            $('#contactForm')[0].reset();
            $('.form-success').removeClass('d-none').hide().fadeIn();

            setTimeout(function () {
                $('.form-success').fadeOut();
            }, 4000);
        }, 1500);
    });

    // 5. Update Footer Year
    $('#currentYear').text(new Date().getFullYear());

    // 6. Hero Badge Text Cycler
    var badgeTexts = ["100% Fresh", "100% Natural", "100% Hygienic", "100% Quality Product"];
    var badgeColors = ["#216a38", "#d35400", "#2980b9", "#8e44ad"]; // Green, Orange, Blue, Purple
    var badgeIndex = 0;

    // Set initial custom color
    $('#hero-badge-text').css('color', badgeColors[0]);

    setInterval(function () {
        badgeIndex = (badgeIndex + 1) % badgeTexts.length;
        var badgeEl = $('#hero-badge-text');

        // Smooth fast fade effect for 1sec interval
        badgeEl.fadeOut(200, function () {
            $(this).text(badgeTexts[badgeIndex])
                .css('color', badgeColors[badgeIndex])
                .fadeIn(200);
        });
    }, 2000);

    // 7. Image Lightbox Modal logic
    $('.clickable-image').on('click', function() {
        var src = $(this).attr('src');
        var alt = $(this).attr('alt');
        $('#full-screen-img').attr('src', src).attr('alt', alt);
    });
});
