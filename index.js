class BoardMember {
  constructor(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
    this.veto = function() {
      return 'No, I must disagree';
    };
  }
  // get veto() {
  //   return 'No, I must disagree';
  // }
  // 
  // get approve() {
  //   return 'You can do that!';
  // }
  // 
  // get doCharity() {
  //   return 'I like to help people.';
  // }
  // 
  // get releasePressStatement() {
  //   return 'You will see great things from Scuber.';
  // }
  // 
  // get sayHi() {
  //   return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  // }
}
