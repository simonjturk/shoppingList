import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule} from '@angular/forms';
import { FormlyModule} from '@ngx-formly/core';
import { FormlyMaterialModule} from '@ngx-formly/material';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyMaterialModule,
    FlexModule

  ],
  exports:[MaterialModule, ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    FlexModule]

})
export class SharedModule { }
