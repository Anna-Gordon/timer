const input = process.argv.slice(2);

for (let i = 0; i < input.length; i++) {

  let seconds = Number(input[i])
  
  if (seconds > 0 || typeof seconds === "string"){
    setTimeout(() => {
      process.stdout.write('\x07');
    }, seconds * 1000);
  }
}
