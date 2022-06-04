import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'TO DO LIST App';
  showAddTeask:boolean =false;
  subscription!:Subscription;

  constructor(private serv:UiService , private route:Router) {
    this.subscription=this.serv.on_toggle().subscribe( (val) => (this.showAddTeask = val) )
   }

  ngOnInit(): void {
  }

  toggle_add_task(){
    // alert('hi again')
    this.serv.toggleAdd();

  }

  // this function is for the show to button if we are in a specific route as example home page
  inRoute(my_route:string){
    return this.route.url === my_route
  }
}
