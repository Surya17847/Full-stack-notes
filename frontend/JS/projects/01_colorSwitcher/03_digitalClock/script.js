const clock = document.getElementById('clock')

// setInterval(function(){}, time in ms)
setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)