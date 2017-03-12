'use strict';
const fs = require('fs');
const yaml = require('yamljs');
const chalk = require('chalk');

console.log(chalk.magenta('compiling projects.json...'))

const files = [
  'pirtle.yml',
  'sam.yml',
];


let projects = [];
files.forEach(filename => {
  const obj = yaml.parseFile(__dirname + '/' + filename).projects;
  projects = projects.concat(obj);
});

fs.writeFile(__dirname + '/projects.json', JSON.stringify(projects),
  () => {
    console.log(chalk.green(`projects.json compiled with ${projects.length} projects.`));
});
