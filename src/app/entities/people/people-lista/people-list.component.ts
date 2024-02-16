import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PeopleEditorModalService} from '../people-form/people-editor-modal.service';
import {People} from '../../../models/people';
import {PeoplesService} from '../../../services/people.service';

@Component({
  selector: 'app-peoples-lista',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peoples: People[];
  peopleSelecionado: People;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service: PeoplesService,
              private router: Router,
              private installmentEditorModalService: PeopleEditorModalService
  ) {}

  ngOnInit(): void {
    this.service.getPeoples().subscribe(resposta => this.peoples = resposta);
  }

  novoCadastro() {
    this.installmentEditorModalService.show();
  }

  preparaDelecao(people: People) {
    this.peopleSelecionado = people;
  }

  deletarPeople() {
    this.service.deletar(this.peopleSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'People deletado';
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o people');
  }

  edit(people: People){
    this.installmentEditorModalService.show(people);
  }
}
