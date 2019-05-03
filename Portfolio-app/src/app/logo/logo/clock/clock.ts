import { OnInit } from '@angular/core';


export class Clock implements OnInit {
  div_element = document.getElementById('tsClock');

  ngOnInit(): void {

  }

  time() {
    //  Stała local_time pobiera aktualny czas.
  const local_time = new Date;
  return this.div_element.innerText = local_time.toLocaleTimeString();
}


}
