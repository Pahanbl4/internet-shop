export class LoadCatalog {
    static readonly type = '[Catalog] Load';

    constructor(public payload: any) { }
}

export class LoadProduct {
    static readonly type = '[Catalog] Load product';

    constructor(public id: number) { }
}

