export const list = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        title: "Lambda",
        author: "K.J. London",
        price: "100 EUR",
        released: "07/10/2019",
      },
      {
        title: "AWS fantasies",
        author: "A.B. Doyel",
        price: "99.0 EUR",
        released: "22/06/2020",
      },
      {
        title: "Serverless sunshines",
        author: "W.W. Server",
        price: "43.333 EUR",
        released: "15/02/2020",
      },
    ]),
  };
};
