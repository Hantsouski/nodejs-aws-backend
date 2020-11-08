import generateProduct from "../libs/generator";

export const get = async (event) => {
  const product = await generateProduct(event.pathParameters.id);

  return {
    statusCode: 200,
    body: JSON.stringify(product),
  };
}
