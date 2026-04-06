var fs = require('fs');

// Log
console.log("Copying the svg definitions...");

// Get each item in the icons folder
fs.readdirSync("./src/icons/svgs").forEach(function (item) {
    var srcPath = "./src/icons/svgs/" + item;
    var targetPath = "./build/icons/svgs/" + item;

    // See if this is a definition file
    if(item.endsWith(".d.ts")) {
        // Copy the file
        fs.copyFileSync(srcPath, targetPath);
    }
});

// Log
console.log("Copying the custom definitions...");

// Get each item in the icons folder
fs.readdirSync("./src/icons/custom").forEach(function (item) {
    var srcPath = "./src/icons/custom/" + item;
    var targetPath = "./build/icons/custom/" + item;

    // See if this is a definition file
    if(item.endsWith(".d.ts")) {
        // Copy the file
        fs.copyFileSync(srcPath, targetPath);
    }
});
