export default defineNuxtRouteMiddleware(() => {
    const user = useNuxtApp().$user;

    if (!user) {
        return navigateTo("/login");
    }
});
