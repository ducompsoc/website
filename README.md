# Introduction

A well documented repository is a good repository. Hopefully after reading this readme you should have all you need to set up a local testing environment and get started with developing new and exciting features for the website!

# Setup

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

Running
```bash
npm start
```
in your terminal/command line downloads the project's modules and their dependencies (via npm install) and runs the file app.js with node (via node app.js). If all is well, you should be greeted with the message
```bash
CompSoc app listening on port 9000!
```

Navigate to `http://localhost:9000` in a web browser and you should recognise the CompSoc website!

# Events
Events are loaded dynamically from `public/data/events.json`.

They are broken into two categories: `upcoming` and `past`, which are self-explanatory.

Events are rendered on the page in the order they're stored in `events.json`. For consistency's sake, this should be **reverse chronological order**.

## Add a New Event
To add a new upcoming event, put it as the first element in the `events.upcoming` array.

### Parameter Definitions

#### `name`
The name of the event, e.g. `Annual General Meeting 2018`

#### `short_name`
A short **unique** acronym for the event (used for the HTML `id` attribute), e.g. `agm18`

#### `image_url`
The URL of the image to load for the event. This image should have a 16:9 aspect ratio and be stored in `public/img/events/`.

#### `more_info_url` (optional)
Optional URL to a page with more info about the event. This could be a link to a Facebook event (in which case the page will show `Facebook Event for EVENT_NAME`) or a URL to another site, in which case the page will show `More info about EVENT_NAME`.

#### `short_text` (optional)
Short description of the event, displayed on the homepage, e.g. `Join CompSoc at the AGM to elect new exec`.

#### `text`
An **array** in which each string element is a new paragraph. e.g.
```javascript
"text": [
    "We're recruiting new people to run CompSoc.",
    "Exec roles are held from the end of the AGM in March 2018 to the end of the AGM in March 2019."
]
```

## Move an Event into the Past
To move an event to the past, simply move it from the `events.upcoming` array to the beginning of the `events.past` array.
