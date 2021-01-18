import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './setup/setup.component';
import { WatchComponent } from './watch/watch.component';

const routes: Routes = [
  {
    path: 'setup',
    component: SetupComponent
  },
  {
    path: 'watch/:pturl/:ircurl/:channelname',
    component: WatchComponent
  },
  {
    path: '',
    redirectTo: 'setup',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
