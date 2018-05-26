import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class MyserviceService {
  
  constructor(private http: HttpClient) { }
  getWhatsNewData(obj): Observable<any>{
    return this.http.post("http://49.207.6.227:8040/login/saveNotification",obj);
  }

  getModulesNames(obj): Observable<Array<any>>{
    return this.http.post<Array<any>>("http://49.207.6.227:8040/login/fetchModules",obj);
  }

}
