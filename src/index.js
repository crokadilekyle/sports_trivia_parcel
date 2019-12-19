import "./styles.scss";
import { questions } from "./questions";
// import fs from "fs";
let form = document.querySelector("form");
function callAPI() {
  questions.getOne().then(question => {
    document.getElementById("question").innerHTML = question.question;
    let select = document.querySelector("select");
    let result = document.getElementById("result");
    let check = document.getElementById("check");
    let answers = [
      ...question.incorrect_answers,
      question.correct_answer
    ].sort();
    console.log("answers:", answers);

    answers.forEach(answer => {
      let option = document.createElement("option");
      option.innerText = answer;
      select.appendChild(option);
    });

    check.addEventListener("click", function(e) {
      e.preventDefault();
      if (select.value === question.correct_answer) {
        result.style.color = "black";
        result.innerHTML = "You are correct!";
      } else {
        result.style.color = "red";
        result.innerHTML = `Correct Answer: ${question.correct_answer}`;
      }
    });

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      answers.forEach(answer => {
        select.removeChild(select.lastChild);
      });
      result.innerHTML = "";
      callAPI();
    });
  });
}

callAPI();

// const copy = fs.readFileSync(__dirname + "/copyright.txt", "utf8");

// document.getElementById("copy").innerText = copy;
