import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimilibanqService {


  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();


private similibanqUrl = 'http://localhost:8060/similibanq-backend/rest/similibanq-api'

  constructor(private http: HttpClient) { }


  fetchAccount(id: number): Observable<Account> {
    const url = `${this.similibanqUrl + '/public/account'}/${id}`;
    return this.http.get<Account>(url).pipe(
      tap(_ => this.log(`fetched account id=${id}`)),
      catchError(this.handleError<Account>(`fetchAccount id=${id}`))
    );
  }

  fetchAllAccountsByCustomer(id: number): Observable<Account[]> {
    return this.http.get<Account[]>(this.similibanqUrl + '/public/customer/' + id + '/accounts').pipe(
      tap(_ => this.log('fetched accounts for customer identifier ' + id)),
      catchError(this.handleError<Account[]>('fetchAllAccountsByCustomer', []))
    );
  }





  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(s: string) {

  }


}
