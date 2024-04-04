import { Component } from '@angular/core';
import { DivisibleDirective } from '../../../directives/divisible.directive';

@Component({
  selector: 'app-custom-directive',
  standalone: true,
  imports: [DivisibleDirective],
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.scss'
})
export class CustomDirectiveComponent {
  number = 50;
  isClicked = false;
 
  onClick(){
   this.isClicked = true;
  }
}
