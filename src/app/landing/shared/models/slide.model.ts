export class Slide {
    public image: string;

    public constructor(fields?: Partial<Slide>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}
