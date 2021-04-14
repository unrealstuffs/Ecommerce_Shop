import bcrypt from "bcryptjs";

const users = [
    {
        name: "Aboba",
        email: "aboba@aboba.com",
        password: bcrypt.hashSync("aboba", 10),
        isAdmin: true,
    },
    {
        name: "Denchik",
        email: "enchik@aboba.com",
        password: bcrypt.hashSync("aboba", 10),
    },
    {
        name: "Enotik",
        email: "enotik@aboba.com",
        password: bcrypt.hashSync("aboba", 10),
    },
];

export default users;
