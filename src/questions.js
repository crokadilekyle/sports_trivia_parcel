// module.exports = {
//   getOne: function() {
//     return new Promise((resolve, reject) => {
//       fetch("https://api.icndb.com/jokes/random")
//         .then(res => res.json())
//         .then(data => {
//           resolve(data.value.joke);
//         });
//     });
//   }
// };

export const questions = {
  getOne: function() {
    return new Promise((resolve, reject) => {
      fetch(
        "https://opentdb.com/api.php?amount=1&category=21&difficulty=medium&type=multiple"
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          resolve(data.results[0]);
        });
    });
  }
};
