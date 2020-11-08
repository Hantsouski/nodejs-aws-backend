export default function generateProduct(id) {
  return new Promise((resolve) => {
    return setTimeout(() => {
      console.log(
        `Hold on! I'm trying to compute uncomputable by given id: ${id}`
      );
      return resolve({
        title: "Suprise",
        author: "A.K. Timer",
        price: "1 EUR",
        released: "06/02/2020",
      });
    }, 2000);
  });
}
