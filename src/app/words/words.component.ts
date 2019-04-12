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
    "pot",
    "hemp",
    "moog",
    "at wedge",
    "drinking beer",
    "brewing",
    "in pack square",
    "AB Tech",
    "stay weird",
    "goth",
    "at the Orange Peel",
    "green man",
    "at the grove park",
    "on patton",
    "in Montford",
    "farm-to-table",
    "smoking weed",
    "puffing on pot",
    "with dreads",
    "hemp",
    "moog",
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
    "in West Asheville",
    "French Broad",
    "Subaru",
    "bumper stickers",
    "girl with hairy arm pits",
    "girl with hairy legs",
    "hipster with a bun",
    "smelly pits",
    "drum circle",
    "eating hippy food",
    "dude with a man bun"
  ];
  randoWords = "";
  randomNumber = 1;
  arr: string[];
  constructor() {}

  ngOnInit() {}

  getNumberOfWords($event) {
    const shuffled = this.words.sort(() => 0.5 - Math.random());
    this.randomlyInsertPeriods(shuffled);
    this.randoWords = shuffled.slice(0, $event.value).join(" ");
    this.randoWords = this.capitalizeFirstLetter(this.randoWords);
    this.randoWords = this.addPeriod(this.randoWords);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randomlyInsertPeriods(words) {
    var arrayLength = this.words.length;
    this.randomNumber = this.getRandomNumber(5, 10);
    for (var i = 0; i < arrayLength; i++) {
      //inserts a period based on the randomNumber from above and also
      //capitalizes the word after the period
      if ((i + 1) % this.randomNumber == 0) {
        words.splice(i, 0, ".");
        words.splice(i + 1, 1, this.capitalizeFirstLetter(words[i + 1]));
      }
    }
    return words;
  }

  addPeriod(words) {
    return words + ".";
  }
}
