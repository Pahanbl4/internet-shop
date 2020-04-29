import { AbstractIdDto } from './abstract-id-dto';

export class OrderModel extends AbstractIdDto<number> {
    public name: string;
    public description: string;
    public photo: string;
    public price: number;
    public interestDiscount: number;
    public count: number;
    public inStock: boolean;
    public producer: string;
    public countryOrigin: string;

    public constructor(
        fields?: Partial<OrderModel>) {

        super(fields);
        if (fields) {


            Object.assign(this, fields);
        }
    }
}
