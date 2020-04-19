import { AbstractIdDto } from './abstract-id-dto';

export class ForgotPasswordModel extends AbstractIdDto<number> {
    public email: string;

    public constructor(
        fields?: Partial<ForgotPasswordModel>) {

        super(fields);
        if (fields) {


            Object.assign(this, fields);
        }
    }
}
