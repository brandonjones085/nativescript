import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { AuthComponent } from './auth/auth.component'
import { CurrentChallengeComponent } from './challenges/current-challenge/current-challenge.component'
import { ChallengeEditComponent } from './challenges/challenge-edit/challenge-edit.component'
import { TodayComponent } from './challenges/today/today.component'


const routes: Routes = [
    { path: '', component: AuthComponent },
    {
      path: 'curr-challenge', component: CurrentChallengeComponent
    }, 
    {
      path: 'today', component: TodayComponent
    }, 
    {
      path: 'edit', component: ChallengeEditComponent
    }
  ];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
