const fastify = require("fastify")({ logger: true });
const { userRoute } = require("./routes/user/user-route");
const { filmRoute } = require("./routes/film/film-route");
const { dbService } = require("./helper/mongo.db");
require("dotenv").config();

const PORT = 3000;

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
    fastify.register(userRoute);
    fastify.register(filmRoute);

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
