import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdwownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
