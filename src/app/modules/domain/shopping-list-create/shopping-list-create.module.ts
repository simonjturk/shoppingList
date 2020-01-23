import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListCreateComponent } from './shopping-list-create.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [ShoppingListCreateComponent],
    imports: [ CommonModule,SharedModule ],
    exports: [ShoppingListCreateComponent],
    providers: [],
})
export class ShoppingListCreateModule {}