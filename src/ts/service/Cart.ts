import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    delite(id: number): void {
       const delElementIndex = this._items.findIndex((el) => el.id === id);
       if(delElementIndex){
           this._items.splice(delElementIndex, delElementIndex);
        }else {
            this._items.splice(delElementIndex, delElementIndex+1);
        }
        console.log(delElementIndex)
    }

    totalCost(): number {
        let sum = 0;
        this._items.forEach(element => {
            sum += element.price
        });
        return sum;
    }

    discountTotalCost(discount: number): number {
        return this.totalCost() - this.totalCost()* discount / 100;
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
}
