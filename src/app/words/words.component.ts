import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-words",
  templateUrl: "./words.component.html",
  styleUrls: ["./words.component.css"]
})
export class WordsComponent implements OnInit {
  extraBeer = [
    "cascade",
    "nugget",
    "chinook",
    "citra",
    "hallertauer",
    "willamette",
    "brettanomyces",
    "Saccharomyces",
    "Wyeast",
    "Well balanced. Ferments dry, finishes soft",
    "Slightly nutty, soft, clean and tart finish",
    "Clean flavors accentuate hops; very versatile",
    "A blend of ale and lager strains that creates a clean, crisp, light American lager style",
    "A malty, complex profile that clears well",
    "Develops estery and somewhat peppery spiceyness"
  ];

  words = [
    "beer",
    "hops",
    "hippy",
    "hipster",
    "pot",
    "hemp",
    "moog",
    "at the Wedge",
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
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      numberOfWords: "50",
      numberOfParagraphs: "1",
      moreBeer: false
    });
  }

  getNumberOfWords() {
    const shuffledWords = [...this.words]; //make a copy of the array to prevent mutation
    shuffledWords.sort(() => 0.5 - Math.random());
    this.randomlyInsertPeriods(shuffledWords);
    this.randoWords = shuffledWords
      .slice(0, this.registerForm.value.numberOfWords)
      .join(" ");
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
    this.randomNumber = this.getRandomNumber(3, 10);
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
  addperiod(words) {
    // add a period to end of words
    return (words = words + ".");
    // console.log("test for add words", words);
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.getNumberOfWords();
  }
}
