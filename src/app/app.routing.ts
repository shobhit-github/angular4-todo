import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {ProductComponent} from './product/product.component';

@NgModule({
    imports: [
    RouterModule.forRoot([
         { path: 'product', component: ProductComponent },
    ], {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
 })
export class AppRoutingModule {}
