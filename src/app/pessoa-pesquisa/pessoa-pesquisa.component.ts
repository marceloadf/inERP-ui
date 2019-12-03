import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {
  pessoas = [
    { nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG', status: true },
    { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', status: false },
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', status: true },
    { nome: 'Luiz Pereira', cidade: 'Curitiba', estado: 'PR', status: true },
    { nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', status: true },
    { nome: 'José Maria', cidade: 'Salvador', estado: 'BA', status: false },
    { nome: 'Luiz Otavio', cidade: 'Feira de Santana', estado: 'BA', status: true },
  ];
  constructor() { }

  ngOnInit() {
  }

}
