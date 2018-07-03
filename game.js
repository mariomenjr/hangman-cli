const Word = require("./word");
const Inquirer = require("inquirer");

const Game = function(_words) {
  this.guesses = 7;
	this.indexCurrentWord = 0;
	this.title = `Let's play!`
  this.prompt = Inquirer.createPromptModule();

  this._words = [];

  this._setupGame(_words);
};

Game.prototype.play = function() {
	const currentWord = this._words[this.indexCurrentWord]
  if (currentWord.checkStatus()) {
		console.log('YOU WON!')
  } else {
    this.prompt([
			{
				type: 'input',
				name: 'letterChoosen',
				message: this._roundMessage()
			}
		])
      .then(answers => {
				console.log('\n')
				if (currentWord.guess(answers.letterChoosen)) {
					this.title = 'Well played!'
				} else {
					this.title = 'Wrong!'
				}
				this.play()
      })
			.catch(err => {});
  }
};

Game.prototype._roundMessage = function() {
	return `${this.title}\n\n${this._words[this.indexCurrentWord].toString()}\n\nLetter:`
}

Game.prototype._setupGame = function(_words) {
  _words.forEach(_word => {
    this._words.push(new Word(_word));
  });
};

module.exports = Game
