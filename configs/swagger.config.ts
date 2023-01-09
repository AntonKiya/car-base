import swaggerJSDoc from "swagger-jsdoc";

const swaggerDoc = swaggerJSDoc({
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: '"car-base" api documentation',
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          value: "Bearer <JWT token here>",
        },
      },
    },
    servers: [
      {
        url: "http://localhost:5000/api/",
        description: "Local server",
      },
    ],
  },
  apis: ["./documentation/swagger-models/*.ts", "./routes/*/*.ts"],
});

export { swaggerDoc };
