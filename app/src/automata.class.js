class Automata {

  constructor(row = 20){
    this.nrow = row;
    this.automatas = [];
    this.automatas.push(this.firstLine())
  }

  firstLine(){
    let firstline = [];
    for(let i=0; i<this.nrow; i++){
      firstline.push(Math.random().toFixed(0))
    }
    return firstline;
  }

  getNewLine(){
    // It returns a new line based on the last on automatas arrays
    return this.automatas[this.automatas.length-1].map((element, index, lastline) => {
      let rule  = [0,0,0], current = element, next = 0, last = 0;

      if(index === 0){
        last = 0;
        next = lastline[index + 1];
      }else if(index === lastline.length - 1){
        next = 0;
        last = lastline[index-1];
      }else{
       current = element,
       next    = lastline[index+1],
       last    = lastline[index-1];
      }

      let rules = {
          '111': 0,
          '110': 1,
          '101': 1,
          '100': 1,
          '011': 1,
          '010': 1,
          '001': 1,
          '000': 0 
        };
      console.log('CV: ', element, ', ToBe: ', rules[last.toString() + current.toString() + next.toString()], ' index: ', last.toString() + current.toString() + next.toString());
      return rules[last.toString() + current.toString() + next.toString()];
    });
  }

  createNewLine(){
    // It creates a new line but it PUSHES it to the instance inmediatly
    this.automatas.push(this.getNewLine());
  }

  // rule(){
  //   return 
  // }
}