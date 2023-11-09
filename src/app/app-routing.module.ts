import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryPointPageComponent } from './pages/components/entry-point-page/entry-point-page.component';
import { GoalsObjectivesPageComponent } from './pages/components/goals-objectives-page/goals-objectives-page.component';
import { ActionPlanPageComponent } from './pages/components/action-plan-page/action-plan-page.component';
import { ConclusionsPageComponent } from './pages/components/conclusions-page/conclusions-page.component';



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
    path: 'goals-objectives',
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
