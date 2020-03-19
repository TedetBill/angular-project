import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string = " Un autre Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  @Input() numberOfLoves: int;

  constructor() { }

  ngOnInit(): void {
  }

  getNumbersLove() {
  	return this.numberOfLoves;
  }
  onLike() {
  this.numberOfLoves += 1;
    console.log('On Like !');
	}
  onDisLike() {
  this.numberOfLoves -= 1;
  }
  getColor() {
  	if(this.numberOfLoves > 0){
  		return 'aquamarine';
  	} else if (this.numberOfLoves < 0){
  		return 'darksalmon';
  	} else{
  		return 'whitesmoke';
  	}
  }

}
