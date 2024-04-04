import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDivisible]',
  host: {
    '(click)' : 'applyLogic()'
  },
  standalone: true
})
export class DivisibleDirective {
  private el: ElementRef | undefined;

  @Input() number = 0;
  @Input() divisibleBy = 5;

  constructor(el: ElementRef) { 
    this.el = el;
  }

  applyLogic() {
    if (this.number % this.divisibleBy === 0){
       if(this.el){
        this.el.nativeElement.style.color = 'green';
       }
    }
    else{
      if(this.el){
        this.el.nativeElement.style.color = 'red';
       }
    }
  }
}
