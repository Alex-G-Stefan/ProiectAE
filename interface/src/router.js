import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Carti from "./views/Carti.vue";
import PlaciVideo from "./views/PlaciVideo.vue";
import Monitoare from "./views/Monitoare.vue";
import Mouse from "./views/Mouse.vue";
import Scaune from "./views/Scaune.vue";
import CosCumparaturi from "./views/CosCumparaturi.vue";
import FormPageCarte from "./views/FormPageCarte.vue";
import FormPageMonitor from "./views/FormPageMonitor.vue";
import FormPageMouse from "./views/FormPageMouse.vue";
import FormPagePlacaVideo from "./views/FormPagePlacaVideo.vue";
import FormPageScaun from "./views/FormPageScaun.vue";
import DetaliiProdus from "./views/DetaliiProdus.vue";
import DetaliiProdusMonitor from "./views/DetaliiProdusMonitor.vue";
import DetaliiProdusPlacaVideo from "./views/DetaliiProdusPlacaVideo.vue";
import DetaliiProdusMouse from "./views/DetaliiProdusMouse.vue";
import DetaliiProdusScaun from "./views/DetaliiProdusScaun.vue";
import Facturi from "./views/Facturi.vue";
import FormPageCarteMod from "./views/FormPageCarteMod.vue";
import FormPageMonitorMod from "./views/FormPageMonitorMod.vue";
import FormPageMouseMod from "./views/FormPageMouseMod.vue";
import FormPagePlacaVideoMod from "./views/FormPagePlacaVideoMod.vue";
import FormPageScaunMod from "./views/FormPageScaunMod.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/carti",
      name: "carti",
      component: Carti
    },
    {
      path: "/placivideo",
      name: "placi video",
      component: PlaciVideo
    },
    {
      path: "/monitoare",
      name: "monitoare",
      component: Monitoare
    },
    {
      path: "/mouse",
      name: "mouse",
      component: Mouse
    },
    {
      path: "/scaune",
      name: "scaune",
      component: Scaune
    },
    {
      path: "/coscumparaturi",
      name: "coscumparaturi",
      component: CosCumparaturi
    },
    {
      path:"/formpagecarte",
      name:"/formpagecarte",
      component: FormPageCarte
    },
    {
      path:"/formpagemonitor",
      name:"/formpagemonitor",
      component: FormPageMonitor
    },{
      path:"/formpagemouse",
      name:"/formpagemouse",
      component: FormPageMouse
    },
    {
      path:"/formpageplacavideo",
      name:"/formpageplacavideo",
      component: FormPagePlacaVideo
    },
    {
      path:"/formpagescaun",
      name:"/formpagescaun",
      component: FormPageScaun
    },
    {
      path:"/detaliiprodus",
      name:"/detaliiprodus",
      component: DetaliiProdus
    },
    {
      path:"/detaliiprodusmonitor",
      name:"/detaliiprodusmonitor",
      component: DetaliiProdusMonitor
    },
    {
      path:"/detaliiprodusplacavideo",
      name:"/detaliiprodusplacavideo",
      component: DetaliiProdusPlacaVideo
    },
    {
      path:"/detaliiprodusmouse",
      name:"/detaliiprodusmouse",
      component: DetaliiProdusMouse
    },
    {
      path:"/detaliiprodusscaun",
      name:"/detaliiprodusscaun",
      component: DetaliiProdusScaun
    },
    {
      path:"/facturi",
      name:"/facturi",
      component: Facturi
    },
    {
      path:"/formpagecartemod",
      name:"/formpagecartemod",
      component: FormPageCarteMod
    },
    {
      path:"/formpagemonitormod",
      name:"/formpagemonitormod",
      component: FormPageMonitorMod
    },
    {
      path:"/formpagemousemod",
      name:"/formpagemousemod",
      component: FormPageMouseMod
    },
    {
      path:"/formpageplacavideomod",
      name:"/formpageplacavideomod",
      component: FormPagePlacaVideoMod
    },
    {
      path:"/formpagescaunmod",
      name:"/formpagescaunmod",
      component: FormPageScaunMod
    },
    {
      path:"/login",
      name:"/login",
      component: Login
    },
    {
      path:"/register",
      name:"/register",
      component: Register
    }
  ]
});
