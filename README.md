#Notes about refactor to work with Heroku
Hey there future Dee

Let me tell you why Heroku kept failing when we tried to created it with the nodeJS repo that has multiple projects.
It's because you decided to have each one with its own node modules folder, so there is no 'global' one under the ROOT folder.
Therefore, H couldn't find what the app is built with, and that's why it kept yelling at you.

That being said.
Since they are all test projects... it might be in our best interest for the future to set up a root node modules folder and package.json file that your apps can use. Configure it so dependencies/packages don't get installed in the wrong folder, since most of them use different resources.

Last thing-- until this has been accomplished, use node-express repo to deal with the current express webserver w/ heroku app.
