const fastify = require("fastify")({ logger: true });

const PORT = 3000;

module.exports = fastify;

(async function () {
  try {
    // handleExit();
    // handleUncaughtErrors();

    // // Connect to DB
    // if (process.env.NODE_ENV !== 'test') {
    //     await dbService();

    //     // queue listener
    //     // initiateRabbitMQ();
    // }

    // // Middlewares
    // fastify.use(cors());

    // // Plugins
    // fastify.register(require('fastify-boom'));
    // fastify.register(infoRoutesMiddleware);
    // fastify.register(v1RoutesMiddleware, { prefix: '/v1' });

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
