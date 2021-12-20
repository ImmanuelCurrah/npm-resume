#! /usr/bin/env node

const fs = require("fs");
const colors = require("colors");
colors.enable();

fs.readFile(__dirname + "/info.json", "utf8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    const resume = JSON.parse(data);
    // console.log(colors.cyan(data));
    for (const [key, value] of Object.entries(resume)) {
      console.log(`${colors.green(key)}: ${colors.cyan(value)}`);
    }
    return data;
  }
});

// console.log(colors);
