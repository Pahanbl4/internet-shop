
export abstract class AbstractIdDto<T> {
    public id: number;

    public constructor(
        fields?: Partial<AbstractIdDto<T>>) {

        if (fields) {

            Object.assign(this, fields);
        }
    }
}
