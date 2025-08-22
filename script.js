document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('year').textContent=new Date().getFullYear();
  const btn=document.getElementById('darkToggle');
  btn.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    btn.textContent=document.body.classList.contains('dark')?'☀️':'🌙';
  });
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('visible');}
    });
  },{threshold:0.2});
  document.querySelectorAll('.section-fade').forEach(sec=>observer.observe(sec));
});
