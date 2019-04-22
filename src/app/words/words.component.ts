import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-words",
  templateUrl: "./words.component.html",
  styleUrls: ["./words.component.scss"]
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
    "riding inLaZoom",
    "eat local",
    "drink local",
    "flat iron building",
    "in the mountains",
    "pisgah",
    "pale ale",
    "in West Asheville",
    "French Broad",
    "Subaru",
    "bumper stickers",
    "a girl with hairy arm pits",
    "a girl with hairy legs",
    "a hipster with a bun",
    "with smelly pits",
    "drum circle",
    "eating hippy food",
    "dude with a man bun"
  ];

  randoWords = "";
  randomNumber = 1;
  arr: string[];
  registerForm: FormGroup;
  paragraphs = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      numberOfWords: "50",
      numberOfParagraphs: "1",
      moreBeer: false
    });
  }

  onSubmit() {
    //update array based on the number of paragraphs user selects
    this.paragraphs.length = this.registerForm.value.numberOfParagraphs;
    //loop through array and run getNumberOfWords for each element
    for (var i = 0; i < this.paragraphs.length; i++) {
      this.paragraphs[i] = this.getNumberOfWords();
    }
  }

  getNumberOfWords() {
    let words;
    const shuffledWords = [...this.words]; //make a copy of the array to prevent mutation
    shuffledWords.sort(() => 0.5 - Math.random());
    this.randomlyInsertPeriods(shuffledWords);
    words = shuffledWords
      .slice(0, this.registerForm.value.numberOfWords)
      .join(" ");
    words = this.capitalizeFirstLetter(words);
    words = this.addPeriod(words);
    return words;
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
}
