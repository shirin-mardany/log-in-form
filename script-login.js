"use strict";

// giv elements >>
const divFormEl = document.querySelector(".form-div");
const loginFormEl = document.querySelector("form");
const userInpEl = document.querySelector("#userName");
const passInpEl = document.querySelector("#passWord");
const googleBtn = document.querySelector(".google-btn");
const faceBookBtn = document.querySelector(".faceBook-btn");
const forgetPassEl = document.querySelector(".forget");

const tokenResultEl = document.querySelector(".token");

const lougOuBtn = document.querySelector(".logout");
const logoutEl = document.querySelector("#result");
const resultTXT = document.querySelector(".result-p");

// ---------------add form >>-------------------
loginFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(" ", {
      method: "POST",
      headers: {
        "content-typp": "application/json",
      },
      body:JSON.stringify({
        username: userInpEl.value,
        password: passInpEl.value,
      }),
    });
    // creat json file from data for use that >>
    const data = await res.json();

    // if user and pass be correct -> now i have data
    // give hide class to login
    loginFormEl.classList.add("hide");
    // take hide class from logout >>
    loginFormEl.classList.remove("hide");
    // send token to p tag
    tokenResultEl.textContent =data.token;
    //show token in p tag
  } catch (err) {
      //if had an err >>
console.log(err);
      
    alert("user or pass incorrect...");
  }
});
