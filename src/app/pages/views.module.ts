import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryPointPageComponent } from './components/entry-point-page/entry-point-page.component';
import { GoalsObjectivesPageComponent } from './components/goals-objectives-page/goals-objectives-page.component';
import { ActionPlanPageComponent } from './components/action-plan-page/action-plan-page.component';
import { ConclusionsPageComponent } from './components/conclusions-page/conclusions-page.component';



@NgModule({
  declarations: [
    EntryPointPageComponent,
    GoalsObjectivesPageComponent,
    ActionPlanPageComponent,
    ConclusionsPageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EntryPointPageComponent,
  ]
})
export class ViewsModule { }
