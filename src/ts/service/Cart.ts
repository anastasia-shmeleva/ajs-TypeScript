import Buyable from '../domain/Buyable';
import Phone from '../domain/Phone';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable | Phone): void {
        if ('countable' in item) {
            this._items.push(item);
        } else {
            if (this._items.find(obj => obj.id === item.id)) return 
            else this._items.push(item);
        }  
        // this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    countSum(items: Array<Buyable>): number {
        return items.reduce((sum,item) => sum + item.price, 0);
    }

    countDiscountedSum(items: Array<Buyable>, discount: number): number {
        return this.countSum(items) * (100 - discount) * 0.01
    }

    delete(id: number): void {
        // let toDelete = this._items.findIndex((item) => item.id === id);
        // this._items.splice(toDelete, 1);
        this._items = this._items.filter(item => item.id !== id);
    }
}