import AWS from './views/aws/AWS.js';
import CICD from './views/cicd/CICD.js';
import Frontend from './views/frontend/Frontend.js';
import Home from './views/home/Home.js';

let match;
let view;
let resizeTimer = null;
let scrollTimer = null;
const routes = [
    { path: "/", view: Home },
    { path: "/frontend", view: Frontend},
    { path: "/cicd", view: CICD},
    { path: "/aws", view: AWS},
];

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

/**
 * path를 보고 해당하는 페이지로 routing
 * 존재하지 않는 path일 때는 home으로 routing
 */
const router = async () => {
    window.scrollTo(0, 0);
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
    app.innerHTML = `
        <div class="loading-container" 
            style="animation: blinking 0.7s linear alternate infinite; width:100%; text-align:center; position:fixed; top:35%; font-size:1rem">
            Loading ...
        </div>
        `;
    app.innerHTML = await view.getHtml(app.innerHTML);
    const title = document.title.toLocaleLowerCase();
    app.className = "";
    app.classList.add(`section-${title}`);

    if (match.route.path === '/') {
        view.init();
        view.resizeWindow();
        view.setImage();
    } else if (match.route.path === '/cicd') {
        view.init();
        view.setLayout();
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
    view.setMouseLocation(e.pageX, e.pageY);
});

/**
 * 성능이슈 때문에 윈도우 창 크기를 조정하는 중에는 resizing을 하지 않는다.
 * 조정이 끝나면 resize
 */
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (match.route.path === '/') {
            view.resizeWindow();
            view.drawImage();
        } else if (match.route.path === '/cicd') {
            view.setLayout(window.pageYOffset);
        }
    }, 500);
    

    
});

window.addEventListener('scroll', () => {
    if (match.route.path === '/cicd') {
        view.scrollLoop(window.pageYOffset);
    }
});