import { AbstractIdDto } from './abstract-id-dto';

export class ListModel extends AbstractIdDto<number> {
    public name: string;

    public constructor(
        fields?: Partial<ListModel>) {

        super(fields);
        if (fields) {


            Object.assign(this, fields);
        }
    }
}
