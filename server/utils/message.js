let moment = require('moment');

let getMessageObject = (from, text) => {
  return {
    from,
    text,
    createdAt: moment().valueOf()
  };
};

module.exports = {getMessageObject};