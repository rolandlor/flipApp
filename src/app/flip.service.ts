import { Injectable } from '@angular/core';
import { CardItem } from './cardItem.model';
@Injectable()
export class FlipService {
  cardItems: CardItem[] = [];
  counter: number = 0;
  pointCounter: number = 0;
  compareTwoCard: string[] = [];
  indexes: number[] = [];
  sameIndexes: number[] = [];
  numberOfSolved: number = 0;
  positions = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  possibleNums = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  onCardClick(path: string, index: number) {
    this.indexes.push(index);
    if (this.indexes[1] != this.indexes[0] || this.indexes.length == 1) {
      this.compareTwoCard.push(path);
      this.pointCounter++;
      this.counter++;
      this.cardItems[this.indexes[this.indexes.length - 1]].startAnimation =
        true;

      setTimeout(() => {
        this.cardItems[index].flipped = !this.cardItems[index].flipped;
      }, 350);
      setTimeout(() => {
        this.cardItems[index].startAnimation = false;
      }, 700);
    } else {
      this.indexes.pop();
    }
    if (this.counter == 2) {
      if (this.compareTwoCard[0] == this.compareTwoCard[1]) {
        for (let value of this.indexes) {
          for (let item of this.cardItems) {
            if (item.index == value) {
              setTimeout(() => {
                this.cardItems[item.index].itemVisibility = false;
                this.numberOfSolved++;
                console.log(this.numberOfSolved);
              }, 1000);
            }
          }
        }
      } else {
        for (let item of this.indexes) {
          setTimeout(() => {
            this.cardItems[item].startAnimation = true;
            setTimeout(() => {
              this.cardItems[item].flipped = !this.cardItems[item].flipped;
            }, 350);
            setTimeout(() => {
              this.cardItems[item].startAnimation = false;
            }, 700);
          }, 1000);
        }
      }
      this.compareTwoCard = [];
      this.indexes = [];
      this.counter = 0;
    }
  }
  restart() {
    console.log(this.numberOfSolved);
    this.compareTwoCard = [];
    this.indexes = [];
    this.counter = 0;
    this.numberOfSolved = 0;
    this.pointCounter = 0;
    this.positions = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ];
    this.possibleNums = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    ];
    this.init();
  }
  init() {
    // this.cardItems = [];
    function randomGen(from: number, to: number) {
      let num = Math.floor(Math.random() * to) + from;
      return num;
    }
    let numOfPos = 19;
    let numOfPosNums = 18;
    for (let i = 0; i < 10; i++) {
      let amit = this.possibleNums[randomGen(0, numOfPosNums)];
      let ahova1 = randomGen(0, numOfPos);

      this.cardItems[this.positions[ahova1]] = new CardItem(
        this.positions[ahova1],
        amit
      );
      this.positions.splice(ahova1, 1);
      numOfPos -= 1;
      let ahova2 = randomGen(0, numOfPos);
      this.cardItems[this.positions[ahova2]] = new CardItem(
        this.positions[ahova2],
        amit
      );

      numOfPos -= 1;
      this.positions.splice(ahova2, 1);
      this.possibleNums.splice(this.possibleNums.indexOf(amit), 1);
      numOfPosNums -= 1;
    }
  }
}
