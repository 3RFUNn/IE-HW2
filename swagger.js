import swaggerAutogen from 'swagger-autogen';

const outputFile = "./swagger_output.json";

const endpointsFiles = [
    "./routes/users.js",
    "./routes/auth.js",
    "./routes/courses.js",
];

swaggerAutogen()(outputFile, endpointsFiles);
