import { Component } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';
import {PessoaDto} from "../../dto/pessoaDto";
import {PessoaService} from "../../services/pessoa.service";

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.scss']
})
export class PessoaCadastroComponent {
  pessoas: PessoaDto[] = [];
  wines: any[] = [];
  selectedPessoa?: PessoaDto;
  constructor(private pessoaService: PessoaService) {
    this.pessoas.push({
      id: 1,
      nome: "João Silva",
      cpf: "123.456.789-00",
      email: "some@email.com",
      telefone: "(11) 91234-5678"
    });
    this.pessoas.push({
      id: 2,
      nome: "Maria Souza",
      cpf: "987.654.321-00",
      email: "asdasd",
      telefone: "(21) 99876-5432"
    });

    this.pessoaService.getListWines().then(responseJson => {
      this.wines = responseJson;
    });
  }

  mudouPessoa(event: any) {
    console.log(event);
  }
}
