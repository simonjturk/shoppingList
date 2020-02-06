import { OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

type ObservableFunction = () => Observable<any>;
export class UnsubscribeBase implements OnDestroy {
    onDestroy$: Subject<void>;




    constructor() {
        this.onDestroy$ = new Subject<void>();
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }


}