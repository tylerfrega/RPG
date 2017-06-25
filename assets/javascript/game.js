
var player = {};
var defender = {};
var playerPicked = false;


 var obiWan = {

 	name: 'ObiWan Kenobi',
 	hp: 100,
 	ap: 20,
 	counterAttack: 15,

 	attack: function(){
 		defender.hp = defender.hp - this.ap;
 		this.ap = this.ap + 20;
 	},
 	defend: function(){
 		player.hp = player.hp - 15;
 	}
};



var han = {

	name: 'Han Solo',
	hp: 200,
 	ap: 40,
 	counterAttack: 25,

 	attack: function(){
 		defender.hp = defender.hp - this.ap;
 		this.ap = this.ap + 20;
 	},
 	defend: function(){
 		player.hp = player.hp - 25;
 	}
};



var luke = {
	name: 'Luke Skywalker',
	hp: 200,
 	ap: 40,
 	counterAttack: 25,

 	attack: function(){
 		defender.hp = defender.hp - this.ap;
 		this.ap = this.ap + 20;
 	},
 	defend: function(){
 		player.hp = player.hp - 25;
 	}

};


var Chewey = {
	name: 'Chewbaccka',
	hp: 200,
 	ap: 40,
 	counterAttack: 25,

 	attack: function(){
 		defender.hp = defender.hp - this.ap;
 		this.ap = this.ap + 20;
 	},
 	defend: function(){
 		player.hp = player.hp - 25;
 	}

};





//han solo
$('#han').on('click', function(){
	if(playerPicked != true){
		$('#attacker').html("<img src='assets/images/han.jpg'/>");
		$(this).hide();
		player = han;
		playerPicked = true;
	}else{
	 	$('#defender').html("<img src='assets/images/han.jpg'/>");
		 	defender = han;
		 	$(this).hide();
		 }
		 
});


//obiwan
$('#obiwan').on('click', function(){
	if(playerPicked != true){
		$('#attacker').html("<img src='assets/images/obiwan.png'/>");
		$(this).hide();
		player = obiWan;
		playerPicked = true;
}else $('#defender').html("<img src='assets/images/obiwan.png'/>");
		defender = obiWan;
		$(this).hide();

});


$('#luke').on('click', function(){
	if(playerPicked != true){
		$('#attacker').html("<img src='assets/images/luke.png'/>");
		$(this).hide();
		player = luke;
		playerPicked = true;
}else $('#defender').html("<img src='assets/images/luke.png'/>");
		defender = luke;
		$(this).hide();

});


$('#chewy').on('click', function(){
	if(playerPicked != true){
		$('#attacker').html("<img src='assets/images/chewy.jpg'/>");
		$(this).hide();
		player = chewy;
		playerPicked = true;
}else $('#defender').html("<img src='assets/images/chewy.jpg'/>");
		defender = chewy;
		$(this).hide();

});







$('#attack').on('click', function(){
	player.attack();
	defender.defend();

	if(player.hp <= 0){
		alert(player.name + " has fallen!");
	}

	if(defender.hp <= 0){ 
		alert(defender.name + ' has fallen!');
		
		
	}
});