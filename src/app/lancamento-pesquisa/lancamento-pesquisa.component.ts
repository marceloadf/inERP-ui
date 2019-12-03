import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent {
  lancamentos = [
    {
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2019, 0, 19),
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2017, 6, 10),
      dataPagamento: new Date(2017, 5, 30), valor: 80000, pessoa: 'Atacado Brasil'
    },
    {
      tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2017, 7, 20),
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda'
    },
    {
      tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: new Date(2017, 5, 6),
      dataPagamento: new Date(2017, 6, 30), valor: 800, pessoa: 'Escola Abelha Rainha'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date(2017, 2, 20),
      dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza'
    },
    {
      tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2017, 10, 7),
      dataPagamento: new Date(2017, 9, 7), valor: 1750, pessoa: 'Casa Nova Imóveis'
    },
    {
      tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2017, 12, 25),
      dataPagamento: null, valor: 180, pessoa: 'Academia Top'
    }
    ,
    {
      tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2017, 12, 25),
      dataPagamento: null, valor: 180, pessoa: 'Academia Top'
    }
    ,
    {
      tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2017, 12, 25),
      dataPagamento: null, valor: 180, pessoa: 'Academia Top'
    }
    ,
    {
      tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2017, 12, 25),
      dataPagamento: null, valor: 180, pessoa: 'Academia Top'
    }
    ,
    {
      tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2017, 12, 25),
      dataPagamento: null, valor: 180, pessoa: 'Academia Top'
    }
    ,
    {
      tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2017, 12, 25),
      dataPagamento: null, valor: 180, pessoa: 'Academia Top'
    }
  ];
}
