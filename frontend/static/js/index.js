import AWS from './views/aws/AWS.js';
import CICD from './views/cicd/CICD.js';
import Frontend from './views/frontend/Frontend.js';
import Home from './views/home/Home.js';

let match;
let view;
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};
const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/frontend", view: Frontend},
        { path: "/cicd", view: CICD},
        { path: "/aws", view: AWS},
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    view = new match.route.view();
    

    const app = document.querySelector('#app');
    app.innerHTML = await view.getHtml();
    const title = document.title.toLocaleLowerCase();
    app.className = "";
    app.classList.add(`section-${title}`);

    if (match.route.path === '/') {
        view.init();
        view.resizeWindow();
        view.setImage();
    }
};

window.addEventListener('popstate', router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});

window.addEventListener('mousemove', (e) => {
    if ("ontouchstart" in document.documentElement) return;
    if (match.route.path !== '/') return;
    if (e.target === view.canvas){
        view.isPlaying = true;
        view.mouseX = e.layerX;
        view.mouseY = e.layerY;
    } else {
        if (view.isPlaying) {
            view.isPlaying = false;
            view.pixels.forEach(pixel => {
                pixel.clearSpeed();
            });
        } else {
            return;
        }
    }

});

window.addEventListener('resize', () => {
    if (match.route.path !== '/') return;

    // resize 했을 때 성능 이슈 때문에 resizeWindow() method 호출하는 대신 refresh
    location.reload();
    
});