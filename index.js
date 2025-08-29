#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import ora from "ora";
import { execSync } from "child_process";
import degit from "degit";

const repo = "theabhipatel/template_node_ex_ts";

(async () => {
  console.log(chalk.cyan.bold("\n🚀 Welcome to Create Abhi Node CLI!\n"));

  const { projectName } = await inquirer.prompt([
    {
      name: "projectName",
      type: "input",
      message: "👉 What’s your project name?",
      validate: (input) =>
        input ? true : "Project name cannot be empty!",
    },
  ]);

  const spinner = ora("📦 Setting up your project...").start();

  try {
    const emitter = degit(repo, { cache: false, force: true });
    await emitter.clone(projectName);

      spinner.succeed("📦 Project structure created!");

  const installSpinner = ora("📥 Installing dependencies...").start();

    execSync("npm install", { stdio: "ignore", cwd: projectName });
     installSpinner.succeed("✅ Dependencies installed!");

    spinner.succeed("✅ Project setup successfully!");
    console.log(`\n${chalk.green("Next steps:")}`);
    console.log(`   cd ${chalk.yellow(projectName)}`);
    console.log(`   ${chalk.yellow("npm start")}\n`);
  } catch (err) {
    spinner.fail("❌ Something went wrong!");
    console.error(err);
    process.exit(1);
  }
})();