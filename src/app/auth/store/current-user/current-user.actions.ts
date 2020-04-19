import { LoginModel } from '@shared/models/login.model';

export class LoadCurrentUser {
    static readonly type = '[Current User] Load current user';
}

export class Unauthorized {
    static readonly type = '[Current User] Unauthorized';
}

export class Logout {
    static readonly type = '[Current User] Logout';
}

export class LoginForResetPassword {
    static readonly type = '[Current User] Login for reset password';
    constructor(public payload: any) { }
}

export class Login {
    static readonly type = '[Current user] Login';

    constructor(public payload: LoginModel) { }
}

export class ForgotPassword {
    static readonly type = '[Current user] Forgot password';
    constructor(public payload: any) { }
}
