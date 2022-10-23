// Our football team finished the championship. The result of each match looks like “x:y”. Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]


// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x>y – 3 points
// if x<y – 0 point
// if x=y – 1 point

function points(games) {
    var sum=0;
    for (var i=0; i<games.length; ++i)
    {
      if (games[i][0]>games[i][2])
        sum+=3;
      if (games[i][0]==games[i][2])
        sum+=1;
    }
    return sum;
  }



  //Or

  const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)
//---------------------------


  function points(games) {
    let total = 0;
    games.map(game => {
      if (game[0] === game[2]) {
        total += 1;
      } else if (game[0] > game[2]) {
        total += 3;
      }
    });
    return total;
  }