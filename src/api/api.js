export const simulateFetchRequest = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = Math.random() * 10;

      if (number < 3) {
        reject("Something went wrong!");
      }

      resolve(data);
    }, 1000);
  });
};
