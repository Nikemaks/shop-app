import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ListItemsInterface } from "../../../../interfaces/list-items";
import { UntypedFormBuilder, UntypedFormControl, Validators } from "@angular/forms";
import { LocalStorageService, SHOP_ITEMS } from "../../../../services/local-storage.service";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  @Input() editItem!: ListItemsInterface;
  @Input() listItems!: ListItemsInterface[];
  @Output() removeItem = new EventEmitter<number>();
  @Output() saveItem = new EventEmitter<number>();

  formGroup = this.fb.group({
    price: new UntypedFormControl('', [Validators.required]),
    count: new UntypedFormControl('', [Validators.required])
  })

  constructor(private fb: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup.patchValue(this.editItem);
    this.formGroup.valueChanges.subscribe(value => {
      this.countValue();
    })
  }

  countValue() {
    return this.formGroup.get('price')?.value * this.formGroup.get('count')?.value;
  }

  save() {
    this.editItem = Object.assign(this.editItem, {
      price: this.formGroup.get('price')?.value,
      count: this.formGroup.get('count')?.value
    });
    this.saveItem.emit();
  }

  remove() {
    this.removeItem.emit(this.editItem.id);
  }
}
