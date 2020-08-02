import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './components/ui/ui.component';
import { RouterModule } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FormsComponent } from './components/forms/forms.component';
import { UiComponentsComponent } from './components/ui-components/ui-components.component';
import { UiChartsComponent } from './components/ui-charts/ui-charts.component';
import { UiIconsComponent } from './components/ui-icons/ui-icons.component';
import { MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule } from '@angular/material';

export const routes = [
  { path: '', component: UiComponent, pathMatch: 'full' },
  { path: 'buttons', component: ButtonsComponent, pathMatch: 'full' },
  { path: 'forms', component: FormsComponent, pathMatch: 'full' },
  { path: 'components', component: UiComponentsComponent, pathMatch: 'full' },
  { path: 'charts', component: UiChartsComponent, pathMatch: 'full' },
  { path: 'icons', component: UiIconsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    RouterModule.forChild(routes),
  ],
  declarations: [UiComponent, ButtonsComponent, FormsComponent, UiComponentsComponent, UiChartsComponent, UiIconsComponent]
})
export class UiElementsModule { }
