import bcrypt from 'bcryptjs';

const users = [
    {
        name: "Vladimir Admin",
        email: "vladimir.pejic@gmail.com",
        password: bcrypt.hashSync('Vladimir123', 10),
        isAdmin: true
    },
    {
        name: "Ticana Beba",
        email: "tijana.trivic1993@gmail.com",
        password: bcrypt.hashSync('Tijana123', 10)
    },
    {
        name: "Dusan Trivic",
        email: "trivicdusan94@gmail.com",
        password: bcrypt.hashSync('Dusan123', 10)
    }
];

export default users;