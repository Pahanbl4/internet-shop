export class Section {
    public name: string;
    public icon: string;
    public subsections: Section[];

    public constructor(fields?: Partial<Section>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}
