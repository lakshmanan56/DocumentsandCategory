import { Component } from '@angular/core';


@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css'],
})
export class CategoryComponent {

  isEnable: boolean = false
    
   constructor() {
    
   }

    ngOnInit(): void {
        if(this.isEnable == true)
         {
            console.log(this.isEnable)
         }
       
    }

    getReadableStatus(job) {

        return job.isRunning() ? "Running" : job.hasErrors() ? "Failed" : "Succeeded ";  // Noncompliant
      }

      assign() {
        var a = b;
        var c = a;
        var b = c; // Noncompliant: c and b are already the same

      }

      letDeclare() {
        let myName = "Alice";
      }


   

   
}