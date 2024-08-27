import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from "@/views/LoginView.vue";
import FavoritesView from "@/views/FavoritesView.vue";
import RecipesView from "@/views/RecipesView.vue";
import RecipeDetailView from "@/views/RecipeDetailView.vue";

const routes = [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/login', name: 'Login', component: LoginView },
    { path: '/favorites', name: 'Favorites', component: FavoritesView },
    { path: '/recipes', name: 'Recipes', component: RecipesView },
    { path: '/recipe/:id', name: 'RecipeDetail', component: RecipeDetailView, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
