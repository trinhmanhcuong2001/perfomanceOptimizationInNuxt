const data = [
    {
        id: 1,
        title: "This is title of post 1",
    },
    {
        id: 2,
        title: "This is title of post 2",
    },
    {
        id: 3,
        title: "This is title of post 3",
    },
    {
        id: 4,
        title: "This is title of post 4",
    },
];
export default defineEventHandler((event) => {
    const method = event.node.req.method;

    if (method === "POST") {
        data.push({ id: 5, title: "This is title of post 5" });

        return;
    }

    return data;
});
