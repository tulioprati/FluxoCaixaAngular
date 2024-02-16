import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SpendingEditorModalService} from '../spending-form/spending-editor-modal.service';
import {SpendingsService} from '../../../services/spending.service';
import {Spending} from '../../../models/spending';



@Component({
  selector: 'app-spendings-lista',
  templateUrl: './spending-list.component.html',
  styleUrls: ['./spending-list.component.css']
})
export class SpendingListComponent implements OnInit {
  spendings: Spending[];
  spendingSelecionado: Spending;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service: SpendingsService,
              private router: Router,
              private installmentEditorModalService: SpendingEditorModalService
  ) {}

  ngOnInit(): void {
    this.service.getSpendings().subscribe(resposta => this.spendings = resposta);
  }

  novoCadastro() {
    this.installmentEditorModalService.show();
  }

  preparaDelecao(spending: Spending) {
    this.spendingSelecionado = spending;
  }

  deletarSpending() {
    this.service.deletar(this.spendingSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Spending deletado';
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o spending');
  }

  edit(spending: Spending){
    this.installmentEditorModalService.show(spending);
  }
}
