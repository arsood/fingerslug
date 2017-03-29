# Fingerslug

Fingerslug is a simple utility that takes in a file name and outputs a slugged and fingerprinted version of the name.

## Usage

```javascript
const fingerSlug = require("fingerslug");

fingerSlug("Hello World.docx"); // Gives back Hello-World-e177bc5a5fda481f96404a44001d3ec2.docx
```