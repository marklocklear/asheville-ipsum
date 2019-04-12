import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-words",
  templateUrl: "./words.component.html",
  styleUrls: ["./words.component.css"]
})
export class WordsComponent implements OnInit {
  words = [
    "beer",
    "hops",
    "hippy",
    "hipster",
    "weed",
    "pot",
    "hemp",
    "moog",
    "wedge",
    "brewing",
    "pack square",
    "AB Tech",
    "stay weird",
    "goth",
    "green man",
    "grove park",
    "farm-to-table",
    "weed",
    "pot",
    "hemp",
    "moog",
    "wedge",
    "brewing",
    "at pack square",
    "at AB Tech",
    "at UNCA",
    "at Biltmore",
    "foody",
    "when in Sandy Mush",
    "when at Leicester",
    "while walking in the River Arts District",
    "poet for hire",
    "keeping it weird",
    "Bascom Lamar Lunsford",
    "12 Bones",
    "Spoon Lady",
    "LaZoom",
    "eat local",
    "drink local",
    "flat iron building",
    "mountains",
    "pisgah",
    "pale ale",
    "West Asheville",
    "French Broad",
    "Subaru",
    "bumper stickers",
    "girl with hairy arm pits",
    "girl with hairy legs",
    "hipster with a bun",
    "smelly pits"
  ];
  randoWords = "";
  randomNumber = 1;
  arr: string[];
  constructor() {}

  ngOnInit() {}

  getNumberOfWords($event) {
    
    const shuffled = this.words.sort(() => 0.5 - Math.random());
    this.randoWords = shuffled.slice(0, $event.value).join(" ");
    this.randoWords = this.capitalizeFirstLetter(this.randoWords);
    this.randoWords = this.addperiod(this.randoWords);
    // this.randomlyInsertPeriods(this.randoWords);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getRandomDigit() {
    //returns random number b/t 5 and 10
    return Math.round((this.randomNumber = Math.random() * (10 - 5) + 5));
  }

  randomlyInsertPeriods(string) {
    // convert string to array
    this.arr = string.split(" ");
    // get random number 5-10
    this.randomNumber = Math.random() * (10 - 5) + 5;
    // whatever random number is, count that number and insert period
    this.arr.splice(this.randomNumber, 0, ".");
    // convert back to string and send it on its way
    string = this.arr.join(" ");
    console.log(this.arr);
  }
  addperiod(words) {    
    // add a period to end of words
        return words = words + "."
    // console.log("test for add words", words);
   
  }
}
