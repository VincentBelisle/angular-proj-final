import {Component} from '@angular/core';
import {Observable, Observer} from 'rxjs';


export interface ExampleTab {
  label: string;
  content: string;
}

 @Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {


}
