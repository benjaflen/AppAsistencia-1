import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  nombreusuario:string;
  constructor(private activeroute:ActivatedRoute, private router:Router) {
    
    this.activeroute.queryParams.subscribe(params=>{
      
      if(this.router.getCurrentNavigation().extras.state){
       
        this.nombreusuario= this.router.getCurrentNavigation().extras.state.usuariolog.username;
        console.log(this.nombreusuario)
      }
    });

  }
  async Cerrar(){
    this.nombreusuario=null;
  }
}
