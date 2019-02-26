import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MenuItem } from '../menu-item.model';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menuItems: MenuItem[];
  @Input() loggedIn: boolean;
  @Output() menuClick = new EventEmitter<string>();
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  emitItemClick(eventName: string) {
    this.menuClick.emit(eventName);
  }
}
