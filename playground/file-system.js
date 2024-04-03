const fs = require('fs');

const content = fs.readFileSync('react-readme.md', { encoding: 'utf-8' });
const newContent = content.replace(/react/gi, 'vue');

fs.writeFileSync('vue-readme.md', newContent);
