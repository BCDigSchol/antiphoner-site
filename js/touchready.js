$(document).ready(function () {
    // Block external links on touch tables.

    if (display_is_touchtable()) {
        block_external_links();
    }

    function block_external_links() {
        $('a').each(function () {
                if (link_is_external(this)) {
                    block_link($(this));
                }
            }
        );
    }

    function block_link($link) {
        $link.click(function () {
            return false;
        });
        $link.addClass('unclickable');
    }

    function link_is_external(link_element) {
        return (link_element.host !== window.location.host);
    }

    function display_is_touchtable() {
        var isTouchDevice = 'ontouchstart' in document.documentElement;
        return $(window).width() > 2200;
    }

});