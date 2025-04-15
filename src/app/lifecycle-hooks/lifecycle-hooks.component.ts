import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent {
  userdata:any=[];
  constructor(private httpclient:HttpClient){}
  ngOnInit():void{
    this.loadusers();
  }
  loadusers(){
    this.httpclient.get<any[]>('assets/userdata.json').subscribe(data=>{
      this.userdata=data;
      
    })
   
    
  }
  removeUser(index: number) {
    this.userdata.splice(index, 1);
  }
 
  
}



