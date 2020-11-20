import {HttpClient} from '@angular/common/http';
import {MessageService} from './MessageService';
import {Injectable} from '@angular/core';
import {User} from '../../model/User';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {RoleName} from '../../model/RoleName';
import {UserUpdate} from '../../model/UserUpdate';




@Injectable({providedIn: 'root'})
export class AuthService {
  private httpUrl = 'http://localhost:8091/user';

  constructor(private http: HttpClient, private messageService: MessageService) {
  }


 signUpUser(user: User){
    return this.http.post(`${this.httpUrl}/save`, user).pipe(
      tap(_ => this.log(`registrating user width name ${user.name}`)),
      catchError(this.handleError('Registrating user'))
    );
  }


  attempthAuth(user: User): Observable<any>{
    // const credentials = {clientNameOrEmail: client.userName, password: client.password};
    const credentials = {email: user.email, password: user.password};

    return this.http.post<any>(`${this.httpUrl}/authenticate`, credentials)
      .pipe(
        map(res => {
          localStorage.setItem('email', user.email);
          localStorage.setItem('password', user.password);
          // console.log(res);
          return res;
        }),
        tap(_ => this.log(`authenticating user ${user.email}`)),
        catchError(this.handleError('Authenticating user'))
      );
  }
  getUserName(email: string): Observable<User>{
    return this.http.get<User>(`${this.httpUrl}/getEmail?email=${email}`).pipe(
      tap(_ => this.log(' fetching user role by user email')),
      catchError(this.handleError<User>(' get role'))
    );
  }
  getUserRole(email: string): Observable<RoleName> {
    return this.http.get<RoleName>(`${this.httpUrl}/role?email=${email}`).pipe(
      tap(_ => this.log(' fetching client role by client email')),
      catchError(this.handleError<RoleName>(' get role'))
    );
  }

  update(user: UserUpdate){
    const details = {
      name: user.name,
      surName: user.surName,
     email: user.email,
     password: user.password
    };
    return this.http.put(`${this.httpUrl}/update?userId=${user.userId}`, details).pipe(
      tap(_ => this.log(' ok')),
      catchError(this.handleError(' error'))
    );
  }

  delete(id: bigint) {
    return this.http.delete(`${this.httpUrl}/delete/${id}`).pipe(
      tap(_ => this.log(' ok')),
      catchError(this.handleError(' error'))
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


