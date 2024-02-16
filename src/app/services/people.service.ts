import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {People} from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class PeoplesService {

  constructor(private http: HttpClient) {
  }

  salvar(people: People): Observable<People> {
    return this.http.post<People>('http://localhost:8080/api/peoples', people);
  }

  atualizar(people: People): Observable<any> {
    return this.http.put<People>('http://localhost:8080/api/peoples/' + people.id, people);
  }

  getPeoples(): Observable<People[]> {
    return this.http.get<People[]>('http://localhost:8080/api/peoples');
  }

  deletar(people: People): Observable<any> {
    return this.http.delete<any>('http://localhost:8080/api/peoples/' + people.id);
  }
}

