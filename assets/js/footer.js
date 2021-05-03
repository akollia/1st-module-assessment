$(document).ready(function() {
    var footerLinks = [{
        name: 'About us',
        source: 'aboutus.html'
    }]

    function linkCreationTemplate(link) {
        return "<li><a href='" + link.source + "'>" + link.name + "</a></li>"
    }
    var footerContainer = $('.footer-nav .nav-ul')
    footerLinks.forEach(function(footerLink) {
        footerContainer.append(linkCreationTemplate(footerLink));
    });
});