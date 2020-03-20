import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
    HttpResponse
} from '@angular/common/http';
import { map, share } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

import { environment } from '../../../environments/environment';
import { SetError } from '../toast/store/toast.actions';

export abstract class BaseApiService {
    protected apiRelativePath = '/api/';

    protected errorDispatchEnabled = true;
    private _inFlight: any = {};

    constructor(
        protected http: HttpClient,
        protected store: Store
    ) {}

    protected httpGet<T>(url: string, ctor: (value: any) => T, options: HttpHeaders = null): Observable<any> {
        if (this._inFlight[url.toLowerCase()]) {
            return this._inFlight[url.toLowerCase()];
        }
        const request: Observable<any> = this.http.get<T>(this.apiRelativePath + url, { observe: 'response', headers: options }).pipe(
            map((res: HttpResponse<T>) => this.mapType<T>(res, ctor)),
            share()
        );
        this._inFlight[url.toLowerCase()] = request;
        request.subscribe({
            error: error => {
                this.handleError(error);
                this.clearInFlight(url);
            },
            complete: () => this.clearInFlight(url)
        });

        return request;
    }

    protected httpGetBlob(url: string): Observable<Blob> {
        return this.http.get(this.apiRelativePath + url, {
            responseType: 'blob'
        });
    }

    protected httpPost<T>(url: string, ctor: (value: any) => T, data: any = null, options: HttpHeaders = null): Observable<any> {
        const request: Observable<any> = this.http.post(this.apiRelativePath + url, data, { observe: 'response', headers: options }).pipe(
            map((res: HttpResponse<T>) => this.mapType<T>(res, ctor)),
            share()
        );
        request.subscribe({ error: error => this.handleError(error) });

        return request;
    }

    protected httpPut<T>(url: string, ctor: (value: any) => T, data: any = null, options: HttpHeaders = null): Observable<any> {
        const request: Observable<any> = this.http.put(this.apiRelativePath + url, data, { observe: 'response', headers: options }).pipe(
            map((res: HttpResponse<T>) => this.mapType<T>(res, ctor)),
            share()
        );

        request.subscribe({ error: error => this.handleError(error) });

        return request;
    }

    protected httpDelete<T>(url: string, id: number, ctor: (value: any) => T, options: HttpHeaders = null): Observable<any> {
        const request: Observable<any> = this.http
            .delete(this.apiRelativePath + url + '/' + id, {
                observe: 'response',
                headers: options,
            })
            .pipe(
                map((res: HttpResponse<T>) => this.mapType<T>(res, ctor)),
                share()
            );

        request.subscribe({ error: error => this.handleError(error) });

        return request;
    }

    private clearInFlight(url: string): void {
        if (this._inFlight[url.toLowerCase()]) {
            delete this._inFlight[url.toLowerCase()];
        }
    }

    public handleError(response: HttpErrorResponse): void {
        if (!environment.production) {
            console.error(response.error || response.status ? `${response.status} - ${response.statusText}` : 'Server error');
        }
        if (this.errorDispatchEnabled && response && response.status) {
            const message = response.error || response.statusText || 'Server error';
            this.store.dispatch(new SetError(message));
        }
    }

    protected mapType<T>(res: HttpResponse<T>, ctor: (value: any) => T): any {
        const val: any = res.status === 204 ? null : res.body;
        if (val === null) {
            return null;
        }

        if (val === '[]') {
            return [];
        }
        if (Array.isArray(val)) {
            return val.map(x => ctor(x));
        }
        return ctor(val);
    }
}
