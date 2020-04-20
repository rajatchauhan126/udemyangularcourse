import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() sendFeature = new EventEmitter<string>();

  onSelect(feature : string) {
    this.sendFeature.emit(feature)
  }
}
