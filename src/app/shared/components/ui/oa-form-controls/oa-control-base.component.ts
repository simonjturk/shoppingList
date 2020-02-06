import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, Input, OnInit, forwardRef } from '@angular/core';

export const COMPONENT_NAME_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => OaControlBaseComponent),
    multi: true
};

@Component({
    selector: 'oa-control-base',
    template: 'WILL BE EXTENDED'//,
    // providers: [COMPONENT_NAME_VALUE_ACCESSOR]
})
export class OaControlBaseComponent implements OnInit, ControlValueAccessor {
    @Input() editMode: boolean = false;
    @Input() label: string;
    @Input() icon: string;




    onChange: (value) => {};
    onTouched: () => {};




    private _value: any;

    set value(value: any) {
        console.log("set value: " + value);
        this._value = value;
        this.notifyValueChange();
    }

    get value(): any {
        return this._value;
    }



    constructor() { }

    notifyValueChange(): void {
        if (this.onChange) {
            this.onChange(this.value);
        }
    }

    ngOnInit(): void {

    }

    writeValue(obj: any): void {
        if (obj) this._value = obj;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
    }
}
