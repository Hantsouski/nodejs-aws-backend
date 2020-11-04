'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: {
      title: 'Lambda',
      author: 'K.J. London',
      price: '100 EUR',
      released: '07/10/2019'
    }
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
