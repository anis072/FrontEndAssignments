import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PATHS } from 'src/app/core/endpoints';
import { environment } from 'src/environments/environment';
import { loginRequest } from '../../domains/requests/login.request';
import { registerRequest } from '../../domains/requests/register.request';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  apiMock = environment.api
  constructor(private http:HttpClient) { }
  register(registerRequest:registerRequest):Observable<any>{
    return this.http.post(this.apiMock+PATHS.auth.login.POST.url,registerRequest);

  }
  login(loginRequest:loginRequest):Observable<any>{
    return this.http.post(this.apiMock+PATHS.auth.login.POST.url,loginRequest)
  };
  getUsers():Observable<any>{
     return this.http.get(this.apiMock+PATHS.users.GET.url);
  }
}
