# Introduction

A well documented repository is a good repository. Hopefully after reading this readme you should have all you need to set up a local testing environment and get started with developing new and exciting features for the website!

# How do I run it?

## Git

The first step is to clone this repository:

Navigate (using the terminal/command line) to the directory you'd like to place your project directory in

```bash
mkdir a_suitable_directory && cd a_suitable_directory
```

Then clone the repository!

```bash
git clone https://github.com/ducompsoc/website.git compsoc_website
```

If you do not have git installed, get it [here](https://git-scm.com/downloads).

This will place a folder compsoc_website inside the folder a_suitable_directory.

Navigate to your newly created project folder

```bash
cd compsoc_website
```

You can check the contents of directory by typing `ls` in bash (Mac and Linux) or `dir` (Windows).

The branch initially checked out is the master branch of the project. This branch will always contain the latest release of the website.

The develop branch is where all the new features are branched from and merged into using a strategy similar to the one found [here](http://nvie.com/posts/a-successful-git-branching-model/).

To view all your local branches (that is, branches present on your machine) use

```bash
git branch
```

If you have been following these instructions you should only see the master branch.

To access the develop branch, we need to check it out

```bash
git checkout develop
```

This creates a local branch called develop which tracks (is linked to) the remote branch (the branch on the github repository).

Running `ls` or `dir` once more will highlight any changes in files.

But it's the same folder? Why have the files changed? That's git at work. For more information on git, see the excellent [documentation](https://git-scm.com/doc).

## Node and NPM

The website's back end runs on the [nodejs](https://nodejs.org/en/) runtime. Head over to https://nodejs.org/en/download/ and download the LTS (long term support) version for your platform.

Once installed, run

```bash
node
```

in your terminal/command line to check that node has been installed. A little carat should appear. To get back to the command line, type .exit or hit ctrl+C twice.

Also check npm is installed correctly

```bash
npm
```

If the terminal gives you a bunch of information (the NPM help page) then you are in good shape.

NPM is Node's Package Manager and is used to install third party libraries and frameworks. The package.json file in the root (top most) directory of the project (compsoc_website if you've been following along) stores all the modules that project relies upon.

Install dependencies by running:

```bash
npm i -g pnpm
pnpm install
```

Running

```bash
pnpm run dev
```

in your terminal/command line will start up a local web server that runs the web app. You will be sent to the homepage (or, just head straight to http://localhost:5173/).

And that's it!

# How do I update the site?

The majority of the website's dynamic content is located in a single configuration file, which you can find at `src/config.tsx`.

So, to change the homepage content, add new events, add team members, and add sponsors, this should be the only place you'd need to make some changes.

For documentation, please refer to `src/util/data.tsx` as a reference; each property has a full explanation of what it does.

## But what if I want to update something that isn't covered here?

The site's main code is in `src/components`. Quite a lot of static assets are in the `public` folder.

Be aware that we use some extra stuff to make developing the site a bit more fun:

- For JavaScript, we use TypeScript (which is why files have the extension `.tsx`). It's just JavaScript, but things have types. If you haven't used TypeScript before, check out https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html.
- For CSS, we use Sass (in `.scss` files). It's just like CSS, but you can nest things and define $variables. If you haven't used Sass before, check out https://sass-lang.com/guide.
- For the site, we use React. This lets us split the code up into separate components.

As an aside, running `pnpm run build` will generate a folder called `dist` containing all the final HTML files we should host in production.
