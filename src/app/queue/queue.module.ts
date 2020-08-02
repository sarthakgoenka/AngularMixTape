import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueListComponent } from './components/queue-list/queue-list.component';

import { SharedModule } from './../shared/shared.module';

export const routes = [
  { path: '', component: QueueListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [QueueListComponent]
})
export class QueueModule { }
