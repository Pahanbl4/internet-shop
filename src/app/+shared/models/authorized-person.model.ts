import { AbstractIdDto } from './abstract-id-dto';

export class AuthorizedPersonModel extends AbstractIdDto<number> {
    public email: string;
    public firstName: string;
    public lastName: string;
    public phoneNumber: string;
    public photo: string;
    public role: number;
    public userName: string;

    public constructor(
        fields?: Partial<AuthorizedPersonModel>) {

        super(fields);
        if (fields) {
            Object.assign(this, fields);
        }
    }
}
