import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CommonUiCustomMaterialModule } from '@feneo/common/ui/custom-material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CommonUiCustomMaterialModule,
    FlexLayoutModule
  ],
  exports: [FlexLayoutModule, LayoutComponent, SidenavComponent, HeaderComponent],
  declarations: [LayoutComponent, SidenavComponent, HeaderComponent]
})
export class SharedUiModule {}
