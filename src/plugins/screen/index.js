/**
 * @scene
 */


function screenVnjson(){

function isValid (screenName){

let rules = {
  screenName: 'required|string'
};
var validation = new Validator({screenName}, rules);

if(validation.fails()){
	let error = validation.errors.first('screenName');
	console.error(error)

}

return validation.passes();
}

	var prevScreen;
	var prevShow;
	this.on('screen', function (screenName){
		if(isValid(screenName)){
				if(prevScreen){	
					$(`.screen__${prevScreen}`).hide();
				}
				$(`.screen__${screenName}`).show();
					prevScreen = screenName;
		}
	});

}