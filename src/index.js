const fastify = require("fastify")({ logger: true });
const { userRoute } = require("./routes/user/user-route");
const { filmRoute } = require("./routes/film/film-route");
cors = require("cors");
const dummyData = require("./postgres/dummy-data");
require("dotenv").config();

const PORT = 3000;

module.exports = fastify;

(async function () {
  try {
    fastify.use(cors());
    fastify.register(userRoute);
    fastify.register(filmRoute);

    await dummyData();

    await fastify.listen(PORT, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
