import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
    providedIn: 'root'
})

export class UsersResolver implements Resolve<Observable<any>> {
    constructor(
        private _api: ApiService
    ) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this._api.getUsers(route.paramMap.get('id'));
    }
}