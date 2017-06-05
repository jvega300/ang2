import { Component } from '@angular/core';

@Component({
  selector: 'my-footer',
  template: `<h1>Hello {{titulo}}</h1>`,
})

export class FooterComponent  { titulo = 'Footer'; }
