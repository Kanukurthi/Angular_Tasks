import { Component,ViewChild } from '@angular/core';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ColDef, ClientSideRowModelModule, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { ButtonCellRendererComponent } from './button-cell-renderer/button-cell-renderer.component';

import { provideGlobalGridOptions } from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

ModuleRegistry.registerModules([ClientSideRowModelModule, AllCommunityModule]);
provideGlobalGridOptions({ theme: 'legacy' });

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css'
})
export class AgGridComponent {
  @ViewChild(AgGridAngular) grid!: AgGridAngular;

  exportAsCSV() {
    this.grid.api.exportDataAsCsv();
  }

  rowClassRules = {
    'red-row': (p: any) => p.data.Carmake === 'Toyota',
    'blue-row': (p: any) => p.data.Carmake === 'Mercedes',
  };

  pagination = true;
  paginationPageSize = 10;
  paginationPageSizeSelector = [5, 15];

  defaultColDef: ColDef = {
    flex: 1,
    filter: true,
    editable: true,
    floatingFilter: true,
    sortable: true,
    resizable: true,
  };

  title = 'app';

  rowData = [
    { Carmake: 'Toyota', model: 'Model T', price: 2500000, exportFromCountry: 'Japan', electric: false },
    { Carmake: 'Ford', model: 'Model F', price: 5000000, exportFromCountry: 'USA', electric: false },
    { Carmake: 'Tesla', model: 'Model Tes', price: 6500000, exportFromCountry: 'UK', electric: true },
    { Carmake: 'Mercedes', model: 'EQA', price: 5000000, exportFromCountry: 'India', electric: true },
    { Carmake: 'Fiat', model: 500, price: 1500000, exportFromCountry: 'Europe', electric: false },
    { Carmake: 'Nissan', model: 'Juke', price: 2000000, exportFromCountry: 'Mexico', electric: false },
    { Carmake: 'BMW', model: 'iX', price: 7200000, exportFromCountry: 'Germany', electric: true },
    { Carmake: 'Hyundai', model: 'Kona', price: 2300000, exportFromCountry: 'South Korea', electric: true },
    { Carmake: 'Chevrolet', model: 'Bolt', price: 3100000, exportFromCountry: 'USA', electric: true },
    { Carmake: 'Audi', model: 'Q5', price: 4800000, exportFromCountry: 'Germany', electric: false },
    { Carmake: 'Kia', model: 'EV6', price: 4200000, exportFromCountry: 'South Korea', electric: true },
    { Carmake: 'Honda', model: 'Civic', price: 1800000, exportFromCountry: 'Japan', electric: false },
    { Carmake: 'Volkswagen', model: 'ID.4', price: 4600000, exportFromCountry: 'Germany', electric: true },
    { Carmake: 'Renault', model: 'ZOE', price: 2700000, exportFromCountry: 'France', electric: true },
    { Carmake: 'Peugeot', model: '208', price: 2500000, exportFromCountry: 'France', electric: false },
    { Carmake: 'BYD', model: 'Atto 3', price: 3000000, exportFromCountry: 'China', electric: true },
  ];

  colDefs: ColDef[] = [
    {
      field: 'Carmake',
      headerName: 'Name',
      cellRenderer: ButtonCellRendererComponent,
      filter: 'agTextColumnFilter',
      checkboxSelection: true,
      sortable: true,
      sort: 'asc',
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: { values: ['Tesla', 'Toyota', 'Ford', ''] },
    },
    {
      field: 'model',
      headerName: 'Models',
      filter: 'agTextColumnFilter',
      editable: false,
    },
    {
      field: 'price',
      valueFormatter: (p) => '$' + p.value.toLocaleString(),
      filter: 'agNumberColumnFilter',
      cellClassRules: {
        'yellow-cell': (p) => p.value > 3000000,
      },
    },
    {
      field: 'exportFromCountry',
      headerName: 'Country',
      filter: 'agSetColumnFilter',
    },
    {
      field: 'electric',
      filter: 'agSetColumnFilter',
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: { values: [true, false] },
    },
  ];
}



