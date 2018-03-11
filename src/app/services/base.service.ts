import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment"

@Injectable()
export class BaseService {

    API_URL = environment.apiUrl;

    constructor(protected http: HttpClient) {

    }

    public get(url: string): Observable<any> {
        return this.http.get(this.API_URL + url);
    }

    public post(url: string, data?: any): Observable<any> {
        return this.http.post(this.API_URL + url, data);
    }

    public put(url: string, data: any): Observable<any> {
        return this.http.put(this.API_URL + url, data);
    }

    public delete(url: string): Observable<any> {
        return this.http.delete(this.API_URL + url);
    }

}
