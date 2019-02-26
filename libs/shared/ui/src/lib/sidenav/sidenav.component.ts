import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ui-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() menuItems: any[];
  @Input() loggedIn: boolean;
  @Output() menuClick = new EventEmitter<string>();
  @Output() closeSidenav = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.closeSidenav.emit();
  }

  emitItemClick(eventName: string) {
    this.menuClick.emit(eventName);
  }
}
