import { PessoasHomeComponent } from './modules/pessoas/pages/pessoas-home/pessoas-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PessoaCadastroComponent} from "./components/pessoa-cadastro/pessoa-cadastro.component";
import {PessoaJuridicaComponent} from "./components/pessoa-juridica/pessoa-juridica.component";

const routes: Routes = [
  {
   path: "pessoa",
   component: PessoaCadastroComponent
  },
  {
    path: "pessoa-juridica",
    component: PessoaJuridicaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
