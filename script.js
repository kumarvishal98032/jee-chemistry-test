let current=0;let answers=new Array(questions.length).fill(null);
function loadQ(){document.getElementById('qno').innerHTML='Question '+(current+1);document.getElementById('question').innerHTML=questions[current].question;let h='';questions[current].options.forEach((o,i)=>{h+=`<div><input type='radio' name='o' ${answers[current]==i?'checked':''} onclick='answers[current]=${i}'> ${o}</div>`});document.getElementById('options').innerHTML=h;}
function palette(){let p='';for(let i=0;i<questions.length;i++){p+=`<button class='palette-btn' onclick='gotoQ(${i})'>${i+1}</button>`;}document.getElementById('palette').innerHTML=p;}
function gotoQ(i){current=i;loadQ();}
function nextQ(){if(current<questions.length-1){current++;loadQ();}}
function prevQ(){if(current>0){current--;loadQ();}}
function submitTest(){let score=0;for(let i=0;i<questions.length;i++){if(answers[i]===questions[i].answer)score+=4;else if(answers[i]!==null)score-=1;}document.body.innerHTML='<h1>Test Completed</h1><h2>Score: '+score+'</h2>';}
let t=1800;setInterval(()=>{let m=Math.floor(t/60),s=t%60;let el=document.getElementById('timer');if(el){el.innerHTML=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');}t--;if(t<0)submitTest();},1000);
palette();loadQ();