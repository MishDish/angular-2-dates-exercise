import {Component} from 'angular2/core';
import {GreetingComponent} from './greeting.component';
@Component({
    selector: 'my-app',
    template: '<h1>App1</h1><birthday></birthday>',
    directives: [GreetingComponent] 
})
export class AppComponent { }