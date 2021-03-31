

/**
 * character
 */

function characterVnjson (){

this.on('character', (character, reply)=>{
	if(!character.name){
		$('.character__name').html('')
		$('.reply').html(reply)
							 .css('color', character.replyColor);
	}else{
		$('.character__name').html(character.name).css('color', character.nameColor)
		$('.reply').html(reply)
							 .css('color', character.replyColor)
	}
});

}