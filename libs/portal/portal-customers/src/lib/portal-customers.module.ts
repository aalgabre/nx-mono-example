import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CommonUiCustomMaterialModule } from '@feneo/common/ui/custom-material';

@NgModule({
  imports: [
    CommonModule,
    CommonUiCustomMaterialModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: CustomerListComponent },
      { path: ':id', component: CustomerListComponent }
    ])
  ],
  declarations: [CustomerListComponent]
})
export class PortalCustomersModule {}
