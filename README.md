# SD Ancient View
It's [Slickdeals](https://slickdeals.net) recreated as it looked in January 2001 with Frontpage deal fetching from the SD Frontpage RSS feed. You can see what it looked like via the internet archive here: https://web.archive.org/web/20010119175000/http://www.slickdeals.net:80/

A deployed instance of this project can be found [here](http://rubenmedina.com/sd-redesign-2018/).

Built using [Preact](https://preactjs.com/). Uses [YahooQL](https://developer.yahoo.com/yql/) to fetch the Slickdeals Frontpage RSS feed for deals due to cross origin resource sharing restrictions.

## Build Instructions
This project uses [yarn](https://yarnpkg.com/en/docs/install) for package management and webpack for project development.

### Local Development
1. Inside of the project root directory, run `yarn install` to download applicaton dependencies
2. Run `yarn dev` to run the application in development mode. In development mode, the application will be accessible via localhost (port displayed on run) and any changes made to javascript and sass files will hot reload browser content.

### Production Build
1. Inside of the project root directory, run `yarn install` to download applicaton dependencies
2. Run `yarn prod` to build a productionalized version of the application into the `dist` directory.
