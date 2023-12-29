const { Keyword } = require("../models/KeywordModel");
const { Match } = require("../models/MatchModel");
exports.getSearchResults = async (req, res, next) => {
  const keyword = req.query.keyword;
  var data = [];
  var keywordInDB = await Keyword.findOne({ keyword: keyword });
  if (!keywordInDB) {
    keywordInDB = await Keyword.create({ keyword: keyword });
    const results = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    data = await results.json();
    var matchingResults = data.filter((post) => {
      const titleMatch = post.title
        .toLowerCase()
        .includes(keyword.toLowerCase());
      const bodyMatch = post.body.toLowerCase().includes(keyword.toLowerCase());
      return titleMatch || bodyMatch;
    });

    const matches = matchingResults.map((match) => {
      return {
        keyword: keywordInDB._id,
        id: match.id,
        userId: match.userId,
        title: match.title,
        body: match.body,
      };
    });
    await Match.insertMany(matches);
  }
  else {
    const matches = await Match.find({ keyword: keywordInDB._id });
    matchingResults = matches.map((match) => {
      return {
        id: match.id,
        userId: match.userId,
        title: match.title,
        body: match.body,
      };
    });
  }

  res.status(200).json({
    message: "success",
    data: matchingResults,
  });
};