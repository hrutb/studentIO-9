import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istudent } from '../../model/student.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  constructor(private  _matDialog:MatDialog, private _snackbar:MatSnackBar) { }

   @Input() getStudent!:Istudent[];
  @Output() emiteditStd = new EventEmitter<Istudent>() ;
  ngOnInit(): void {

  }

 onEditObj(std:Istudent){
    this.emiteditStd.emit(std);

  }

  onRemove(removeId:number){
          let config  =new MatDialogConfig();
            config.disableClose = true ;
            config.width=  '700px';
       let _matDialoggRef= this._matDialog.open(GetConfirmComponent);

       _matDialoggRef.afterClosed().subscribe({
              next:data =>{
              //  this.childCompo.on()
               if(data){
                 let getIndex = this.getStudent.findIndex(ele=>ele.id===removeId);
                      this.getStudent.splice(getIndex,1);
                       this._snackbar.open('delete successfully','close',{
                                  duration:3000
                       })

               }
               },
               error :err=>{
                    this._snackbar.open(err,'close',{
                                   duration:3000
                    })
                 }
           })

  }

}
