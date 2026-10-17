const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
test('Destinos locais e âncoras existem nas duas páginas',()=>{for(const file of ['index.html','curriculo.html']){const html=fs.readFileSync(file,'utf8');for(const [,href]of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(/^(https?:|mailto:)/.test(href))continue;if(href.startsWith('#'))assert.ok(html.includes('id="'+href.slice(1)+'"'),href);else assert.ok(fs.existsSync(href.split('#')[0]),href);}}});
test('PT/EN, preferência de idioma e componentes das categorias',()=>{const source=fs.readFileSync('script.js','utf8');const elements=Array.from(fs.readFileSync('index.html','utf8').matchAll(/data-i18n="([^"]+)"/g),m=>({dataset:{i18n:m[1]}}));const buttons=['pt','en'].map(language=>({dataset:{language},setAttribute(k,v){this[k]=v},addEventListener(){}}));const grid={children:[],append(card){this.children.push(card);for(const m of card.innerHTML.matchAll(/data-i18n="([^"]+)"/g))elements.push({dataset:{i18n:m[1]}})}};const dummy={setAttribute(){}};let saved;const document={documentElement:{},getElementById:()=>grid,createElement:()=>({}),querySelector:s=>s.startsWith('meta')?{}:dummy,querySelectorAll:s=>s==='[data-i18n]'?elements:s==='[data-language]'?buttons:[]};const context={document,window:{},localStorage:{getItem:()=>null,setItem:(k,v)=>saved=v}};vm.createContext(context);vm.runInContext(source,context);assert.equal(grid.children.length,3);for(const el of elements)assert.ok(el.textContent,'Tradução ausente: '+el.dataset.i18n);context.setLanguage('en');assert.equal(document.documentElement.lang,'en');assert.equal(saved,'en');assert.equal(buttons[1]['aria-pressed'],'true');assert.equal(elements.find(el=>el.dataset.i18n==='projects').textContent,'Projects');context.setLanguage('pt');assert.equal(document.documentElement.lang,'pt-BR');});

test('Currículo: traduções completas e status históricos preservados',()=>{
 const html=fs.readFileSync('curriculo.html','utf8');
 const elements=Array.from(html.matchAll(/data-cv="([^"]+)"/g),m=>({dataset:{cv:m[1]}}));
 const button={setAttribute(){},addEventListener(){}};
 const meta={};let saved;
 const document={documentElement:{},getElementById:()=>button,querySelector:s=>s.startsWith('meta')?meta:{setAttribute(){}},querySelectorAll:s=>s==='[data-cv]'?elements:[]};
 const context={document,window:{},localStorage:{getItem:()=>null,setItem:(key,value)=>saved=value}};
 vm.createContext(context);vm.runInContext(fs.readFileSync('curriculo.js','utf8'),context);
 for(const language of ['en','pt']){
  context.setLanguage(language);
  for(const element of elements)assert.ok(element.textContent,'Tradução ausente: '+element.dataset.cv);
  assert.equal(saved,language);
 }
 context.setLanguage('en');
 const english=elements.map(e=>e.textContent).join('\n');
 assert.match(english,/balance of payments/);
 assert.match(english,/seasonal adjustment/);
 assert.match(english,/NOV 2023/);
 assert.match(english,/AUG 2025 — PRESENT/);
 assert.doesNotMatch(english,/AWS AI Practitioner/);
 assert.match(english,/generative AI/);
 context.setLanguage('pt');
 const portuguese=elements.map(e=>e.textContent).join('\n');
 assert.doesNotMatch(portuguese,/conclusão a confirmar/);
 assert.match(portuguese,/MAR 2020 — DEZ 2025/);
});
