import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from '../../domains/models/message.model';
import { PATHS } from 'src/app/core/endpoints';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  apiMock = environment.api
  constructor(private http:HttpClient) { }
  getMessages(): Observable<Message[]>{
    return this.http.get<Message[]>(this.apiMock+PATHS.messages.GET.url);
  };
  getPieStats():Observable<any>{
    return this.http.get(this.apiMock+PATHS.PieStats.GET.url);
  };
  getLineStats():Observable<any>{
    return this.http.get(this.apiMock+PATHS.LineStats.GET.url);
  };
  getDoubleStats():Observable<any>{
    return this.http.get(this.apiMock+PATHS.DoubleStats.GET.url);
  };
}
