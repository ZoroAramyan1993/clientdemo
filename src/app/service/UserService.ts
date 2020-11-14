import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './MessageService';
import {Observable, of} from 'rxjs';
import {User} from '../../model/User';
import {catchError, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UserService {
  private httpUrl = 'http://localhost:8091/user';

  constructor(private httpClient: HttpClient, private messageService: MessageService) {
  }


  getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.httpUrl}/user/get/id=${id}`).pipe(
      tap(_ => this.log(`fetching user width id = ${id}`)),
      catchError(this.handleError<User>('fetching client'))
    );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} filed: ${error.message}`)
      return of(result as T);

    };
  }


  /** Log a ClientService message with the MessageService */
  private log(message: string) {
    this.messageService.addMessage(`MessageService ${message}`)
  }

}
