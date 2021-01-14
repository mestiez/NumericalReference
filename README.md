# Numerical Reference
[Website](https://numericalreference.com/) that shows your input in comparison to some known measurements in order to give you a point of reference. 

[![preview image](https://i.imgur.com/IB4vBbs.png)](https://numericalreference.com/)

## Running locally

**Make sure you have NodeJS, npm, and TypeScript installed.**

1. Clone the repository and navigate to the `server` folder. 

2. `npm i` to install the required packages. 

3. `tsc` to compile the program.

4. `node dist/main.js --https=false` to start the server. The `https` option is set to false because you would need to provide SSL certificates which is unnecessary when running locally.
 Pass `--port` (and/or `--httpsPort`) to specifiy what ports to listen on. 8080 and 8443, respectively, by default.
 
5. Open a browser and navigate to `http://localhost:8080/`
