import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

import { AuthorizedPersonModel } from '@shared/models/authorized-person.model';
import { ChangePasswordModel } from '@shared/models/change-password.model';
import { ForgotPasswordModel } from '@shared/models/forgot-password.model';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '@shared/models/login.model';

import { BaseAuthorizedApiService } from './base-authorized-api.service';

@Injectable()
export class CurrentUserApiService extends BaseAuthorizedApiService {

    constructor(
        http: HttpClient,
        protected store: Store
    ) {
        super(http, store);
    }

    public get(): Observable<AuthorizedPersonModel> {
        return this.httpGet('Authorization/GetCurrent', x => new AuthorizedPersonModel(x));
    }

    public changePassword(model: ChangePasswordModel): Observable<any> {
        return this.httpPost('Authorization/ChangePassword', x => x, model);
    }

    public login(model: LoginModel): Observable<AuthorizedPersonModel> {
        return this.httpPost('Authorization/Login', x => new AuthorizedPersonModel(x), model);
    }

    public logout(): Observable<any> {
        return this.httpPut('Authorization/Logout', x => x);
    }

    public checkCurrent(): Observable<AuthorizedPersonModel> {
        return this.httpGet('Authorization/CheckCurrent', x => new AuthorizedPersonModel(x));
    }

    public loginForResetPassword(model: any): Observable<AuthorizedPersonModel> {
        return this.httpPost('Authorization/LoginForResetPassword', x => new AuthorizedPersonModel(x), model);
    }

    public forgotPassword(model: any): Observable<ForgotPasswordModel> {
        return this.httpPost('Authorization/ForgotPassword', x => new ForgotPasswordModel(x), model);
    }
}
