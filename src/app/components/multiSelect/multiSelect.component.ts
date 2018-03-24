/**
 * Multi Select dropdown component
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'multi-select',
  templateUrl: './multiSelect.component.html',
  styleUrls: ['./multiSelect.component.css']
})
export class MultiSelectComponent implements OnInit{
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit(){
    this.dropdownList = [
      {"id":1,"itemName":"Mario"},
      {"id":2,"itemName":"Grand Theft"},
      {"id":3,"itemName":"Call of Duty"},
      {"id":4,"itemName":"God of War"},
      {"id":5,"itemName":"FIFA 16"},
      {"id":6,"itemName":"Destiny"},
      {"id":7,"itemName":"Overwatch"},
      {"id":8,"itemName":"Dark Souls"},
      {"id":9,"itemName":"Super Mario"},
      {"id":10,"itemName":"Pac-man"}
    ];
    this.selectedItems = [
      {"id":1,"itemName":"Mario"},
      {"id":2,"itemName":"Grand Theft"},
      {"id":6,"itemName":"Destiny"},
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text:"Select Games",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      classes:"myclass custom-class"
    };
  }
  onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any){
    console.log(items);
  }
  onDeSelectAll(items: any){
    console.log(items);
  }
}

