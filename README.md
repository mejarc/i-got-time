# I Got Time For That

Developed by [Melanie Archer](http://twobanjos.com).

A chore management tool that pays homage to the marvelous [To-->Done app](http://lifehacker.com/5515338/todone-assigns-you-tasks-based-on-your-available-time), which flourished all too briefly.

The premise: if you have fifteen, five, or even just one minute, you can complete something on your to-do list. This principle of creating inescapable timeboxes is the basis of productivity systems such as [the Pomodoro Technique](http://pomodorotechnique.com/) and [FlyLady](http://www.flylady.net/d/br/2015/01/10/15-minutes-is-so-simple/). Defeat procrastination with unintimidating tasks requiring very little in terms of time commitment: "Heck, yeah, I got time for that."

## Remarks on development
I'd long mourned the removal of To-->Done from the web. Meanwhile, I procrastinated on learning more about JavaScript frameworks; the abundance of them presents the [paradox of choice](http://www.amazon.com/The-Paradox-Choice-More-Less/dp/149151423X).

Of the JavaScript frameworks, ReactJS appealed to me most--I wasn't eager to take sides in the Ember vs. Angular debate, and I felt intrigued by [React Native](https://facebook.github.io/react-native/). Recreating a beloved Rails-based utility in this most modern of JavaScript frameworks seems an efficient use of time to me.

Going from Rails to Flux isn't painless. There are few points of similarity between Rails and Flux: Flux stores are almost like Rails models, and React components are somewhat like Rails views, and the Flux dispatcher has some resemblance to the Rails router--although not enough to make developing them possible without a Flux tutorial, or three, adjacent to the text editor. What *is* impressive about React/Flux is how quickly a reliable corpus of blog posts, conference slide decks, and other documentation has been established: you're never without company or relief, even when completely bewildered. 

## How to install

Either [download the source code archive](https://github.com/mejarc/i-got-time/archive/master.zip), then double-click the downloaded file to install to your hard drive.

Or git clone:

```sh
    $ git clone https://github.com/mejarc/i-got-time.git
````

## Usage
1. Open `i-got-time/index.html` in your browser.
1. Choose whether to create a task, or to complete one.
  ![screenshot](http://i.imgur.com/G9ZOsFn.png?1)
1. Follow through!

## Running the tests

This project includes unit tests using the Jasmine and Jest testing frameworks.

To run the tests:

```sh
    $ npm test
````

## Filing a bug or feature request

Please submit your report or request to this application's [GitHub Issues page](https://github.com/mejarc/i-got-time/issues).

## Acknowledgements
- The developer of To-->Done, who might have been [Jason Katzer](http://www.whois.com/whois/todoneapp.com)

## Links
- [Tutorial - Todo List](https://facebook.github.io/flux/docs/todo-list.html)
- [Flux TodoMVC Example](https://github.com/facebook/flux/tree/master/examples/flux-todomvc)
- Haberman, Josh. ['React Demystified'](http://blog.reverberate.org/2014/02/react-demystified.html). 2014
- [Jest](https://facebook.github.io/jest/)
