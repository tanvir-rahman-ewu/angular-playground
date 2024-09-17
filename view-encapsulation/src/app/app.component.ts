import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirsComponent } from "./components/firs/firs.component";
import { SecondComponent } from './components/second/second.component';
import { BehaviorSubject, map, of, Subject } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirsComponent, SecondComponent, NgFor, AsyncPipe, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public subj!: Subject<number>;
  public behavSub!: BehaviorSubject<number>;

  ngOnInit() {
    if (!this.subj) {
      this.subj = new Subject<number>();
    }

    if (!this.behavSub) {
      this.behavSub = new BehaviorSubject(10);
    }

    this.subj.next(10);

    this.subj.subscribe(data => {
      console.log(data);
    });

    this.subj.next(1000);


    this.behavSub.subscribe(res => {
      console.log(res);
    });

    this.behavSub.next(1000);

    this.behavSub.subscribe(res => {
      console.log(res);
    })
  }
}
