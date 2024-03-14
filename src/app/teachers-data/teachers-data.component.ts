import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers-data',
  templateUrl: './teachers-data.component.html',
  styleUrls: ['./teachers-data.component.css']
})
export class TeachersDataComponent implements OnInit {
  filterText: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  filterTable() {
    let filter = this.filterText.toUpperCase();
    let table = document.getElementById("myTable");

    if (table !== null) { // Explicit null check
      let tr = table.getElementsByTagName("tr");

      for (let i = 0; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          const txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }
}

