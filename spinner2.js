// spinner2.js

const spinner = (rotations) => {
  // symbols for one complete rotation
  const animation = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']

  // set counter for incrementing delay
  let timeoutCounter = 100;

  // loop through animation for each rotation
  for (let i = 0; i < rotations; i++) {
    for (const sym of animation) {
      setTimeout(() => {
        process.stdout.write(`\r${sym}    `);
      }, timeoutCounter);
      timeoutCounter += 200;
    }
  }
  // End sequence by printing a newline
  setTimeout(() => {
    process.stdout.write('\r\n');
  }, timeoutCounter);
};

spinner(1);