import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Spending} from '../models/spending';

@Injectable({
  providedIn: 'root'
})
export class SpendingsService {

  constructor(private http: HttpClient) {
  }

  salvar(spending: Spending): Observable<Spending> {
    return this.http.post<Spending>('http://localhost:8080/api/spendings', spending);
  }

  atualizar(spending: Spending): Observable<any> {
    return this.http.put<Spending>('http://localhost:8080/api/spendings/' + spending.id, spending);
  }

  getSpendings(): Observable<Spending[]> {
    return this.http.get<Spending[]>('http://localhost:8080/api/spendings');
  }

  deletar(spending: Spending): Observable<any> {
    return this.http.delete<any>('http://localhost:8080/api/spendings/' + spending.id);
  }
}

