function loadAssets (){
/*
var i = 0;

var load = ()=>{
	
	var assets = this.TREE.$root.assets;

	
	if(/.png|.jpg/i.test( assets[i].url)){
	
  let img = new Image();
       img.src =  assets[i].url;
       img.onload = ()=>{
            
       		
             if( assets.length-1>=++i){
             
             		load()
             }
       };
  } 
}
window.addEventListener("load", _=>{
	load()
  
});

*/
var setAllAssets = ()=>{

    for(let [scene, body] of Object.entries(this.TREE)){
        this.current.assets = this.current.assets.concat(body.assets);
    };
    this.emit('setAllAssets');
}



this.on('setTree', _=>{

var { assets } = this.TREE.$root

if(assets==='all'){
     setAllAssets();
}
else if(assets==='once'){

}

else{
    setAllAssets()
}

})
this.on('setAllAssets', _=>{
  this.current.assets.forEach(asset=>{
      if(/\mp3|\.wav/i.test(asset.url)){
        this.$store[asset.name] = new Howl({src: asset.url})
      }
  
  })

});


}
