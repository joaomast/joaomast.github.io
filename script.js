const copy = {
 pt: {skip:'Pular para o conteúdo',home:'Início',about:'Sobre',projects:'Projetos',cv:'Currículo',contact:'Contato',eyebrow:'ECONOMIA · PESQUISA · EDUCAÇÃO',headline:'Macroeconomia, mercados financeiros\ne métodos quantitativos.',viewProjects:'Ver projetos',aboutMe:'Sobre mim',bio:'Cientista de dados no Banco Itaú. Bacharel em Economia pela Unicamp, com experiência em pesquisa econômica, estratégia e modelagem de risco de crédito.',purpose:'Este site reúne meus projetos, materiais de estudo e atividades profissionais e acadêmicas.',more:'Saiba mais',experience:'Experiência',experienceText:'Pesquisa econômica, estratégia e ciência de dados.',education:'Formação',educationText:'Bacharelado em Economia · Unicamp.',interests:'Interesses',interestsText:'Macroeconomia, econometria, mercados financeiros e métodos quantitativos.',contactText:'Entre em contato ou acompanhe meu trabalho.',details:'Sobre a categoria',pending:'Os materiais desta categoria serão adicionados aqui.',educationCategory:'Educação',educationDescription:'Materiais de estudo, notas e resoluções.',researchCategory:'Pesquisa',researchDescription:'Análises, estudos e projetos.',codeCategory:'Dados e Programação',codeDescription:'Projetos com dados e aplicações.'},
 en: {skip:'Skip to content',home:'Home',about:'About',projects:'Projects',cv:'Résumé',contact:'Contact',eyebrow:'ECONOMICS · RESEARCH · EDUCATION',headline:'Macroeconomics, financial markets\nand quantitative methods.',viewProjects:'View projects',aboutMe:'About me',bio:'Data Scientist at Banco Itaú. Economics graduate from Unicamp, with experience in economic research, strategy and credit risk modeling.',purpose:'This site brings together my projects, study materials, and professional and academic activities.',more:'Learn more',experience:'Experience',experienceText:'Economic research, strategy and data science.',education:'Education',educationText:'Bachelor’s Degree in Economics · Unicamp.',interests:'Interests',interestsText:'Macroeconomics, econometrics, financial markets and quantitative methods.',contactText:'Get in touch or follow my work.',details:'About this category',pending:'Materials in this category will be added here.',educationCategory:'Education',educationDescription:'Study materials, notes and solutions.',researchCategory:'Research',researchDescription:'Analyses, studies and projects.',codeCategory:'Data and Programming',codeDescription:'Data projects and applications.'}
};
// Each category can receive real projects without duplicating card markup.
const categories = [{id:'education',title:'educationCategory',description:'educationDescription',items:[]},{id:'research',title:'researchCategory',description:'researchDescription',items:[]},{id:'code',title:'codeCategory',description:'codeDescription',items:[]}];
const grid=document.getElementById('project-categories');
for(const category of categories){
 const card=document.createElement('article');card.className='project-card';
 card.innerHTML=`<svg class="icon" aria-hidden="true"><use href="icons.svg#${category.id}"></use></svg><h3 data-i18n="${category.title}"></h3><p data-i18n="${category.description}"></p><details><summary data-i18n="details"></summary><p data-i18n="pending"></p></details>`;
 grid.append(card);
}
function setLanguage(language){
 const lang=language==='en'?'en':'pt';document.documentElement.lang=lang==='pt'?'pt-BR':'en';
 document.querySelectorAll('[data-i18n]').forEach(element=>{element.textContent=copy[lang][element.dataset.i18n];});
 document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===lang)));
 document.querySelector('nav').setAttribute('aria-label',lang==='en'?'Main navigation':'Navegação principal');
 document.querySelector('.languages').setAttribute('aria-label',lang==='en'?'Language':'Idioma');
 document.querySelector('.brand').setAttribute('aria-label',lang==='en'?'João Mastrangelo — home':'João Mastrangelo — início');
 document.title=lang==='en'?'João Mastrangelo | Economics, Research and Education':'João Mastrangelo | Economia, Pesquisa e Educação';
 document.querySelector('meta[name="description"]').content='João Mastrangelo. '+copy[lang].headline.replace('\n',' ');
 try{localStorage.setItem('site-language',lang);}catch{}
}
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
let initial='pt';try{initial=localStorage.getItem('site-language')||'pt';}catch{}setLanguage(initial);
const links=[...document.querySelectorAll('nav a[href^="#"]')];
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){links.forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}}},{rootMargin:'-5% 0px -55% 0px',threshold:0});document.querySelectorAll('section[id],footer[id]').forEach(section=>observer.observe(section));}
