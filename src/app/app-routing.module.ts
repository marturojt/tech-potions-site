import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeEsMX from '@angular/common/locales/es-MX';
import { SimpleHomeComponent } from './simple-home/simple-home.component';


registerLocaleData(localeEsMX, 'es-MX')

const routes: Routes = [

  { path: '', component: SimpleHomeComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
