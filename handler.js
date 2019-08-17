"use strict";
const querystring = require("querystring");
const axios = require("axios");

const StackOverflowURI = (title, sort = "votes", order = "desc") => {
  const baseURL = "https://api.stackexchange.com/2.2/search/advanced?";
  const query = querystring.stringify({
    order,
    sort,
    q: title,
    site: "stackoverflow",
    filter: "!-NA3i5zsvRkKYaEQLQcSR3s.llhvkX.IY"
  });

  const searchURL = baseURL + query;

  return searchURL;
};

module.exports.overflow = async event => {
  let text = querystring.parse(event.body).text;
  let { data } = await axios.get(StackOverflowURI(text));
  let res = data.items.filter((el, i) => i < 5);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Success!",
        input: querystring.parse(event.body).text,
        res: res
      },
      null,
      2
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
