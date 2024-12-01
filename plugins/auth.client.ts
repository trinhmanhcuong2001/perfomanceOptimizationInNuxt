interface User {
    id: number;
    username: string;
    accessToken: string;
    password: string;
}
export default defineNuxtPlugin(() => {
    const user = useState<User | null>("user", () => null);

    const login = async (credentials: {
        username: string;
        password: string;
    }) => {
        try {
            const data = await $fetch<any>("https://dummyjson.com/auth/login", {
                method: "POST",
                body: credentials,
            });
            navigateTo("/");
            user.value = data;
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const logout = () => {
        user.value = null;
        navigateTo("/");
    };

    const getUser = async () => {
        if (user.value?.accessToken) {
            const token = user.value?.accessToken;
            if (token) {
                try {
                    const data = await $fetch<any>(
                        "https://dummyjson.com/auth/me",
                        {
                            headers: { Authorization: `Bearer ${token}` },
                        }
                    );
                    user.value = data;
                } catch {
                    logout();
                }
            }
        }
    };

    return {
        provide: {
            user,
            login,
            logout,
            getUser,
        },
    };
});
