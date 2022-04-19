# UCD Theme Test Application

This directory allows you to test the web components in the ucdlib-theme
project.

You can run this testing locally by creating your package, and then watching
those files.

``` bash
npm install
npm run watch
```

And then in another terminal start your server with:

``` bash
node server.js
```

## Docker Testing

If for whatever reason, you'd like to run a dockerized test, you can use use the `local-build.sh`
command:

``` bash
npm run dist
./local-build.sh
```

to build a local-dev version of your application.

You can then start that with:

``` bash
myport=4444
docker run --rm -p ${myport}:3000 --name brand-app -d local-dev/ucdlib-theme-brand-app
```

The docker images are also tagged with a branch as well.
