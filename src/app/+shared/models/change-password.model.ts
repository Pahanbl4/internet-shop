
export class ChangePasswordModel {
    public confirmPassword: string;
    public oldPassword: string;
    public password: string;

    public constructor(
        fields?: Partial<ChangePasswordModel>) {

        if (fields) {


            Object.assign(this, fields);
        }
    }
}
