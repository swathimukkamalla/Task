import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path:'',redirectTo:'/stepOne',pathMatch:'full'},
  {path:'stepOne',component:StepOneComponent},
  {path:'stepTwo',component:StepTwoComponent},
  {path:'stepThree',component:StepThreeComponent},
  {path:'stepFour',component:StepFourComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
