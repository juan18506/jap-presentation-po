import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryPointPageComponent } from './pages/entry-point-page/entry-point-page.component';
import { GoalsObjectivesPageComponent } from './pages/goals-objectives-page/goals-objectives-page.component';
import { ActionPlanPageComponent } from './pages/action-plan-page/action-plan-page.component';
import { ConclusionsPageComponent } from './pages/conclusions-page/conclusions-page.component';



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
    GoalsObjectivesPageComponent,
    ActionPlanPageComponent,
    ConclusionsPageComponent,
  ],
})
export class ViewsModule { }
