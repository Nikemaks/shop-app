import { Component, Input, OnInit } from '@angular/core';
import { ListItemsInterface } from "../../../../interfaces/list-items";
import { FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: 'list-items',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() item!: ListItemsInterface;
  isEdit = false;
  formGroup = this.fb.group({
      isDoneControl: new FormControl(false)
    }
  );

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(value => {
      this.item.isDone = value.isDoneControl;
    });
  }

}
