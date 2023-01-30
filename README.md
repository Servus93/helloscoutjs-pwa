# Hello Scout JS PWA
This repository contains the source code for a simple progressive web app (PWA) that displays a greeting message using the Scout JS library. The PWA is designed to work offline and can be added to the home screen of a device.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
First of all Read the **Getting started** Guide for the helloscoutjs Programm. On the original Example: [helloscoutjs](https://eclipsescout.github.io/22.0/helloscout-js.html)

## Installing
1. Clone the repository to your local machine using `git clone https://github.com/Servus93/helloscoutjs-pwa.git`
2. Navigate to the project directory using `cd helloscoutjs-pwa`
3. Install the dependencies using ```npm install --ignore-scripts```
## Building and deploying the app
To build the production version of the app, run `npm run build:dev`. The built files will be stored in the `dist` directory. You can then deploy the contents of the `dist` directory to a web server or host it on a platform like GitHub Pages.
> Use `npm run build:dev:watch` to have these files automatically updated when the corresponding source files change.
## Running the app
Start the development server using `npm run serve`
Open a web browser (preferably Google Chrome) and navigate to `http://localhost:8080`
Install the PWA via the install icon right on


## Built With
[ScoutJS](https://www.eclipse.org/scout/) - A lightweight JavaScript library for building business applications\
[Google Workbox](https://github.com/GoogleChrome/workbox) Workbox is a collection of JavaScript libraries for Progressive Web Apps.
## Author
- **[Severin Bind](https://github.com/Servus93)**
- **[Marcel Wismer](https://github.com/mawismer)**
- **[Matthias Schneider](https://github.com/githubmurksi)**
## License
This project is licensed under the MIT License - see the LICENSE file for details.
