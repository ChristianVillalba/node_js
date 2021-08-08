# node_js
Introduction to Node.    

Notes from the Node.js module.      
The Complete 2021 Web Development Bootcamp           
Instructor: Dr. Angela Yu       
<!-- There is a lot to unpack here... -->

## Description
This folder contains examples of:

* Native Node Modules 
    * native_node_module.js
* External Node Modules
    * index.js
More information in the respectives sections

### Dependencies
* node.js

# Node 
Node.js allows us to create a backend using Javascript     
It is fast and will allow us to create really scalable and fast running web sites.

Node.js allows us to take Javascript out of the browser and it liberates it,      
allowing it to interact directly with the hardware of a computer.      
We can write Javascript code not just in the browser to affect the behavior of your web sites,       
but also to write full applications that work on our computer.     
or somebody else's computer ( or rather, a server).

## REPL (Read Evaluation Print Loop)
It allows you to execute code in bite sized chunks,     
Similar to the console (DevTool) in our brwoser.      
By installing Node, we also installed the Node REPL      

Command to access it : 
```
node
```
Command to exit : 
```
.exit
```
or press ctrl + C (x2)


# Native Node Modules
Node, already comes bundled with a whole bunch of built in modules.       
Liberating JavaScript from the browser using Node,      
we can now use Node.js to interact with the computer directly.     
eg: use Node.js to get access directly to the local files of the computer.    

All of the native modules and the documentation of how you can use it:    
[Node Documentation](https://nodejs.org/api/)

## native_node_module.js
We're able to use Node.js to write Javascript code and execute it to affect our computer,       
including manipulating and reading and writing to our local file system.     
#### Description
This program will take file1.txt as an input and it will make a copy called file2.txt    
#### How to run the program
* change directory to node_js
* run the command
```
node native_node_module.js
```


# The NPM Package Manager 
Besides the Native Node modules,      
we can install External Node Modules     
#### NPM  (Node Package Manager) , 
It is a package manager for external modules,       
it's currently the world's largest collection of packages of code.      
[Check packages available](https://www.npmjs.com/)
These packages on NPM are bits of reusable code that somebody else wrote,      
and using NPM we can incorporate those packages into our own projects.      
NPM gets bundled with Node.


## index.js
#### Description
When we run the code, it displays two random names:    
The name of one superhero and the name of one supervillan
#### How to run the program
* change directory to node_js
* run the command
```
node index.js
```








