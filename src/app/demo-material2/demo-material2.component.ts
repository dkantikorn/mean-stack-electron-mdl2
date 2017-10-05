import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-demo-material2',
  templateUrl: './demo-material2.component.html',
  styles: []
})
export class DemoMaterial2Component implements OnInit {
  images: Array<Object> = [];
  modalActions = new EventEmitter<string | MaterializeAction>();
  selectOptions: any = [
    { name: 'Java', value: 1500 },
    { name: 'AngularJs', value: 1200 },
    { name: 'Angular', value: 1600 },
    { name: 'Bootstrap3', value: 750 },
    { name: 'Bootstrap4', value: 850 },
    { name: 'Material', value: 900 },
    { name: 'Material2', value: 950 },
    { name: 'React', value: 1200 },
    { name: 'React Native', value: 1300 }
  ];
  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }


  handleDrop(e) {
    const files: File = e.dataTransfer.files;
    const self = this;
    Object.keys(files).forEach((key) => {
      if (files[key].type === 'image/png' || files[key].type === 'image/jpeg') {
        self.images.push(files[key]);
      } else {
        alert('File must be a PNG or JPEG!');
      }
    });

    return false;
  }

  imageStats() {
    const sizes: Array<number> = [];
    let totalSize: number = 0;
    this.images.forEach((image: File) => sizes.push(image.size));
    sizes.forEach((size: number) => totalSize += size);
    return {
      size: totalSize,
      count: this.images.length
    };
  }
}
