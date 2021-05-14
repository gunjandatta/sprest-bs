var fs = require('fs');

// Copy the popper library
fs.copyFileSync("src/icons/svgs/index.d.ts", "build/icons/svgs/index.d.ts");

// Log
console.log("Successfully copied the icons definition");