import { Component, OnInit, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { UnsubscribeBase } from './unsubscribe-base';
import { CRUD_BUTTONS } from '../components/ui/crud-bar/crud-bar.component';
import { IsLoadingService } from '@service-work/is-loading';
import { Observable } from 'rxjs';
import { CrudBarService } from '../components/ui/crud-bar/crud-bar.service';
import { IDataService } from '../services/data/IDataService';
import { CRUD_MODE } from '../enums';
import { map } from 'rxjs/operators';


export abstract class CrudBaseComponent<T> extends UnsubscribeBase implements OnInit, OnChanges, OnDestroy {

    /**
     *Used to inform parent compnents that an action has completed (save, cancel, delete).
     *
     * @type {EventEmitter<CRUD_BUTTONS>}
     * @memberof CrudBaseComponent
     */
    @Output('crudEvent') public crudEvent: EventEmitter<CRUD_BUTTONS> = new EventEmitter<CRUD_BUTTONS>()

    /**
     * A generic reference to the service passed in the constructor to complete CRUD actions 
     *
     * @private
     * @type {IDataService<T>}
     * @memberof CrudBaseComponent
     */
    private dataService: IDataService<T>;


    constructor(private crudMode: CRUD_MODE, private isLoadingService: IsLoadingService, private crudBarService: CrudBarService, dataService: IDataService<T>) {
        super();

        //initialise the event emitter
        this.crudEvent = new EventEmitter();

        //set our data service
        this.dataService = dataService;

        //listen for a button to be clicked on our crud bar, and then perform the appropriate action
        crudBarService.stateObservable
            .subscribe(state => {
                this.onCrudBarClicked(state.buttonClick);
            })

    }

    ngOnInit(): void { }
    ngOnChanges(): void { }
    ngOnDestroy(): void { super.ngOnDestroy(); }


    /**
     * saves the object to the graph by calling the save method of the already set dataService
     *
     * execute
     * @memberof CrudBaseComponent
     */
    save(execute: boolean = true): Observable<T> | Observable<T[]> | null {
        this.isLoadingService.add({ key: "button" });

        //we determin the correct method to call based on the type of CRUD operation this is as defined n the constructor
        const obs = this.dataService[this.crudMode](this.buildDataObject())
            .pipe(map(res => {

                this.isLoadingService.remove({ key: "button" })
                this.crudEvent.emit(CRUD_BUTTONS.save);

                return res;
            }));

        return execute ? obs.subscribe() : obs;
    }
    public cancel() {
        this.crudEvent.emit(CRUD_BUTTONS.save);
    }
    public delete() {
        this.crudEvent.emit(CRUD_BUTTONS.save);
    }



    /**
     *Abstract class to be overwritten by the concrete class.  Used to get the object of whichever entity is to be created/updated etc
     *
     * @abstract
     * @memberof CrudBaseComponent
     */
    public abstract buildDataObject()


    /**
     * Event handler for the crud bar being clicked.  will call appropriate methods based on button being clicked
     */
    private onCrudBarClicked(type: CRUD_BUTTONS) {
        if (type === CRUD_BUTTONS.save) this.save();
        if (type === CRUD_BUTTONS.delete) this.delete();
    }



}
