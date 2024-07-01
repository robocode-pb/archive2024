let answer = [
	["гаррі поттер", "гарри поттер","harry potter"],
	["губка боб","sponge bob", "spongebob", "губка боб квадратные штаны", "губка боб квадратні штани"],
	["пірати", "пірати карибского моря", "капитан джек горобець", "пираты","пираты карибского моря", "капитан джек воробей", "pirates of the caribbean"],
	["сімпсони", "симпсоны","simpsons", "the simpsons"],
	["зоряні війни", "звездные войны","star wars", "имперский марш", "імперский марш"],
	["lion king","the lion king", "король лев", "симба", "сімба"],
	["frozen","холодное сердце", "холодне серце", "эльза", "ельза"],
	["shrek","шрек"],
	["shrek","шрек"],
	["rocky","рокки", "роккі"],
	["индиана джонс","indiana jones"],
	["один вдома", "один дома","home alone"],
	["термінатор", "терминатор","terminator"],
	["назад у майбутнє", "назад в будущее", "back to the future", "марти макфлай"],
	["мисливці за привидами", "охотники за привидениями","ghost busters"]
];

let was = [];

let progress = 0;

let num = Math.floor(1 + Math.random() * 15);



$(document).ready(function () {
		/*
	$(".???").knob({
		'min': 0, 
		'max': 10,
		'angleOffset': -60,
		'angleArc': 120,
		'readOnly': true,
		'width' : '100%',
		'thickness': 0.2,
		'lineCap': 'round',
		'displayInput' : false,
		'bgColor' : '#cecae3',
		'fgColor' : '#3b1b5b'
	});
	*/


	$(".slideRules").click(function () {
		// ??
	});

	$("#start").click(function () {
		$("#start").css('display', 'none');
		$(".sound").css('display', 'block');
		startRebus(num);
	});


	$("#btnTask").click(function() {
		if (answer[num-1].indexOf($("#inputTask").val().toLowerCase()) != -1) {
			alertify.success("Right answer!");
			$("#inputTask").val("");
			progress++;
			$(".progress").val(progress).trigger('change');
			was.push(num);
			console.log(was);

			if (progress < 10) {
				do { num = Math.floor(1 + Math.random() * 15);
				} while (was.includes(num));
				startRebus(num);
			} else {
				$(".sound, #btnTask, #inputTask").css({
					'display' : 'none'
				});
				$("#nextTask").css({
					'display' : 'flex'
				});
				localStorage.removeItem("time");
			}
		} else {
			alertify.error("Wrong answer. Try again!");
		}
	});
});


function startRebus (arg) {
	$("#melody").attr("src",`sound/${arg}.mp3`);
}
