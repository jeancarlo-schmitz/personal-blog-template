import { initNavbar } from './components/navbar/navbar.js';
import Router from './assets/js/router.js';
import mainHandler from './assets/js/mainHandler.js';
import utils from "./utils/utils.js";

const main = {};
const router = new Router();

    await router.init();
if(!mainHandler.is404PageVisible()) {
    await router.createNavbarListener();

    await initNavbar();
}

main.changeRoute = function(){
    router.changeRoute();
}

window.main = main;

$(document).ready(function() {
    utils.applyBootstrapTooltip();
});