import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { NgForm, NgControl } from '@angular/forms';

@Directive({
  selector: '[appCheckImage]',
  standalone: true,

})
export class CheckImageDirective {

  patern = new RegExp(/^http.*\.(jpg|png)$/)


  constructor(private el: ElementRef, private renderer: Renderer2, private control: NgControl) { }

  @HostListener('input') onInputChange() {
    this.validateUrl();
  }

  private validateUrl() {
    const value = this.el.nativeElement.value;
    if (this.patern.test(value)) {
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '4px solid green');
      this.control.control?.setErrors(null);
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '4px solid red');
      this.control.control?.setErrors({ 'incorrect': true });
    }
  }



}
