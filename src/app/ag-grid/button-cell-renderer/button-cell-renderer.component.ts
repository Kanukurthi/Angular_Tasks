import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
@Component({
  selector: 'app-button-cell-renderer',
  templateUrl: './button-cell-renderer.component.html',
  styleUrl: './button-cell-renderer.component.css'
})
export class ButtonCellRendererComponent {
  value!:string;
  agInit(params:ICellRendererParams){
    this.value=params.value;
  }
  refresh(params:ICellRendererParams){
    return true;

  }
  buttonClicked(){
    alert('action');

  }

}
