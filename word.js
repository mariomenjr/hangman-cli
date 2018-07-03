const Letter = require("./letter")

const Word = function(_word) {
	this.word = _word
	this.status = false
	this._letters = []
	this._storeWord()
}

Word.prototype.guess = function(letter) {
	let result = false
	this._letters.forEach(_letter => {
		const compared = _letter.compare(letter)
		if (compared) result = compared
	})
	return result
}

Word.prototype.checkStatus = function() {
	return this._letters.every(letter => letter.status)
}

Word.prototype._storeWord = function() {
	for (let i = 0; i < this.word.length; i++) {
		this._letters.push(new Letter(this.word[i]))
	}
}

Word.prototype.toString = function() {
	return this._letters.join(' ')
}

module.exports = Word