// Once upon a time, on a way through the old wild mountainous west,…

// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
// How I crossed a mountainous desert the smart way.

// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]

// You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or
// { "WEST" }
// or
// [West]

// Other examples:

// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore,
//the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite
//but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
// Task

// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

//     The Haskell version takes a list of directions with data Direction = North | East | West | South.
//     The Clojure version returns nil when the path is reduced to nothing.
//     The Rust version takes a slice of enum Direction {North, East, West, South}.

// See more examples in "Sample Tests:"
// Notes

//Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

function dirReduc(directions) {
  //   let n = 0;
  //   let w = 0;
  //   let s = 0;
  //   let e = 0;

  //   for (const d of directions) {
  //     switch (d) {
  //       case "NORTH":
  //         n++;
  //         break;
  //       case "EAST":
  //         e++;
  //         break;
  //       case "SOUTH":
  //         s++;
  //         break;
  //       case "WEST":
  //         w++;
  //         break;
  //     }
  //   }
  //   if (n == 1 && s == 1 && e == 1 && w == 1) return directions;
  //   console.log(`directions start ${directions}`);
  //   if (n > 0 && s > 0) {
  //     while (true) {
  //       console.log(` before s ${s} and n ${n} with ${directions}`);
  //       directions.splice(
  //         directions.findLastIndex((nth) => nth == "NORTH"),
  //         1
  //       );
  //       directions.splice(
  //         directions.findLastIndex((sth) => sth == "SOUTH"),
  //         1
  //       );
  //       n--;
  //       s--;
  //       console.log(`w after s ${s} and n ${n} with ${directions}`);
  //       if (n == 0 || s == 0) break;
  //     }
  //   }
  //   if (e > 0 && w > 0) {
  //     while (true) {
  //       //   if (e == 1 && w == 1) break;
  //       console.log(`before before w ${w} and e ${e} with ${directions}`);
  //       directions.splice(
  //         directions.findLastIndex((est) => est == "EAST"),
  //         1
  //       );

  //       directions.splice(
  //         directions.findLastIndex((wst) => wst == "WEST"),
  //         1
  //       );
  //       console.log(` before w ${w} and e ${e} with ${directions}`);
  //       w--;
  //       e--;
  //       console.log(`w after w ${w} and e ${e} with ${directions}`);
  //       if (e == 0 || w == 0) break;
  //     }
  //   }
  //   for (let i = 0; i < directions.length; i++) {
  let i = directions.length - 1;

  while (i >= 0) {
    if (
      (directions[i + 1] !== directions.length &&
        directions[i] == "NORTH" &&
        directions[i + 1] == "SOUTH") ||
      (directions[i] == "SOUTH" && directions[i + 1] == "NORTH")
    ) {
      directions.splice(i, 1);
      directions.splice(i, 1);
    } else if (
      (directions[i + 1] !== directions.length &&
        directions[i] == "EAST" &&
        directions[i + 1] == "WEST") ||
      (directions[i] == "WEST" && directions[i + 1] == "EAST")
    ) {
      directions.splice(i, 1);
      directions.splice(i, 1);
    } else {
      i--;
    }
  }

  return directions;
}
console.log(
  dirReduc([
    "EAST",
    "EAST",
    "WEST",
    "NORTH",
    "WEST",
    "EAST",
    "EAST",
    "SOUTH",
    "NORTH",
    "WEST",
  ])
);

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]; = []
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]; = WEST
// ["WEST","EAST","SOUTH","NORTH","SOUTH","WEST","WEST","EAST","NORTH","SOUTH"] = SOUTH, WEST
// "EAST","EAST","WEST","NORTH","WEST","EAST","EAST","SOUTH","NORTH","WEST"] = EAST, NORTH

//   const len = n + w + s + e;

//   for (let i = 0; i < len; i++) {
//     if (n > 0) {
//       dir.push("NORTH");
//       n--;
//     }
//     if (e > 0) {
//       dir.push("EAST");
//       e--;
//     }
//     if (s > 0) {
//       dir.push("SOUTH");
//       s--;
//     }
//     if (w > 0) {
//       dir.push("WEST");
//       w--;
//     }
//   }
