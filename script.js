const copy = {
 pt: {skip:'Pular para o conteúdo',home:'Início',about:'Sobre',projects:'Projetos',cv:'Currículo',contact:'Contato',eyebrow:'ECONOMIA · CIÊNCIA DE DADOS · EDUCAÇÃO',headline:'Macroeconomia e Ciência de Dados',viewProjects:'Ver projetos',aboutMe:'Sobre mim',bio:'Cientista de dados no Itaú. Bacharel em Economia pela UNICAMP, com experiência em pesquisa econômica e ciência de dados.',purpose:'Este site reúne meus projetos, materiais de estudo e atividades profissionais e acadêmicas.',more:'Saiba mais',experience:'Experiência',experienceText:'Mercado Financeiro e Tecnologia.',education:'Formação',educationText:'Bacharelado em Economia · UNICAMP.',interests:'Interesses',interestsText:'Macroeconomia, econometria, mercados financeiros e ciência de dados.',contactText:'Entre em contato ou acompanhe meu trabalho.',details:'Sobre a categoria',pending:'Os materiais desta categoria serão adicionados aqui.',educationCategory:'Educação',educationDescription:'Materiais de estudo, notas e resoluções.',researchCategory:'Pesquisa',researchDescription:'Análises, estudos e projetos.',codeCategory:'Dados e Programação',codeDescription:'Projetos com dados e aplicações.'},
 en: {skip:'Skip to content',home:'Home',about:'About',projects:'Projects',cv:'Résumé',contact:'Contact',eyebrow:'ECONOMICS · DATA SCIENCE · EDUCATION',headline:'Macroeconomics and Data Science',viewProjects:'View projects',aboutMe:'About me',bio:'Data Scientist at Itaú. Economics graduate of UNICAMP, with experience in economic research and data science.',purpose:'This site brings together my projects, study materials, and professional and academic activities.',more:'Learn more',experience:'Experience',experienceText:'Financial markets and technology.',education:'Education',educationText:'Bachelor’s degree in Economics · UNICAMP.',interests:'Interests',interestsText:'Macroeconomics, econometrics, financial markets and data science.',contactText:'Get in touch or follow my work.',details:'About this category',pending:'Materials in this category will be added here.',educationCategory:'Education',educationDescription:'Study materials, lecture notes and worked solutions.',researchCategory:'Research',researchDescription:'Economic analysis, research and studies.',codeCategory:'Data and Programming',codeDescription:'Data analysis and programming projects.'}
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
 document.title=lang==='en'?'João Mastrangelo | Economics, Data Science and Education':'João Mastrangelo | Economia, Ciência de Dados e Educação';
 document.querySelector('meta[name="description"]').content='João Mastrangelo. '+copy[lang].headline.replace('\n',' ');
 try{localStorage.setItem('site-language',lang);}catch{}
}
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
let initial='pt';try{initial=localStorage.getItem('site-language')||'pt';}catch{}setLanguage(initial);
const links=[...document.querySelectorAll('nav a[href^="#"]')];
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){links.forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}}},{rootMargin:'-5% 0px -55% 0px',threshold:0});document.querySelectorAll('section[id],footer[id]').forEach(section=>observer.observe(section));}
