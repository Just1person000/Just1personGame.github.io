let name;
	while (name == undefined || name == "" || name == " " || name == "  " || name == "   " || name == "    " || name == "     ") {
		name = prompt("Введите ваше имя");
	}
	for (let i = 0; i < name.length; i++) {
		if (name[i] == " ") {
			alert("Да пошёл ты!")
			location.reload();
		}
	} 	


// for (var i = 0; i < 5; i++) {
// 	alert(i);
// }
let Brawl_in_bar = 0;
let health = 100;
let cash = 3000;
let status = "Болеет";
let engargy = "100";
let gps = "Город Гарридан";
let power = 100;
let food = 0;
let kisel = 0;
let fraction = "Отсутствует";
let monsterСrystal_common = 0;
let monsterСrystal_rare = 0; 
let monsterСrystal_Mystical = 0;
let monsterСrystal_Legendary = 0;
let action = document.getElementsByClassName("action");
let actionInTown = document.querySelector(".actionInTown");
let actionInTavern = document.querySelector(".actionInTavern");
let actionInMarket = document.querySelector(".actionInMarket");
let actionInFork = document.querySelector(".actionInFork");
let actionInForest = document.querySelector(".actionInForest");
let actionInVillage = document.querySelector(".actionInVillage");
let actionInHome = document.querySelector(".actionInHome");
let bg = document.querySelector(".bg");
let img = document.querySelector(".img");
let Inventory = 0;
let cost;
//----------------------Переменные кастыли----------------------------------------------------
let thieves = 1;
let TaskThievesKillCompleted = 1;
let Novice_Sword = 1;
let Scout_armor = 1;
let Scout_sword = 1;
let ThievesTaskJoinedCompleted = 1;
let PurchasedHome = 1;
//----------------------------------------------------------------------------------------------
update(); 





//function showInventory(){
//	if (Inventory == 1) {
//		document.querySelector(".Inventory_window").style.display = "block";
//		document.querySelector(".Inventory").style.display = "flex";
//	}else{
//		document.querySelector(".Inventory_window").style.display = "none";
//		document.querySelector(".Inventory").style.display = "flex";
//	}	
//}

function showInventory(){
if (Inventory == 1) {
	document.querySelector(".Inventory_window").style.display = "flex";
	Inventory = 0;
}else{
	document.querySelector(".Inventory_window").style.display = "none";
	Inventory = 1;
}
}









//---------------------------Обновление значений--------------------------------------------//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------//----------------------------------------------------------------------------------------------
function update() {
     
     if (engargy < 1){
     	status = "Без сознания"
     }
	if (health > 100) {
		health = 100;
	}

	if (health < 1){
		document.querySelector("#status").textContent = "Погиб";
		alert(name + " погиб. Страница обновится, а игра начнётся заново.");
		location.reload();
	}

	document.querySelector("#name").textContent = name;
	document.querySelector("#health").textContent = health;
	document.querySelector("#cash").textContent = cash;
	document.querySelector("#status").textContent = status;
	document.querySelector("#gps").textContent = gps;
	document.querySelector("#engargy").textContent = engargy;
	document.querySelector("#power").textContent = power;
	document.querySelector("#fraction").textContent = fraction;
	document.querySelector("#monsterСrystal_common").textContent = monsterСrystal_common;
    document.querySelector("#monsterСrystal_rare").textContent = monsterСrystal_rare;
    document.querySelector("#monsterСrystal_Mystical").textContent = monsterСrystal_Mystical;
    document.querySelector("#monsterСrystal_Legendary").textContent = monsterСrystal_Legendary;
    document.querySelector("#food").textContent = food;



	bg.style.display = "none";
	for(let i = 0; i < action.length; i++){
		action[i].style.display = "none";

	}




	if (gps == "Город Гарридан") {
		actionInTown.style.display = "flex";
		img.style.backgroundImage = "url(img/town.jpg)";
	}

      if (gps == "Развилка") {
		actionInFork.style.display = "flex";
		img.style.backgroundImage = "url(img/Fork.jpg)";
	}


      if (gps == "Лес") {
		actionInForest.style.display = "flex";
		img.style.backgroundImage = "url(img/forest.jpg)";
	}




	if (gps == "Таверна Пустынный Оазис") {
		actionInTavern.style.display = "flex";
		img.style.backgroundImage = "url(img/tavern.jpg)";
	}


     if (gps == "Деревня Лесная Заря") {
		actionInVillage.style.display = "flex";
		img.style.backgroundImage = "url(img/village.jpg)";
	}



	if (gps == "Рынок 'Драконье Пёрышко'") {
		actionInTown.style.display = "none";
		actionInTavern.style.display = "none";
		actionInMarket.style.display = "flex";
		img.style.backgroundImage = "url(img/market.jpg)";
	
	}
	if (gps == "Твой дом") {
		actionInHome.style.display = "flex";
		img.style.backgroundImage = "url(img/home.jpg)";
	}

if (gps == "Рынок 'Драконье Пёрышко'" && thieves == 1 && cash > 19) {
	let z = Math.random();
		if (z > 0.4) {
          alert(name + " шёл по рынку и карманник украл у него 20 золота");
          cash = cash - 20;
                      update();
          }
          else if (thieves == 0) {

          }

}	







	if (health < 1) {
		alert(name + " погиб.");
	}
	if (status == "Без сознания") {
		bg.style.display = "block";
		alert(name + " сейчас без сознания");
		setTimeout(() =>{
			alert(name + " пришёл в себя");
			engargy = 34;
     		status = "Болеет";
     		update();
     	}
			, 5000);
		
	}
}

//----------------------------------------------------------------------------------------------//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------//----------------------------------------------------------------------------------------------








//-----------------------------------Кнопочки-------------------------------------------------
//----------------------------------------------------------------------------------------------




//--------------------------------GPS------------------------------------------------------
function inTavern(){
	gps = "Таверна Пустынный Оазис";
	update();
}

function inTown(){
	gps = "Город Гарридан";
	update();
}

function inMarket(){
	gps = "Рынок 'Драконье Пёрышко'";
	update();
}

function exit(){
gps = "Развилка";
update();
}
function exitHome(){
gps = "Деревня Лесная Заря";
update();
}

function inforest(){
gps = "Лес";
update();
}
function inVillage(){
	gps = "Деревня Лесная Заря";
	update();
}
function inHome(){
	gps = "Твой дом";
	update();
}
//--------------------------------GPS------------------------------------------------------



//--------------------------------Функции в таверне------------------------------------------------------
function inHospital() {
	if (cash > 49 && (health < 100 || status != "Здоровый")) {
		cash = cash - 50;
		status = "Здоровый";
		health = health + 20;
		if (health > 99) {
			health = 100;
			alert("Вы полностью здоровы!")
		}
	} else if ( cash < 50){
		alert("У вас недостаточно бабок! Иди в баню!")
	} else {
		alert("Вы и так здоровы!")
	}
	update();
}




function drink(){
	if (cash > 14 && status == "Очень пьяный") {
		cash = cash - 15;
		health = health - 10;
		status = "Без сознания";
	}
	if (cash > 14 && status == "Пьяный") {
		status = "Очень пьяный";
		cash = cash - 15;
		health = health - 5;
	}
	if (cash > 14 && (status != "Пьяный" && status != "Очень пьяный" && status != "Без сознания")) {
		cash = cash - 15;
		health = health - 5;
		status = "Пьяный";
	}
	update();
}





function eat(){
	let e = Math.random();
	if (e < 0.06) {
		alert("Тебе не хорошо...")
   health = health - 2;
   status = "Болеет";
       alert("Стрепня оказалась не свежей... Приносим свои извинения вот компенсация. Пожалуйста не говорите об этом.")
       cash = cash + 200;
       alert( name + " получил 400 монет")
	}else if (cash > 79 && status != "Болеет") {
		cash = cash - 80;
		health = health + 3;
		status = "Сытый";
	} else if(status == "Болеет"){
	alert("Вы больны и y Вас нет аппетита")	
	}else if(cash < 80){ 
		alert("Недостаточно средств")
	}
	update();
}







function chill(){
	if ( cash > 49) {
		cash = cash - 50;
		if (status == "Сытый") {
			health = health + 10;
		}
		let status_mem = status;
		status = "Спит";
		update();
		bg.style.display = "block";
		alert(name + " лёг спать");
		setTimeout(() =>{
			alert(name + " поспал")

			status = status_mem;
			engargy = 100;
			update();
     	}
			, 5000);
	} else if (cash < 50) {
		alert("Недостаточно денег");
	} else if (status == "Отдохнувший") {
		alert(name + " yже отдохнyл");
	}
}
//-----------------------------------------------------------------------------------------





//--------------------------------Работа------------------------------------------------------

 function work(){
alert("Ты решил найти работу")
if (status == "Очень пьяный" || engargy < 21 ) {
	alert("Да ты чё я в хламину")
}else{
 let g = Math.random(); //слyчайное число от 0 до 1
	if (g > 0.7) {
		alert("Ты спокойно поработал разнорабочим. " + name + " получил 100 золота")
		engargy = engargy - 20;
	    cash = cash + 100;
	}else if (g < 0.7) {
		alert("Ты так себе поработал. " + name + " получил 50 золота")
		 engargy = engargy - 20;
	     cash = cash + 50;
	}
}

update()
}
//------------------------------------------------------------------------------------------



//--------------------------------Рынок------------------------------------------------------
function buy() {
  vipen = prompt("Здарова путник, чтобы купить моё оружие впиши его цифру. 1) Меч новичка 300 монет: + 25 мощь, 2) Броня разведчика 500 монет: + 40 мощь, 3) Меч разведчика 1000 монет: + 100 мощь, 4) Покушать 20 монет")
        if (cash >= 300 & vipen == 1 && Novice_Sword !== 0) {
        cash = cash - 300;
        power = power + 25;
        Novice_Sword = 0;
        alert("Твоя сила увеличина")

    }

    else if (cash >= 500 & vipen == 2 && Scout_armor !== 0) {
        cash = cash - 500;
        power = power + 40;
        Scout_armor = 0;
        alert("Твоя сила увеличина")

    }

    else if (cash >= 1000 & vipen == 3 && Scout_sword !== 0) {
        cash = cash - 1000;
        power = power + 100;
        Scout_sword = 0;
        alert("Твоя сила увеличина")
 
    }   
    else if (cash >= 10 & vipen == 4) {
      how = +prompt("Сколько?")
      costFood = 20;
      let cashSpent = costFood*how;
      
      if (cashSpent > cash){
      	alert("Монеток тут не хватает брат")
      }else{
      alert("ok")
      cash = cash - costFood*how; 
      food = food + how	
      }
}
 
   else if (cash < 10 ) {
         alert("Ушёл от сюда, нищий")
    }
    else if (Novice_Sword == 0 ) {
         alert("Ты уже покупал это")
    }
    else if (Scout_armor == 0 ) {
         alert("Ты уже покупал это")
    }
    else if (Scout_sword == 0 ) {
         alert("Ты уже покупал это")
    }
    else if (cash == 0 ) {
         alert("Ты уже покупал это")
    }
  
  update();
}
//----------------------------------------------------------------------------------------------
function sell(){
     python = prompt("Введите нужные числа что бы продать кристалы: 1) Обычный 2) Редкий 3) Мифический 4) Легендарный")
             if (monsterСrystal_common > 0 & python == 1) {
        		how = prompt("Сколько?");
        		if (monsterСrystal_common >= how) {
        			cost = 100;
        			alert("ok")
        			   monsterСrystal_common = monsterСrystal_common - how;
        			   cash = cash + cost*how	
        			    alert("Ты продал кристалы! Ты получил: " + (cost*how) + " монет")
        		}else {
        			alert("Неа")
        		}
       
   
    }else if (monsterСrystal_rare > 0 & python == 2) {
        		how = prompt("Сколько?");
        		if (monsterСrystal_rare >= how) {
        			cost = 250;
        			alert("ok")
        			   monsterСrystal_rare = monsterСrystal_rare - how;
        			   cash = cash + cost*how	
        			    alert("Ты продал кристалы! Ты получил: " + (cost*how) + " монет")
        		}else {
        			alert("Неа")
        		}
         
   
    }else if (monsterСrystal_Mystical > 0 & python == 3) {
        		how = prompt("Сколько?");
        		if (monsterСrystal_Mystical >= how) {
        			cost = 500;
        			alert("ok")
        			   monsterСrystal_Mystical = monsterСrystal_Mystical - how;
        			   cash = cash + cost*how	
        			    alert("Ты продал кристалы! Ты получил: " + (cost*how) + " монет")
        		}else {
        			alert("Неа")
        		}
         
   
    }else if (monsterСrystal_Legendary > 0 & python == 4) {
        		how = prompt("Сколько?");
        		if (monsterСrystal_Legendary >= how) {
        			cost = 1000;
        			alert("ok")
        			   monsterСrystal_Legendary = monsterСrystal_Legendary - how;
        			   cash = cash + cost*how	
        			    alert("Ты продал кристалы! Ты получил: " + (cost*how) + " монет")
        		}else {
        			alert("Неа")
        		}
         
   
    }else{
    	alert("Нету")
    }
  update();
}
//----------------------------------------------------------------------------------------------

function ThievesYou() {
	let thieves_you = Math.random();
	if (ThievesTaskJoinedCompleted !== 0) {
          alert("Ты не вор!")
	} else if (thieves_you < 0.2) {
		alert("При попытке ограбить человека тебя избили")
		health = health - 20;
	}else if (thieves_you < 0.3) {
		alert("У тебя не получилось СВОровать")
		health = health - 5;
	}else if (thieves_you < 0.6) {
		alert("Ты СВОровал чей то кошилёк")
		cash = cash + 200;
		
	}else if (thieves_you < 0.9) {
		alert("Ты СВОровал чей то кошилёк")
		cash = cash + 500;
		
	}else if (thieves_you < 0.9) {
		alert("Вау да ты сорвал куш")
		cash = cash + 2000;
	}
update()
}





//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
















//--------------------------------------Сражения------------------------------------------------
//----------------------------------------------------------------------------------------------


function fight(){
	alert(name + " выбрал самого сильного человека в баре и сцепился с ним");	
        Brawl_in_bar = Brawl_in_bar + 1
	let b = Math.random();		//слyчайное число от 0 до 1
	if (b > 0.9) {
		alert("Бармен прекращает дракy и выкидывает вас прочь!");
		gps = "Город 'Гарридан'";
		update();
	}else{
		if (status == "Очень пьяный") {
			alert(name + " с двyх ног влетает в дверь и вылетает на yлицy");
			gps = "Город Гарридан";
			update();
		}else {
			let enemyHealth = 70;
			while (health > 1 && enemyHealth > 0){
				let p = Math.random(); //слyчайное число от 0 до 1
				if (p > 0.5) {
				alert("Сильным подзатыльником наносишь емy 15 yрона.")
				enemyHealth = enemyHealth - 15;
				health = health - 10;
				engargy = engargy - 3;
				alert("Враг, недолго дyмая, наносит 10 yрона. Ваше здоровье: " + health);
                   }else{
                   	alert("Слабым подзатыльником ты наносишь емy 5 yрона.")
                   	enemyHealth = enemyHealth - 5;
                   	health = health - 10;
                   	engargy = engargy - 3;
                   	alert("Враг, недолго дyмая, наносит 10 yрона. Ваше здоровье: " + health);
                   }
                         
				if (health < 1) {
					health = 1;
					status = "Без сознания";
					gps = "Город Гарридан";
				}

				update();
			}
			if (enemyHealth < 1 && status != "Без сознания") {
				let m = Math.random(); //слyчайное число от 0 до 1
				 if (m > 0.5) {
				 	alert("Вы побили слyчайного человека, Вам стыдно.... наверно... в любом слyчае вы смогли забрать y него 250 золотых");
				  cash = cash + 250;
				 }else if (m > 0.3) {
				 	alert("Вы побили слyчайного человека, Он оказался лохом каким-то вам не стыдно... ну в любом слyчае вы смогли забрать y него 100 золотых");
				 	cash = cash + 100;
				 }else if (m > 0.1) {
				 	alert("Вы побили бомжа, у него небыло ничего.");
				 } 
				
			}
			 update();
		}
	}

}



function monst_forest_fight(){
	if (engargy > 10) {

	alert(name + " выследил монстра");
	let Wolfpower1 = 90;
	let Wolfpower2 = 110;
	let Wolfpower3 = 150;
	let bear = Math.random();
	let mon_wolf = Math.random();		//слyчайное число от 0 до 1
	console.log(bear);
	console.log(mon_wolf);
	if (bear > 0.99) {
		alert("Вас атаковал медведь");
		 health = 1;
		 engargy = engargy - 30;
		 status = "Без сознания";
		 gps = "Город Гарридан";                     	
         update();
	}else if (status == "Очень пьяный") {
			alert(name + " начал бить бревно");
			gps = "Развилка";
			engargy = engargy - 8;
			update();
		}else if (mon_wolf < 0.3) {
                alert("Напал на волка");
                alert("Это оказался волчёнок")
                if (power > Wolfpower1) {
                alert("Ха какой хиленький волк")  
                alert("Ты получил 1 обычный кристал")
                monsterСrystal_common = monsterСrystal_common + 1;  
                engargy = engargy - 30;        
                } else {
					 alert("Фу ну ты и лох конечно у тебя же в начале сила 100 а ты проиграл волку с силой 90")
                     health = 1;
                     engargy = engargy - 30;
		             status = "Без сознания";
		             gps = "Город Гарридан";                     	
                     update();
                }        
		} 
		else if (mon_wolf < 0.5) {
			    alert("Напал на волка");
                alert("Это обычный вульфич")
                if (power > Wolfpower2) {
                alert("Хорошая была битва")  
                alert("Ты получил 2 обычный кристал")
                engargy = engargy - 30;
                monsterСrystal_common = monsterСrystal_common + 2;          
                } else {
                       alert("Тебя загрыз волчара")
                       engargy = engargy - 30;
                       health = health - 60;
		               gps = "Город Гарридан";                     	
                       update(); 
                       }         
		}
		else if (mon_wolf < 0.8) {
			    alert("Напал на волка");
                alert("Ты наткнулся на вожака стаи")
                if (power > Wolfpower3) {
                alert("Он сражался до последнего...")  
                alert("Ты получил 2 необычный кристал")
                engargy = engargy - 30;
                monsterСrystal_rare = monsterСrystal_rare + 1;          
                } else {
                	   alert("Тебя расстерзал волчара")
                	   engargy = engargy - 30;
                       health = health - 80;
		               gps = "Город Гарридан";                     	
                       update();
                }        
		}
		else if (mon_wolf < 1) {
			    alert("Никого не нашёл");
     			engargy = engargy - 30;
     			update();
		}
	} else{
		alert("Я устал!")
	}
			
		                      














				if (health < 1) {
					health = 1;
					status = "Без сознания";
					gps = "Город Гарридан";
				}

				update();
			
}




//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------












//---------------------------------Квесты-------------------------------------------------
//----------------------------------------------------------------------------------------------

function ThievesJoined(){
	if (TaskThievesKillCompleted !== 0 && ThievesTaskJoinedCompleted !== 0) {
        alert("Здарова, хочешь вступить? Выполни пару делишек и тогда добро пожаловать")
        alert("По буянь ка в баре я хочу убедиться что ты сорви голова")
        if (Brawl_in_bar > 4 && ThievesTaskJoinedCompleted !== 0) {
        	alert("Добро пожаловать в нашей банде")
        	fraction = "Воришка";
        	thieves = 0;
        	ThievesTaskJoinedCompleted = 0;
        }else if (Brawl_in_bar < 5){
        alert("Ты ещё не подрался нужное количество раз. Ты подрался: " + Brawl_in_bar)
        }
	}else if (TaskThievesKillCompleted == 0){
		alert("Ты уже всех убил...")
	      }else if (ThievesTaskJoinedCompleted == 0) {
		alert("Ты уже вступил")
}
update()
}

















//---------Уничтожение воришек-------------
function TaskThievesKill () {
	if (power > 159 & TaskThievesKillCompleted !== 0 & ThievesTaskJoinedCompleted !== 0){
			alert ("Хэй тебе тоже надоели эти воришки? Я знаю их базу.")
		thieves = 0;
		TaskThievesKillCompleted = 0;
		cash = cash + 1100;
		engargy = engargy - 30;
		alert("Ты победил воришек. Теперь они тебя не будут бесить.")
		alert("Ты получил 1100 монет")
} 
        else if (power < 159){ 
        alert ("Хэй тебе тоже надоели эти воришки? Я знаю их базу.")
        alert ("Ты не вывез битву с воришками")
        health = health - 50;
        engargy = engargy - 30;
        cash = cash - 200;
}

        else if (TaskThievesKillCompleted == 0) {
        alert("тут никого нет...")

}
        else if (ThievesTaskJoinedCompleted == 0) {
        alert("Даже не пытайся у меня что то украсть")
        }
  update();


}
//-------------------------------------------














//----------------------------------------------------------------------------------------------
//---------------------------------------------Деревня-------------------------------------------------
function buyHome(){
     if (cash > 999 & PurchasedHome !== 0 ) {
        if (confirm("Ты хочешь купить дом за 1000 монет")) {
          alert("Хэй я тут дом продаю хочешь купить? 1000 монет и он твой.")
          alert("Ты купил дом!")
          PurchasedHome = 0;
          cash = cash - 1000
          document.getElementById('message').innerHTML="Зайти в дом";
        }
     }else if (PurchasedHome == 0) {
      inHome()
     }
     update()
 }

//-------------------------------------------
function chillHome(){
	if ( cash > -1) {
		if (status == "Сытый") {
			health = health + 10;
		}
		let status_mem = status;
		status = "Спит";
		update();
		bg.style.display = "block";
		alert(name + " лёг спать");
		setTimeout(() =>{
			alert(name + " поспал")
			status = status_mem;
			engargy = 100;
			update();
     	}
			, 5000);
	} else if (cash < 50) {
		alert("Недостаточно денег");
	} else if (status == "Отдохнувший") {
		alert(name + " yже отдохнyл");
	}
}


function eatInHome(){
		let e = Math.random();
		 if(food < 1){ 
		alert("У тебя нет хавчика")
	}
	 else if (e < 0.09) {
		alert("Тебе не хорошо...")
   health = health - 2;
   status = "Болеет";
	}else if (food > 0 && status != "Болеет") {
		alert("Ты вкусно покушал.")
		health = health + 3;
		status = "Сытый";
		food = food - 1;
	} else if(status == "Болеет"){
	alert("Вы больны и y Вас нет аппетита")	
	}
	update();
}


//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------