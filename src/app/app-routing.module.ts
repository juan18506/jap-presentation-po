import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntryPointPageComponent } from './views/pages/entry-point-page/entry-point-page.component';
import { GoalsObjectivesPageComponent } from './views/pages/goals-objectives-page/goals-objectives-page.component';
import { ActionPlanPageComponent } from './views/pages/action-plan-page/action-plan-page.component';
import { ConclusionsPageComponent } from './views/pages/conclusions-page/conclusions-page.component';



const routes: Routes = [
  {
    path: 'entry-point',
    component: EntryPointPageComponent,
  },
  {
    path: 'goals-objectives',
    component: GoalsObjectivesPageComponent,
  },
  {
    path: 'action-plan',
    component: ActionPlanPageComponent,
  },
  {
    path: 'conclusions',
    component: ConclusionsPageComponent,
  },
  {
    path: '**',
    redirectTo: 'entry-point',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
