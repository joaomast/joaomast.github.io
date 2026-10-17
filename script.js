const translations = {
  'Pular para o conteúdo':'Skip to content','Experiência':'Experience','Formação':'Education','Competências':'Skills','Contato':'Contact','CURRÍCULO':'CURRICULUM VITAE',
  'Cientista de dados no Banco Itaú. Bacharel em Economia pela Unicamp, com experiência em pesquisa econômica, estratégia e modelagem de risco de crédito.':'Data Scientist at Banco Itaú. Economics graduate from Unicamp, with experience in economic research, strategy and credit risk modeling.',
  'Experiência profissional':'Professional experience','AGO 2025 — ATUAL':'AUG 2025 — PRESENT','ATUAL':'CURRENT','SET 2023 — AGO 2025':'SEP 2023 — AUG 2025','MAR 2023 — AGO 2023':'MAR 2023 — AUG 2023','JAN 2023 — FEV 2023':'JAN 2023 — FEB 2023','Estágio':'Internship',
  'Formação acadêmica':'Education','Bacharelado em Economia':"Bachelor’s Degree in Economics",'Experiência acadêmica':'Academic experience',
  'Monitoria em Econometria de Séries Temporais':'Teaching Assistant — Time Series Econometrics','3 semestres':'3 semesters',
  'Monitoria em Introdução à Econometria — mestrado':'Teaching Assistant — Introduction to Econometrics (MSc program)','1 semestre':'1 semester',
  'Monitoria em Econometria':'Teaching Assistant — Econometrics','Iniciação científica em História Econômica':'Undergraduate Research — Economic History','2 semestres':'2 semesters',
  'CERTIFICAÇÃO':'CERTIFICATION','· Outubro de 2022':'· October 2022','Macroeconomia':'Macroeconomics','Estatística':'Statistics','Econometria':'Econometrics','Aprendizado de Máquina':'Machine Learning','Voltar ao topo ↑':'Back to top ↑'
};
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT), textNodes=[];
while(walker.nextNode()){const node=walker.currentNode,key=node.nodeValue.trim();if(Object.hasOwn(translations,key))textNodes.push({node,original:node.nodeValue,key});}
const languageButton=document.getElementById('language');
function setLanguage(language){
  const english=language==='en';document.documentElement.lang=english?'en':'pt-BR';
  textNodes.forEach(({node,original,key})=>{node.nodeValue=english?original.replace(key,translations[key]):original;});
  languageButton.textContent=english?'Português':'English';languageButton.lang=english?'pt-BR':'en';
  languageButton.setAttribute('aria-label',english?'Mudar para português':'Switch to English');
  document.querySelector('nav').setAttribute('aria-label',english?'Main navigation':'Navegação principal');
  document.querySelector('.portrait').alt=english?'Portrait of João Mastrangelo':'Foto de João Mastrangelo';
  document.querySelector('meta[name="description"]').content=english?'João Mastrangelo. Economic research, data science, professional experience and education.':'João Mastrangelo. Pesquisa econômica, ciência de dados, experiência profissional e formação.';
  try{localStorage.setItem('site-language',language);}catch{}
}
languageButton.addEventListener('click',()=>setLanguage(document.documentElement.lang==='en'?'pt':'en'));
try{if(localStorage.getItem('site-language')==='en')setLanguage('en');}catch{}
const links=[...document.querySelectorAll('nav a')];
const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){for(const link of links){if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');}}}},{rootMargin:'-10% 0px -60% 0px',threshold:0});
document.querySelectorAll('section[id]').forEach(section=>observer.observe(section));
