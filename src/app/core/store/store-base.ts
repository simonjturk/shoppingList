import { Observable, BehaviorSubject } from 'rxjs';

/**
 * Abstract base class as a simple way to implement observabe store
 */
export class StoreBase<T> {
    stateObservable: Observable<T>;
    private stateBS: BehaviorSubject<T>;

    protected constructor(initialState: T) {
        this.stateBS = new BehaviorSubject(initialState);
        this.stateObservable = this.stateBS.asObservable();
    }

    get state(): T {
        return this.stateBS.getValue();
    }

    setState(nextState: T): void {
        this.stateBS.next(nextState);
    }
}