import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      
    },
    nav: true
  }

  id: any[0];
  title: any[0];
  description: any;
  heading: any;
  author: any;
  image: any[0];
  date: any;
  data : any[0];
  image1: any[0];

  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.http.get('http://localhost:1337/api/posts?populate=*').subscribe((res : any) =>{
      console.log(res)
      this.data = res.data
    })  
  }
}
