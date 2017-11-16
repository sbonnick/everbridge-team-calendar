# \<everbridge-team-calendar\>

This repo contains several components for interacting with everbridge via the everbridge proxy. In addition, there is an example app using them all together. 

there is a docker container if you wish to be up and running using static hosting.

## Setup in Everbridge

1. single calendar
2. support for as many shifts as required
3. support for as many staffing tiers per shift
4. only supports a single 7 day staff per staffing tier


## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create builds of your application in the `build/` directory, optimized to be served in production. You can then serve the built versions by giving `polymer serve` a folder to serve from:

```
$ polymer serve build/default
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
