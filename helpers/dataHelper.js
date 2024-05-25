const fs = require('fs');
const path = require('path');

module.exports = {
  getDataFromJSON: function (filePath) {
    const fullPath = path.resolve(__dirname, filePath);
    return JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
  }
};
