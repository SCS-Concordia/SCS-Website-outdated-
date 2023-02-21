const pathAdjust = (window.location.pathname.indexOf('sections') >= 0) ? './' : './sections/';

const mobileMenuInner = `
    
        <a class="mobile-menu-link" href="${pathAdjust}team.html">Team</a>
        <a class="mobile-menu-link" href="${pathAdjust}sponsors.html">Sponsors</a>
        <a class="mobile-menu-link" href="${pathAdjust}events.html">Events</a>
        <a class="mobile-menu-link" href="${pathAdjust}competitions.html">Competitions</a>
        <a id="mobile-contact-link" class="mobile-menu-link" href="">Contact</a>
    
`;

export default mobileMenuInner;