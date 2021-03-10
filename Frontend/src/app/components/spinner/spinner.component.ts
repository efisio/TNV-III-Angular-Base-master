import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  loading: boolean;

  constructor(private spinnerService: SpinnerService) {

    this.spinnerService.isLoading.subscribe((v) => {
      // console.log(v);
      this.loading = v;
    });

  }
  ngOnInit() {
  }

}

