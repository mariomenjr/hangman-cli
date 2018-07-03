const Letter = function(_letter) {
	this.letter = _letter
	this.status = !/^[a-zA-Z]+$/.test(_letter)

	this.char = '_'
}

Letter.prototype.compare = function(_letter) {
	let status = !this.status
	if (status) {
		status = this.letter.toLowerCase()===_letter.toLowerCase()
		this.status = status
	}
	return status
}

Letter.prototype.toString = function() {
	return this.status ? this.letter:this.char
}

module.exports = Letter