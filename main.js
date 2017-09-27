(function(){
	$(document).ready(main);
	var player = 1;
	var newgame = false;
	var winner = "a";
	var tie = false;
	var x_score = 0;
	var o_score = 0;
	var tie_Amount = 0;
	var hide = 0;
	function main()
	{
		$(".box").click(clickaction);
		$(".btn").click(hide_show);
	}
	
	function clickaction()
	{
		if (newgame)
		{
			$(".box").removeClass("x");
			$(".box").removeClass("o");
			newgame = false;
			winner = "a";
			tie = false;
		}
		else
		{

		

			if( ($(this).hasClass('x') || $(this).hasClass('o') )  )
			{
				alert("square has already been taken!");
			}

			else 
			{

				if(player == 1)
				{
					player = 2;
				}
				else
				{
					player = 1;
				}

				

				if(player == 2)
				{
					$(this).addClass('x');
					checkwin();
					if (tie)
					{
						alert("tie game!");
						newgame = true;

					}
					else 
					{

						if (winner == "x")
						{
							alert("X has won!! Click any box to restart");
							newgame = true;
						}
						else 
						{

						}
					}

				}
				else 
				{
					$(this).addClass('o');
					checkwin();
					if (tie)
					{
						alert("tie game!");
						newgame = true;
					}
					else 
					{

						if (winner == "o")
						{
							alert("O has won!! Click any box to restart");
							newgame = true;
						}
						else 
						{

						}
					}
				}
			}
		}


	}
	function checkwin()
		{
			//checks if x won
			if( ( $("#box1").hasClass('x') && $("#box4").hasClass('x') && $("#box7").hasClass('x') ) || ( $("#box2").hasClass('x') && $("#box5").hasClass('x') && $("#box8").hasClass('x') ) || ( $("#box3").hasClass('x') && $("#box6").hasClass('x') && $("#box9").hasClass('x') ) || ( $("#box3").hasClass('x') && $("#box5").hasClass('x') && $("#box7").hasClass('x') ) || ( $("#box1").hasClass('x') && $("#box5").hasClass('x') && $("#box9").hasClass('x') ) || ( $("#box1").hasClass('x') && $("#box2").hasClass('x') && $("#box3").hasClass('x') ) || ( $("#box4").hasClass('x') && $("#box5").hasClass('x') && $("#box6").hasClass('x') ) || ( $("#box7").hasClass('x') && $("#box8").hasClass('x') && $("#box9").hasClass('x')))
			{
				winner = "x";
				x_score++;
				update_Scoreboard();
				console.log('if statement for x returned true');
			}
			else
			{

			}
			//sees if o won
			if( ( $("#box1").hasClass('o') && $("#box4").hasClass('o') && $("#box7").hasClass('o') ) || ( $("#box2").hasClass('o') && $("#box5").hasClass('o') && $("#box8").hasClass('o') ) || ( $("#box3").hasClass('o') && $("#box6").hasClass('o') && $("#box9").hasClass('o') ) || ( $("#box3").hasClass('o') && $("#box5").hasClass('o') && $("#box7").hasClass('o') ) || ( $("#box1").hasClass('o') && $("#box5").hasClass('o') && $("#box9").hasClass('o') ) || ( $("#box1").hasClass('o') && $("#box2").hasClass('o') && $("#box3").hasClass('o') ) || ( $("#box4").hasClass('o') && $("#box5").hasClass('o') && $("#box6").hasClass('o') ) || ( $("#box7").hasClass('o') && $("#box8").hasClass('o') && $("#box9").hasClass('o')))
			{
				winner = "o";
				o_score++;
				update_Scoreboard();
				console.log('if statement for o returned true')
			}
			else
			{

			}
			// this next thing checks for a tie
			if ( ($("#box1").hasClass("o") || $("#box1").hasClass("x")) && ($("#box2").hasClass("o") || $("#box2").hasClass("x")) && ($("#box3").hasClass("o") || $("#box3").hasClass("x")) && ($("#box4").hasClass("o") || $("#box4").hasClass("x")) && ($("#box5").hasClass("o") || $("#box5").hasClass("x")) && ($("#box6").hasClass("o") || $("#box6").hasClass("x")) && ($("#box7").hasClass("o") || $("#box7").hasClass("x")) && ($("#box8").hasClass("o") || $("#box8").hasClass("x")) && ($("#box9").hasClass("o") || $("#box9").hasClass("x")) && winner != "x" && winner != "y")
			{
				tie = true;
				tie_Amount++;
				update_Scoreboard();
			}
			else 
			{

			}
			
		}
	function update_Scoreboard() 
	{
		$('#score-text').text('X : ' + x_score + ' | O : ' + o_score + ' | Tie : ' + tie_Amount);

	}
	function hide_show()
	{
		if (hide == 0)
		{
			hide = 1;
		}
		else 
		{
			hide = 0;
		}

		if (hide == 1)
		{
		$('.scoreboard-title').hide();
		$('.scoreboard-text-2').hide();
		}
		else {
			$('.scoreboard-title').show();
		$('.scoreboard-text-2').show();
		}
		
	}
	
})();
