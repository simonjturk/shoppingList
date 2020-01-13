import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListCreateComponent } from './shopping-list-create.component';
import { ShoppingListCreateService } from './services/shopping-list-create.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [ShoppingListCreateComponent],
    imports: [ CommonModule,SharedModule ],
    exports: [ShoppingListCreateComponent],
    providers: [ShoppingListCreateService],
})
export class ShoppingListCreateModule {}