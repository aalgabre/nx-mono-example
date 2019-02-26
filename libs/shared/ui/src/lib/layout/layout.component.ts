import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item.model';

@Component({
  selector: 'ui-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      text: 'Kunden',
      route: '/customers',
      name: 'customers',
      icon: 'money'
    },
    {
      text: 'Aufträge',
      route: '/app/orders',
      name: 'orders',
      icon: 'money'
    },
    {
      text: 'Kunden',
      route: '/app/customers',
      name: 'customers',
      icon: 'people'
    },
    {
      text: 'Einstellungen',
      route: '/app/settings',
      name: 'settings',
      icon: 'money'
    }
  ];

  // loggedIn$: Observable<boolean>;

  // constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // this.loggedIn$ = this.store.pipe(select(selectLoggedIn));
  }

  // onMenuClicked(eventName: string) {
  //   if (eventName === 'logout') {
  //     this.store.dispatch(new LogoutAction());
  //   }
  // }
}
