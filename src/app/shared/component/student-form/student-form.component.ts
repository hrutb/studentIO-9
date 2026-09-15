import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istudent } from '../../model/student.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements  OnInit ,OnChanges {

IsInEditMode:boolean =false;

  constructor(private _snckbar:MatSnackBar) { }

 @ViewChild('stdForm') stdForm!:NgForm;
 @Output() emitNewObj =new EventEmitter<Istudent>();
 @Input()  emiteditObj!:Istudent;
@Output()  emitupdateObj = new EventEmitter<Istudent>() ;
        emitObj!:Istudent


   ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges): void {
        this.emitObj  = changes['emiteditObj']['currentValue'] ;
        if(this.emitObj){
               this.IsInEditMode =true;
               this.stdForm.form.patchValue(this.emitObj);

        }
    }

  onAdd(){
    if(this.stdForm.form.valid){
        let newObj = {
               ...this.stdForm.form.value ,
                     id:Date.now()
              }
        this.emitNewObj.emit(newObj) ;
        this.stdForm.reset() ;
        this._snckbar.open('new student added successfully...!','close',{
                duration:3000
            })
          }

  }
  onUpdate(){
      if(this.stdForm.form.valid){
        let updateId= this.emiteditObj.id;
        let updateObj= {
              ...this.stdForm.form.value,
               id:updateId
             }
           this.emitupdateObj.emit(updateObj);
           this.stdForm.reset();
          this.IsInEditMode= false;

        }
   }


}
