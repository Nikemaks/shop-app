import { Component, Input, OnInit } from '@angular/core';
import { ListItemsInterface } from "../../../../interfaces/list-items";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  @Input() editItem!: ListItemsInterface;
  formGroup = this.fb.group({
    price: new FormControl('', [Validators.required]),
    quality: new FormControl('', [Validators.required])
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  countValue(editItem: ListItemsInterface) {
    return editItem?.price * editItem?.quality;
  }
}
