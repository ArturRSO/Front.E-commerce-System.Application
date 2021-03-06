import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressRegistrationComponent } from './address-registration/address-registration.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PasswordRegistrationComponent } from './password-registration/password-registration.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { StoreRegistrationComponent } from './store-registration/store-registration.component';
import { TelephoneRegistrationComponent } from './telephone-registration/telephone-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {
    path: 'endereco',
    component: AddressRegistrationComponent
  },
  {
    path: 'historico',
    component: OrderHistoryComponent
  },
  {
    path: 'loja',
    component: StoreRegistrationComponent
  },
  {
    path: 'perfil',
    component: UserProfileComponent
  },
  {
    path: 'perfil/atualizar',
    component: UserRegistrationComponent
  },
  {
    path: 'produto/atualizar',
    component: ProductUpdateComponent
  },
  {
    path: 'produto',
    component: ProductRegistrationComponent
  },
  {
    path: 'senha',
    component: PasswordRegistrationComponent
  },
  {
    path: 'telefone',
    component: TelephoneRegistrationComponent
  },
  {
    path: 'usuario',
    component: UserRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
