import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    countSum([...items]): number {
        let prices: any[] = [];
        items.forEach((item) => prices.push(item.price));
        return prices.reduce((a, b) => a + b,0); 
    }

    countDiscountedSum([...items], discount: number): number {
        let prices: any[] = [];
        items.forEach((item) => {
            prices.push(item.price * (100 - discount) * 0.01);
        });
        return prices.reduce((a, b) => a + b,0); 
    }

    delete(id: number): void {
        let toDelete = this._items.findIndex((item) => item.id === id);
        this._items.splice(toDelete, 1);
    }
}