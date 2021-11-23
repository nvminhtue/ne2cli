import arg from 'arg';
import inquirer from 'inquirer';

import { createProject } from './main';

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--git': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '-g': '--git',
      '-y': '--yes',
      '-i': '--install',
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    skipPrompts: args['--yes'] || false,
    git: args['--git'] || false,
    stack: args._[0],
    runInstall: args['--install'] || false,
  };
}

async function promptForMissingOptions(options) {
  const defaultStack = 'NestJS + NextJS';

  if (options.skipPrompts) {
    return {
      ...options,
      stack: options.stack || defaultStack,
    }
  }

  const questions = [];

  if (!options.stack) {
    questions.push({
      type: 'list',
      name: 'stack',
      message: `Please choose the project's stack to use`,
      choices: ['NestJS + NextJS', 'Still NestJS + NextJS but difference option']
    })
  }

  if (!options.git) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Initialize a git repository?',
      default: false,
    });
  }

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    stack: options.stack || answers.stack,
    git: options.git || answers.git,
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  console.log(options);

  await createProject(options);
}
