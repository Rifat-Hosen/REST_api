const searchRouter = require("./../routes/searchRouter");

module.exports = (app) => {
  app.use("/search", searchRouter);

  //exception handling for invalid url
  
  app.all("*", (req, res, next) => {
    try {
      
      if (someCondition) {
        throw new Error(`Can't find ${req.originalUrl} on this server!`);
      }
      next();
    } catch (error) {
      console.error(`Can't find ${req.originalUrl} on this server!`);
      res.status(400).json({ error: 'The request URL is invalid' });
    }
  });

  
};