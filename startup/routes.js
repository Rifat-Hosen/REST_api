const searchRouter = require("./../routes/searchRouter");

module.exports = (app) => {
  app.use("/api/search", searchRouter);
  
  app.all("*", (req, res, next) => {
    next(new Error(`Can't find ${req.originalUrl} on this server!`));
  });
};