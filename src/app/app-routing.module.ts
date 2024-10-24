import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerryListComponent } from './components/berry-list/berry-list.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { MoveListComponent } from './components/move-list/move-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {path: 'berry', component: BerryListComponent},
  {path: 'pokemon', component: PokemonListComponent},
  { path: 'pokemon-detail/:id', component: PokemonDetailComponent },
  {path: 'move', component: MoveListComponent},
  {path: '', redirectTo: '/pokemon', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }