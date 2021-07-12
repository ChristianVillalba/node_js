// Documentation: node.js - Api - File System

// First step: require module to interact with the File System:
const fs = require('fs'); // const can't be overwrited

// method called copyFileSync in order to create a copy of my file
fs.copyFileSync("file1.txt" , "file2.txt");
// This code will find find file1.txt and will make a copy called file2.txt
// If file2.txt already exists, our method will replace the existing content
