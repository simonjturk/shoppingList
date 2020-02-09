import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Self,
  SimpleChanges,
  forwardRef,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NgControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { coerceNumberProperty } from '@angular/cdk/coercion';

import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { IIdentifiable } from './IIdentifiable';
import { OaControlBaseComponent } from '../oa-control-base.component';


/**
 * Validates if the value passed has a code in order to be declared as an
 * object provided by material autocomplete options
 */
function isAutocompleteOption(value: IIdentifiable): boolean {
  if (!value || typeof value === 'string') return false;
  return value.id > 0;
}

/**
 * Validates the control value to have an `id` attribute. It is expected
 * control value to be an object.
 */
function containsIdValidation(control: AbstractControl): ValidationErrors {
  return isAutocompleteOption(control.value) ? null : { required: true };
}


@Component({
  selector: 'oa-autocomplete',
  templateUrl: './oa-autocomplete.component.html',
  styleUrls: ['./oa-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  //providers: [AUTO_COMPLETE_VALUE_ACCESSOR]
})
export class OaAutocompleteComponent implements OnInit, ControlValueAccessor, OnChanges {
  @Input() placeholder: string = 'Start Typing';
  @Input() options: IIdentifiable[];
  @Input() appearence: string = 'standard';

  @Input() autoActiveFirstOption: boolean = false;

  @Output() optionSelected: EventEmitter<IIdentifiable> = new EventEmitter()

  private _lengthToTriggerSearch = 1;
  // Inner form control to link input text changes to mat autocomplete
  inputControl = new FormControl('', this.validators);

  /**
   *writes the input value, as set by the parent to the inner control
   *
   * @param {*} value
   * @memberof OaAutocompleteComponent
   */
  writeValue(value: any): void {

    this.inputControl.setValue(value);
  }


  /**
    * Allows Angular to register a function to call when the input has been touched.
    * Save the function as a property to call later here.
    */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  /**
    * Function to call when the input is touched.
    */
  onTouched() { }



  onChange = (delta: any) => { };
  /**
   * Allows Angular to register a function to call when the inputControl changes.
   * Override the base implementation
   */
  registerOnChange(fn: any): void {
    // Pass the value to the outer ngControl if it has an id otherwise pass null
    this.inputControl.valueChanges.pipe(debounceTime(300)).subscribe({
      next: value => {
        if (typeof value === 'string') {
          if (this.isMinLength(value)) {
            this.isSearching = true;
            /**
             * Fire change detection to display the searching status option
             */
            this.changeDetectorRef.detectChanges();
            this.onChange = fn(value.toUpperCase());
          } else {
            this.isSearching = false;
            this.noResults = false;

            this.onChange = fn(value);
          }
        } else {
          this.onChange = fn(value);
        }
      },
    });
  }








  noResults = false;
  isSearching = false;



  @Input()
  set lengthToTriggerSearch(value: number) {
    this._lengthToTriggerSearch = coerceNumberProperty(value, 0);
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef, @Optional() @Self() private controlDir: NgControl, ) {



    if (this.controlDir) {
      this.controlDir.valueAccessor = this;
    }

  }

  ngOnInit() {



    if (this.controlDir) {
      // Set validators for the outer ngControl equals to the inner
      const control = this.controlDir.control;
      const validators = control.validator
        ? [control.validator, this.inputControl.validator]
        : this.inputControl.validator;
      control.setValidators(validators);
      // Update outer ngControl status
      control.updateValueAndValidity({ emitEvent: true });
    }

  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.options) {
      if (this.isSearching) {
        this.isSearching = false;

        if (!changes.options.firstChange && !changes.options.currentValue.length) {
          this.noResults = true;
        } else {
          this.noResults = false;
        }
      }
    }
  }
  /**
    * Method linked to the mat-autocomplete `[displayWith]` input.
    * This is how result name is printed in the input box.
    */
  display(result: IIdentifiable): string | undefined {
    return result ? result.label : undefined;
  }


  /**
   * Allows Angular to disable the input.  Override the base implementation
   */
  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.inputControl.disable() : this.inputControl.enable();
  }

  isMinLength(value: string) {
    return value.length >= this._lengthToTriggerSearch;
  }

  private get validators(): ValidatorFn[] {
    return [];//[Validators.required, containsIdValidation];
  }

  selected(event) {
    this.optionSelected.emit(event);

  }

  @Output() onEnterKeyPressed = new EventEmitter();
  enterKeyPressed(obj) {
    this.onEnterKeyPressed.emit(this.inputControl.value);
  }
}
