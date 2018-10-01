# Gamecountdown

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Foundation-Sites Installed
### It was a huge pain and I'm not 100% sure it's all working. Here are the steps.
* Followed steps here except for one: 
https://shermandigital.com/blog/zurb-foundation-with-angular-cli/
  * The step I didn't follow is that I used `npm i foundation-sites jquery --save` instead of the suggested install.
* Followed steps from the accepted answer as well as the answer from Kingston Fortune this SO post: https://stackoverflow.com/questions/45106174/how-do-i-get-zurb-foundation-6-4-1-to-work-with-angular-4
* Then followed yet more steps from aalhanane in this SO article: https://stackoverflow.com/questions/50938058/foundation-6-with-angular-6-integration-not-working
* Finally learned to use the following function from the accepted answer on this SO article in order to get jQuery functions from Foundation to work: https://stackoverflow.com/questions/50978776/angular-built-in-direcitives-not-working-with-foundation-components
  * ```
    ngAfterViewInit(): void {
        $(document).foundation();
    }
    ```
  * This is used after the `ngOnInit` call in whichever components need to use  Foundation functions that involve jQuery.
