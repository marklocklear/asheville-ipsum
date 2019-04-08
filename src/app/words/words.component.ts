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
    "weird",
    "goth",
    "green man",
    "farm to table",
    "weed",
    "pot",
    "hemp",
    "moog",
    "wedge",
    "brewing",
    "pack square",
    "AB Tech",
    "UNCA",
    "Biltmore",
    "foody",
    "Sandy Mush",
    "Leicester",
    "River Arts District",
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
    "pale ale"
  ];
  randoWords = "";

  constructor() {}

  ngOnInit() {}
  getFiveWords() {
    const shuffled = this.words.sort(() => 0.5 - Math.random());
    this.randoWords = shuffled.slice(0, 5).join(" ");
  }
  getTenWords() {
    const shuffled = this.words.sort(() => 0.5 - Math.random());
    this.randoWords = shuffled.slice(0, 10).join(" ");
  }

  getNumberOfWords($event) {
    console.log($event.value);
    const shuffled = this.words.sort(() => 0.5 - Math.random());
    this.randoWords = shuffled.slice(0, $event.value).join(" ");
  }

  getSentence(n) {}
}
