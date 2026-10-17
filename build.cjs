const fs=require('node:fs');
const files=['index.html','style.css','script.js','icons.svg','curriculo.html','curriculo.css','curriculo.js','perfil.jpg','.nojekyll'];
fs.mkdirSync('dist',{recursive:true});for(const file of files)fs.copyFileSync(file,'dist/'+file);
console.log('Build estático concluído: dist/ ('+files.length+' arquivos).');
