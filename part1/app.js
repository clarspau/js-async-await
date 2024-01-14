let favNum = 8;
let baseURL = "http://numbersapi.com";

// 1.

async function getFacts1() {
     let data = await $.getJSON(`${baseURL}/${favNum}?json`);
     console.log(data);
}
getFacts1();


// 2.

const FavNums = [8, 15, 89];
async function getFacts2() {
     let data = await $.getJSON(`${baseURL}/${FavNums}?json`);
     console.log(data);
}
getFacts2();


// 3.

async function getFacts3() {
     let data = await Promise.all(
          Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNum}?json`))
     );
     data.forEach((data) => $("body").append(`<p>${data.text}</p>`));
}
getFacts3();

