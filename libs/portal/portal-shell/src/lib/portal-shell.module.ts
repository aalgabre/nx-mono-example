import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent, SharedUiModule } from '@feneo/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          { path: '', redirectTo: '', pathMatch: 'full' },
          {
            path: 'customers',
            loadChildren: '@feneo/portal/portal-customers#PortalCustomersModule'
          }
        ]
      }
    ])
  ]
})
export class PortalShellModule {}
