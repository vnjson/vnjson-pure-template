function debugVnjson (){

	this.on('pathNotFound', ()=>{
		console.warn('{ menu } or { jump } leads nowhere');
		console.warn(`scene: ${this.current.sceneName}`);
		console.warn(`label: ${this.current.labelName}`);
	});
	this.on('labelEnd', ()=>{
		console.warn(`[ ${this.current.labelName} ] No way out of the label`)
	});

	this.on('*', event=>{
		if(event!=='exec'){
			console.error(`Плагин { ${event} } не найден`);
		}
	});


	this.on('exec', ctx=>{

		console.log(ctx)
	})

}