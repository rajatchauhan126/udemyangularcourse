import { Directive } from "@angular/core";

@Directive({
  selector: "[appDropdownDirective]"
})

export class DropdwonDirective {
  isOpen : boolean = false;

  

}