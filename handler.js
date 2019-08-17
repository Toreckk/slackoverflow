"use strict";
const querystring = require("querystring");
const axios = require("axios");

const StackOverflowURI = (title, sort = "relevance", order = "desc") => {
  //sort  = activity, votes, creation, relevance
  //order = desc, asc
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

const formatResponse = (titleText, res) => {
  let respString = `Top questions for: "${titleText}"\n`;

  res.forEach(el => {
    let check = "";
    if (el.is_answered == true) check = ":heavy_check_mark:";

    respString += `|${el.score}| ${check}  <${el.link}|${el.title}> (${
      el.answer_count
    } answers)\n`;
  });

  return respString;
};

module.exports.overflow = async event => {
  let text = querystring.parse(event.body).text;
  let { data } = await axios.get(StackOverflowURI(text));
  let res = data.items.filter((el, i) => i < 5);

  let resp = formatResponse(text, res);
  return {
    statusCode: 200,
    body: resp
    /*body: JSON.stringify(
      {
        message: "Success!",
        input: querystring.parse(event.body).text,
        res: resp
      },
      null,
      2
    )*/
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
