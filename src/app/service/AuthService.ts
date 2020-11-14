import {HttpClient} from '@angular/common/http';
import {MessageService} from './MessageService';
import {Injectable} from '@angular/core';
import {User} from '../../model/User';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';




@Injectable({providedIn: 'root'})
export class AuthService {
  private httpUrl = 'http://localhost:8091/user';

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

   signUpUser(user: User) {
     // tslint:disable-next-line:variable-name
     return this.http.post(`${this.httpUrl}/save`, user).// tslint:disable-next-line:variable-name
     pipe(tap(_ => this.log(`registering widh name  ${user.name}`)),
       catchError(this.handleError('registrating user'))
     );

   }


  attempthAuth(user: User): Observable<any>{
    // const credentials = {clientNameOrEmail: client.userName, password: client.password};
    const credentials = {email: user.email, password: user.password};

    return this.http.post<any>(`${this.httpUrl}/auth/signIn`, credentials)
      .pipe(
        map(res => {
          localStorage.setItem('email', user.email);
          localStorage.setItem('password', user.password);
          // console.log(res);
          return res;
        }),
        tap(_ => this.log(`authenticating client ${user.email}`)),
        catchError(this.handleError('Authenticating user'))
      );

  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string){
    this.messageService.addMessage(`Registration : ${message}`);
  }


}


