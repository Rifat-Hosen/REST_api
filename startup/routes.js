const searchRouter = require("./../routes/searchRouter");

module.exports = (app) => {
  app.use("/search", searchRouter);
  
  app.all("*", (req, res, next) => {
    try {
      
      if (someCondition) {
        throw new Error(`Can't find ${req.originalUrl} on this server!`);
      }
      next();
    } catch (error) {
      console.error(`Can't find ${req.originalUrl} on this server!`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  
};