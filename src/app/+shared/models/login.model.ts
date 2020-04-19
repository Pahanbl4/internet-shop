export class LoginModel {
    userName: string;
    password: string;
    rememberMe: boolean;

    public constructor(fields?: Partial<LoginModel>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}
