const repo = "sparqling/library";
const tag = "main";

let selector = document.querySelector.bind(document);
let configList = null;
let onConfigLoad = [];

$(() => {
  $.get(`https://raw.githubusercontent.com/${repo}/${tag}/config.json`, (res) => {
    configList = JSON5.parse(res);
    for(let handler of onConfigLoad) {
      handler();
    }
  });
});
  
