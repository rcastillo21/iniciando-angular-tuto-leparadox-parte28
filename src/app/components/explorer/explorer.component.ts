import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit{

  constructor(
    private _api: ApiService,
    private _router: Router
  ) { }

  users = [];

  ngOnInit(): void {
    this._api.searchUsers().subscribe(user => this.users = user);
  }

  goUsers(user) {
    //'users' es el nombre del path en app-routing.module.ts
    this._router.navigate(['users', user.id]);
  }
  
}
