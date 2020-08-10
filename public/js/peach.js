$(document).ready(function () {
    $('.dropdown.link').dropdown({
        action: 'hide'
    })

    // Set anchor.
    var headers = {};
    var skipped_first = false;
    $('.markdown').find('h1, h2, h3, h4, h5, h6').each(function () {
        if (!skipped_first) {
            skipped_first = true;
            return
        }

        var node = $(this);
        var val = encodeURIComponent(node.text().toLowerCase().replace(/\s+/g, "-"));
        var name = val;
        if (headers[val] > 0) {
            name = val + '-' + headers[val];
        }
        if (headers[val] == undefined) {
            headers[val] = 1;
        } else {
            headers[val] += 1;
        }
        node = node.wrap('<div id="' + name + '" class="anchor-wrap" ></div>');
        node.append('<a class="anchor" href="#' + name + '"><span class="octicon octicon-link"></span></a>');
    });
})

$(document).ready(function () {
    $(window).on('load', function(){
        let hash = location.hash;
        if (hash !== '') {
            hash = hash.replace("#", "");
            $('html, body').animate({ scrollTop: $("[id='" + hash + "']").offset().top - 10}, 0);
        }
    });
});