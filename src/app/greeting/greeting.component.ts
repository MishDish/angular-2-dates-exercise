import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

@Component({

    selector: 'birthday',
    template: `
        <a name=anchor></a>
        <h2 class="heading"> Birthday Greetings </h2>   
        <ul>
        <div *ngFor="let name of keys()">
          <li *ngIf=" birth[name] > week()[0] &&  birth[name] < week()[1]">
        
            <a href="#anchor" *ngIf="date.getTime() !== birth[name].getTime()" >{{name}}</a>
            
            <span *ngIf="date.getTime() === birth[name].getTime()">{{name}}</span>
            
            <span class="birthday">{{ birth[name] }}</span>
            
            <span class="greeting" *ngIf="date.getTime() === birth[name].getTime()">Happy birthday !!</span>
          
          </li> 
         
         </div>     
        </ul>  
    
    ` ,
    styles: [`       
       .birthday {
           padding-left:15px;
       }
       .greeting{
           color:red;
           font-size:16px;
       } 
    `]
})

export class GreetingComponent {
    public birth;
    public date = new Date(new Date().setHours(0, 0, 0, 0));
    constructor() {
        this.birth = {
            Nikola: new Date('4/2/2016'),
            Secko: new Date('4/5/2016'),
            Kiko: new Date('4/6/2016'),
            George: new Date('4/9/2016'),
            Peter: new Date('4/12/2016'),
            Stephan: new Date('4/25/2016')
        };
    }

    public keys(): any {
        return Object.keys(this.birth);
    }

    public week() {
        let today: any = new Date();
        let todayDayNumb = today.getDay();
        /** numb of days to Monday */
        let leftDays = todayDayNumb - 1;
        // milliseconds of one day = 86400000
        let Monday: any = new Date(today - leftDays * 86400000);
        let endDate: any = new Date(Monday);
        let Sunday = new Date(endDate.setDate(endDate.getDate() + 6));
        return [Monday, Sunday];
    }
}
