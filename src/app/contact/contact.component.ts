import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myForm: any= FormGroup;

  constructor(private fb: FormBuilder) { }
  Email: any;
  message:any="this is sdone";
  ngOnInit(): void {
     this.myForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required,  Validators.email]],
      message: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  get getControl(){
    return this.myForm.controls;
  }
  saveForm(form: FormGroup) {
    if(form.valid){
    // console.log('Valid?', form.valid); // true or false
    // console.log('name ', form.value);
    let formData: any[]= [];
    console.warn("formDta",formData);
    // form.value.reset({});
    this.myForm.reset({});
    }else{
      this.validateAllFormFields(form);
    }
    
  }
  validateAllFormFields(form: FormGroup) {
    throw new Error('Method not implemented.');
  }
}
  // ValidateName(control: AbstractControl): { [key: string]: any } | null {
  //   if(control.value && control.value.length !=10){
  //     return {'nameInValid':true}
  //   }
  //   return null;
  // }

// function ValidateName(): any {
//   throw new Error('Function not implemented.');
// }
