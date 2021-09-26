import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FitChoosingsComponent } from './fit-choosings/fit-choosings.component';
import { FakeGeneratedComponent } from './fake-generated/fake-generated.component';


const routes: Routes = [
  {path: 'fit-choosings', component: FitChoosingsComponent},
  {path: 'fake-generated', component: FakeGeneratedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
