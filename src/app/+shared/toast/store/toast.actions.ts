export class SetSuccess {
    static readonly type = '[ToastNotification] Show success toastr';

    constructor(public payload: string) { }
}

export class SetError {
    static readonly type = '[ToastNotification] Show error toastr';

    constructor(public payload: string) { }
}
