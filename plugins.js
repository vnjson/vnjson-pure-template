


/**
 * audio
 */
function audioVnjson (){

var store = {};	

this.on('setAllAssets', _=>{
	this.current.assets.forEach(asset=>{
			store[asset.name] = new Howl({src: asset.url})
	})

})

function audio (data){




store[data.name].rate(data.speed||1);
store[data.name].loop(data.loop||false);
store[data.name].volume(data.volume||1)
store[data.name][data.action]();
}


	this.on('audio', audio);
	this.on('sound', data=>{
		store[data].play();
	})
};



/**
 * Input
 */

function inputVnjson (){

function input (menuObj){
$('.screen__game-menu').html('');	
$('.screen__game-menu').show();


	for(var [label, menuItem ] of Object.entries(menuObj)){
		
		if(label==='$'){
			this.emit('character', this.getCharacterById(label), `${menuItem}<b><input type="text" id="userName">`)
		}
		else if(this.getCharacterById(label)){

			this.emit('character', this.getCharacterById(label), `${menuItem}<b><input type="text" id="userName">`)
		}
		else{

			let str = `<div data-label="${ label }" class="screen__menu-item">${ menuItem }</div>`;
			$('.screen__game-menu').append(str)

		}


$( ".screen__menu-item").mouseover(_=>{

	this.exec({
		audio: {
			name: 'item',
			action: 'play',
			volume: 0.2,
			speed: 2.5
		} 
	})
})
$( ".screen__menu-item").mousedown(_=>{
	this.exec({
		audio: {
			name: 'item',
			action: 'play',
			volume: 0.5,
			speed: 1.5
		}
	})

})
}

var handler = e=>{
  e.preventDefault();
  var userName = $('#userName').val();

  if(userName!==''){
  	
  	this.getCharacterById('$').name = userName;
  	this.current.data.userName = userName;
  	this.emit('jump', e.target.dataset.label);
    $('.screen__game-menu').hide();
    $( ".screen__game-menu" ).off( "click", handler);
  }

}


$( ".screen__game-menu" ).on( "click", ".screen__menu-item", handler);

}
this.on('input', input);
}