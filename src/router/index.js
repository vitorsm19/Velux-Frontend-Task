import {
    createRouter,
    createWebHistory
} from "vue-router";

import HomeView from "../views/HomeView.vue";
import AppControlView from "../views/AppControlView.vue";
import SrwOverviewView from "../views/SrwOverviewView.vue";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/app-control",
            name: "App Control",
            component: AppControlView,
        },
        {
            path: "/srw-overview",
            name: "SRW Overview",
            component: SrwOverviewView,
        },
    ],
});

export default router;