import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { MatChip, MatChipInputEvent } from '@angular/material/chips';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, Subject, of } from 'rxjs';
import { startWith, map, tap, takeUntil, mergeAll } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { resultKeyNameFromField } from 'apollo-utilities';

@Component({
  selector: 'oa-material-chips',
  templateUrl: './material-chips.component.html',
  styleUrls: ['./material-chips.component.scss']
})
export class FormlyChipsComponent extends FieldType implements OnInit, OnDestroy, AfterViewInit {
  onDestroy$ = new Subject<void>();

  itemControl = new FormControl();
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  filter: Observable<any[]>;

  ngOnInit() {
    //super.ngOnInit();

    this.filter = this.itemControl.valueChanges.pipe(
      takeUntil(this.onDestroy$),
      startWith(null),
      map((item: any | null) => {

        //let poo =  this._filter(item ? item: '')

        return item ? this._filter(item) : this._filter('')}),
        mergeAll()
        
    )//.pipe(mergeAll());
  }

  ngAfterViewInit() {
    //super.ngAfterViewInit();
    // temporary fix for https://github.com/angular/material2/issues/6728
    (<any> this.matAutocomplete)._formField = this.field;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  get empty() { return this.formControl.value.length === 0; }

  public add(event: MatChipInputEvent): void {
    // Add item only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add item
      if ((value || '').trim()) {
        this.formControl.setValue([
          ...this.formControl.value,
          value.trim(),
        ]);
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.itemControl.setValue(null);
    }
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    this.formControl.setValue([
      ...this.formControl.value,
      event.option.viewValue,
    ]);

    this.itemControl.setValue(null);
  }

  public remove(i: number): void {
    const value = this.formControl.value;

    this.formControl.setValue([
      ...value.slice(0, i),
      ...value.slice(i + 1, value.length)
    ]);
    this.formControl.markAsTouched()
  }

  private  _filter(value: any){
    if (!this.to.filter) return of([]);

    //return 
    return  (this.to.filter as Observable<any[]>)
      .pipe(takeUntil(this.onDestroy$))
      .pipe(map(tags=>{
        if (!value) return tags;
        const filterValue = value.toLowerCase();
        return tags.filter(
          item => item.toLowerCase().indexOf(filterValue) === 0
        );
      }));
    
    

   
  }

  onBlur() {
    this.formControl.markAsTouched();
    this.field.focus = false;
  }
}
