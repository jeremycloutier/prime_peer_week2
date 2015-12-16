var theta = ["Scott", "Kristy", "Altamir", "Anthony", "Brooks", "Charlie", "Chris", "Amber", "Kenzie", "Mark", "Joe", "Scott", "Matthew", "Natalie", "Eric", "Jeremy", "Nathan", "Robby", "Zach", "Sam", "Liz", "Paul"]
// var thetaIsFaded = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
var clickCounter = 0;

$(document).ready(function(){
	$('#container').append('<button class="create">Create Student</button>');
	var $el = $('#container');
	$el.on('click', '.create', revealStudent);
	$el.on('click', '.button', hideStudent);
	$el.on('click', '.hidden', revealHidden);

});

function revealStudent() {
	
	if (clickCounter >= theta.length) {
		//remove children (name and remove button) from the #container.
		$('#container').children().remove();
		//make create button again
		$('#container').append('<button class="create">Create Student</button>');
		clickCounter = 0;
	} else {
		$('#container').append('<p>' + theta[clickCounter] + '<button class="button">Remove</button></p>');
		$('#container').children().last().hide().slideDown();
		clickCounter++;
	}

}

function hideStudent(){
	$(this).parent().animate({
		opacity: 0.20,
	}, 'fast');
	$(this).toggleClass('hidden');
}

function revealHidden() {
	$(this).parent().animate({
		opacity: 1,
	}, 'fast');
}