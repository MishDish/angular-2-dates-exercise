import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

import { GreetingComponent } from './greeting/greeting.component';

@Component({
    selector: 'my-app',
    template: `
        <main>
         <router-outlet></router-outlet>
       </main>`
})
export class AppComponent {

}
