import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormlyModule} from '@ngx-formly/core';
import { FormlyMaterialModule} from '@ngx-formly/material';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { FlexModule } from '@angular/flex-layout';
import { ArrayFilterPipe } from './pipes/array.pipe';
import { ArrayHelpersService } from './utilities/array-helpers.service';
import { ShoppingListService } from './services/graphQL/shoppingList/shopping-list.service';
import { ShoppingListItemService } from './services/graphQL/shoppingListItem/shopping-list-item.service';
import { OAMaterialChipsModule } from './components/ui/formly/material-chips/material-chips.module';
import { FormlyChipsComponent } from './components/ui/formly/material-chips/material-chips.component';
import { FormlyButtonComponent } from './components/ui/formly/formly-button/formly-button.component';
import { FormlyButtonModule } from './components/ui/formly/formly-button/formly-button.module';
import { FormlyWrappersModule } from "./components/ui/formly/formly-wrappers/formly-wrappers.module";
import { FormlyExpansionPanelComponent } from './components/ui/formly/formly-wrappers/expansion-panel/expansion-panel.component';


@NgModule({
  declarations: [ArrayFilterPipe ],
  providers:[
    ArrayHelpersService, 
    ShoppingListService, 
    ShoppingListItemService
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      wrappers:[ 
        { name: 'expansion-panel', component: FormlyExpansionPanelComponent }
      ],


      types:[{
        name: "chips",
        wrappers: ['form-field'],
        component: FormlyChipsComponent,
        defaultOptions: {
          defaultValue: [],
        },
      },
      {
        name: "button",
       
        component: FormlyButtonComponent,
        defaultOptions: {
         
        },
      }
    
    
    ]
    }),
    FormlyMaterialModule,
    FormlyMatToggleModule,
    FlexModule,
    OAMaterialChipsModule

  ],
  exports:[MaterialModule, ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule, 
    FormlyMatToggleModule,
    FlexModule,
    ArrayFilterPipe,
    OAMaterialChipsModule,
    FormlyButtonModule,
    FormlyWrappersModule,
    FormsModule,
    ReactiveFormsModule,
  ]

})
export class SharedModule { }
