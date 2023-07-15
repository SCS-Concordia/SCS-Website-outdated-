// Are we on the home page or in a site section
const pathAdjust1 =
  window.location.pathname.indexOf("sections") >= 0 ? "../" : "./";
const pathAdjust2 =
  window.location.pathname.indexOf("sections") >= 0 ? "./" : "./sections/";

const navbar = `
        <a id="scs-logo" href="${pathAdjust1}index.html">
        <img src="${pathAdjust1}assets/scslogo.svg" />
        </a>
        <div id="site-links">
            <div class="site-link"><a href="${pathAdjust2}team.html">Team</a></div>
            <div>|</div>
            <div class="site-link"><a href="${pathAdjust2}sponsors.html">Sponsors</a></div>
            <div>|</div>
            <div class="site-link"><a href="${pathAdjust2}events.html">Events</a></div>
            <div>|</div>
            <div class="site-link"><a href="${pathAdjust2}competitions.html">Competitions</a></div>
            <div>|</div>
            <div><a class="site-link" href="">Contact</a></div>
            <div>|</div>
            <a id="instagram-link" href="https://www.instagram.com/scs.concordia/" target="_blank">
            <img id="instagram" src=${pathAdjust1}assets/instagram.svg>
            </a>
            <div>|</div>
            <a id="discord-link" href="https://discord.gg/nuv4UC6n" target="_blank">
            <img id="discord" src=${pathAdjust1}assets/discord-icon.svg>
            </a>
            
            <img id="hamburger" src="${pathAdjust1}assets/hamburger.png" />
            
        </div>

        
        
`;

export default navbar;
