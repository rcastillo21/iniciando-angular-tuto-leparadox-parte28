import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { UsersResolver } from './components/resolvers/resolver.resolver';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'explorer'
    },
    {
        path: 'explorer',
        component: ExplorerComponent
    },
    {
        path: 'users/:id',
        component: UsersComponent,
        resolve: {
            user: UsersResolver
        }
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}