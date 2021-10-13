const fastify = require("fastify")({ logger: true });
const { studentRoutes } = require("./routes/user/user-route");
const PORT = 3000;
const { dbService } = require("./helper/mongo.db");

module.exports = fastify;

(async function () {
  try {
    // handleExit();
    // handleUncaughtErrors();

    // // Connect to DB
    await dbService();

    // // Middlewares
    // fastify.use(cors());

    // Plugins
    // fastify.register(require('fastify-boom'));
    // fastify.register(infoRoutesMiddleware);
    //fastify.register(v1RoutesMiddleware, { prefix: '/v1' });
    fastify.register(studentRoutes);

    // Server
    await fastify.listen(PORT, "0.0.0.0");
    // await fastify.listen(config.get("NODE_PORT", 6661), "0.0.0.0");
    // fastify.log.info(
    //     '%s listening in %s environment',
    //     config.name,
    //     process.env.NODE_ENV
    // );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
