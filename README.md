# File Metadata Microservice for freeCodeCamp

A microservice project from [freeCodeCamp](https://www.freecodecamp.org/)'s curriculum.

## Overview

As part of completing the freeCodeCamp [APIs and Microservices](https://www.freecodecamp.org/learn/apis-and-microservices/) certification a number of self-study projects need to be completed, and this is the final one.

The curriculum is undergoing a major update so these projects are likely to change, but at the time of writing (August 2020) the information herein is correct.

## Advice and Traps

Although I'm a big freeCodeCamp fan, this module isn't to their usual standard. Instructions and tests are too sparse and you can find yourself losing hours and horus of time trying to deal with cryptic test failures when you could swear you've done everything correctly according to the [user stories](#user-stories). For anyone attempting this challenge themselves (obviously you wouldn't want to simply copy what I've done here in order to get the certification) there are definitely some hints that will help make the process easier:

1. Refer to the source code of any tests as you go, so that you're outputting what's expected.
1. Possibly replicate them in something like Postman, so you can be sure they'll pass.
1. Look in the REPL console for logs while tests are running.

_Note: at the time of writing the tests have actually not been added to this challenge. Pasting any valid URL will pass and allow you to receive the accreditation._

## `.env`

If you're interested in cloning this repository, you'll need to set a few things in your `.env` file, both in your local environment and the target. In order to have my `.env` file read locally at run-time, rather than having to set them _literally_, I use the following command in my `dev` script in `package.json` and then run `npm run dev` during local development:

~~~sh
export $(cat .env | xargs) && nodemon server.js
~~~

## Git/Glitch Deployment

I have deployed the final app to [REPL.it](https://repl.it/) because the freeCodeCamp tests need something to run against and provide a pass/fail result. I borrowed and incorporated the design of a [Github-usable webhook](https://github.com/nmcardoso/glitch-github-sync/) that'll run various Git commands on the target server and update it every time I push to Github. That's obviously not necessary for local development or deployment on other infrastructure, but it's handy for Glitch and other REPLs.

The webhook is located at `/git`.

## User Stories

These User Stories are supplied by freeCodeCamp and form the basis of the tests that need to pass to achieve the certification:

1. I can submit a form that includes a file upload.
2. The form file input field  has the "name" attribute set to "upfile". We rely on this in testing.
3. When I submit something, I will receive the file name and size in bytes within the JSON response

## Usage

To actually _use_ the app you simply need to to go the site root and upload a file via the provided form.

## Notable Dependencies

- [Multer](https://www.npmjs.com/package/multer) for file uploading.
- [Express](https://www.npmjs.com/package/express) for Express.
- [Cors](https://www.npmjs.com/package/cors) to avoid thinking.
