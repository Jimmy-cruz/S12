import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  educacion!:any;
  conocimiento!:any;
  experiencia!:any;
  contacto!:any;

  nombre!:String;

  // enviar(){
  //   alert('GRACIAS POR COMUNICARNOS CON NOSOTROS')
  // }

  public formContacto!: FormGroup;

  constructor(private formBulder:FormBuilder){

  }

  ngOnInit(): void{
    this.formContacto = this.formBulder.group({
      nombre:['',
        [Validators.required]
      ],
      email:['',
        [Validators.required,
        Validators.email]
      ],
      telefono:['',
        [Validators.required]
      ],
      asunto:['',
        [Validators.required,]
      ],
      mensaje:['',
        [Validators.required,]
      ]

    })
  }

  send():any{
    alert('GRACIAS POR COMUNICARNOS CON NOSOTROS');
  }


}
