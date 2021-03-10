const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let string = "";

rl.question('What\'s your name? Nicknames are also acceptable  ', (answer) => {
  // TODO: Log the answer in a database
  let q1 = answer;

  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.pause();

  rl.question('What\'s an activity you like doing?  ', (answer2) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer2}`);
  
    rl.pause();

    rl.question('What do you listen to while doing that?  ', (answer3) => {
      // TODO: Log the answer in a database
      console.log(`Thank you for your valuable feedback: ${answer3}`);
    
      rl.pause();

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)  ', (answer4) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback: ${answer4}`);

        rl.pause();

        rl.question('What\'s your favourite thing to eat for that meal?  ', (answer5) => {
          // TODO: Log the answer in a database
          console.log(`Thank you for your valuable feedback: ${answer5}`);
  
          rl.pause();

          rl.question('Which sport is your absolute favourite?  ', (answer6) => {
            // TODO: Log the answer in a database
            console.log(`Thank you for your valuable feedback: ${answer6}`);
    
            rl.pause();

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!  ', (answer7) => {
              // TODO: Log the answer in a database
              console.log(`Thank you for your valuable feedback: ${answer7}`);

              console.log(`They call me ${answer}, and I enjoy ${answer2}. I like to listen to ${answer3}, my favourite meal is ${answer4}, where I'll usually order ${answer5}. My favourite sport is ${answer6}, and if I had a superpower it would probably be ${answer7}`);
      
              rl.close();
            });

          });
      
        });

      });

    });

  });

});






// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!