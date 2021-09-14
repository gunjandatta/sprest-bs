var fs = require('fs');

// Copy a directory
function copyDirectory(src, target, appendFl) {
    // See if the target exists
    if (fs.existsSync(target)) {
        // Delete the target if we aren't appending files to it
        appendFl != true ? deleteDirectory(target) : null;
    }

    // Create the directory
    fs.mkdirSync(target);

    // Ensure the directory exists
    if (fs.existsSync(src) && fs.lstatSync(src).isDirectory()) {
        // Get each item in the directory
        fs.readdirSync(src).forEach(function(item) {
            var srcPath = src + "/" + item;
            var targetPath = target + "/" + item;

            // See if this is a directory
            if (fs.lstatSync(srcPath).isDirectory()) {
                // Create the directory
                fs.mkdirSync(targetPath);

                // Copy the folder recursively
                copyDirectory(srcPath, targetPath);
            } else {
                // Ensure we don't overwrite files
                if (appendFl != true || fs.existsSync(targetPath) == false) {
                    // Copy the file
                    fs.copyFileSync(srcPath, targetPath);
                }
            }
        });
    }
}

// Deletes a directory
function deleteDirectory(src) {
    // Ensure the directory exists
    if (fs.existsSync(src) && fs.lstatSync(src).isDirectory()) {
        // Get each item in the directory
        fs.readdirSync(src).forEach(function(item) {
            var srcPath = src + "/" + item;

            // See if this is a directory
            if (fs.lstatSync(srcPath).isDirectory()) {
                // Delete the folder recursively
                deleteDirectory(srcPath);
            } else {
                // Delete the file
                fs.unlinkSync(srcPath);
            }
        });

        // Delete the directory
        fs.rmdirSync(src);
    }
};

// Log
console.log("Cleaning the files...");

// Delete the folders
deleteDirectory("./build");
deleteDirectory("./dist");
deleteDirectory("./docs");
deleteDirectory("./src/icons");

// Copy the icons
copyDirectory("./node_modules/gd-bs/src/icons", "./src/icons");

// Log
console.log("Successfully cleaned the library");