import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkboxlist',
  templateUrl: './checkboxlist.component.html',
  styleUrls: ['./checkboxlist.component.css']
})
export class CheckboxlistComponent implements OnInit {
  allSelected:boolean = false;
  checklist:any;
  constructor() { }

  ngOnInit(): void {
    this.checklist = [
      {id:1,value:'Elenor Anderson',isSelected:false},
      {id:2,value:'Caden Kunze',isSelected:false},
      {id:3,value:'Ms. Hortense Zulauf',isSelected:false},
      {id:4,value:'Grady Reichert',isSelected:false},
      {id:5,value:'Dejon Olson',isSelected:false},
      {id:6,value:'Jamir Pfannerstill',isSelected:false},
      {id:7,value:'Aracely Renner DVM',isSelected:false},
      {id:8,value:'Genoveva Luettgen',isSelected:false}
    ];
  }
// The master checkbox will check/ uncheck all items
checkUncheckAll() {
  this.checklist.forEach((element:any) => {
    element.isSelected = this.allSelected;
  });
}

// Check All Checkbox Checked
isAllSelected() {
  this.allSelected = this.checklist.every((item:any) => item.isSelected == true);
}
}
