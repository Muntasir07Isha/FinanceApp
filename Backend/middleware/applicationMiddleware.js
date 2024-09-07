import cors from 'cors';

const allowCors = cors({
    origin: 'http://localhost:5173',  // or '*' to allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
});

export default allowCors;
