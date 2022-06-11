module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://desolate-plains-55419.herokuapp.com/"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
