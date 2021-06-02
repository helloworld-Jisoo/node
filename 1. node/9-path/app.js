const path = require('path');

console.log(__dirname );
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename,'js'));

// dirname
console.log(path.dirname(__filename));

// extension //확장자 
console.log(path.extname(__filename));

// parse 전체 경로 분리
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute?',path.isAbsolute(__dirname));
console.log('isAbsolute?',path.isAbsolute('../'));

// nomarlize
console.log(path.normalize('./folder////////sub'));

// join
console.log(path.join(__dirname,'image')); //console.log(__dirname +path.sep+'image');