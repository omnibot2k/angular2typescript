import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
    	<h1>Hello {{ name }}!</h1>
    	<p>man this new angular stuff is easy</p>
    `
})
export class AppComponent {
    name: string;

    constructor() {
        this.name = 'Angular 2 waddup';
        console.log("not sure what's going on here" + this.name);
    }
}