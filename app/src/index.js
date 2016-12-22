(function(){

  var automata = new Automata(1000);
  renderLine();
  setInterval(renderLine, 50);
  console.log(automata.automatas[automata.automatas.length-1]);

  function renderLine(){
    automata.createNewLine();
    let line = document.createElement('div');
    line.className = 'line';

    automata.automatas[automata.automatas.length - 1].map((e, index) => {
      console.log('elemento: ', e);
      let child = document.createElement('div');
      child.className = 'automata';
      console.log(e);
      child.className += ((e == 1) ? ' active' : '');
      line.appendChild(child);
    });
    document.getElementById('container').appendChild(line);
  };
    
}());


