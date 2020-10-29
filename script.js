var email = "";

function generate() {

	let name = document.querySelector("#name").value;

	let final = document.querySelector("#final");

	let nascimento_date = document.querySelector("#nascimento").value;

	if(!name || !nascimento_date) {
		alert("Digite seu nome completo e data de nascimento!");
		return false;
	}

	let subnames = name.split(" ");

	if(subnames.length == 1) {
		alert("Digite o nome completo.");
		return false;
	}

	for(let i = 0; i < subnames.length; i++) {
		if(subnames.length <= 2) break;
		if(i == 0 || i == subnames.length-1) continue;
		if(subnames[i].length == 2) {
			subnames[i] = "";
			continue;
		}

		subnames[i] = subnames[i][0];
	}

	name = subnames.join("").toLowerCase();

	let nascimento_info = nascimento_date.split("-");

	if(nascimento_info[0] >= 2016) {
		alert(`Parece que seu ano de nascimento está incorreto. Tem certeza que nasceu em ${nascimento_info[0]}?`);
		return false;
	}

	nascimento_date = `${nascimento_info[2]}${nascimento_info[1]}${nascimento_info[0]}`;

	email = `${name}.${nascimento_date}@edu.sme.prefeitura.sp.gov.br`;

	final.innerHTML = `
	<div class="quest">Seu email é ${email}</div><br>
	<div class="quest">Sua senha é 12345678</div><br>
	<div class="quest">Adicione a conta como conta google e no aplicativo do Classroom (ou google sala de aula) acesse com a conta mostrada acima.</div><br>
	<div class="quest"><button onclick="copiarEmail()" class="button2">Copiar Email</button></div><br><br>
	<div class="quest"><p style="font-size: 10px;">Site feito por Isaque Oliveira 8C</p></div>`;

}

function copiarEmail() {

  if(!email) return false;

  let text = email;

  var textArea = document.createElement("textarea");

  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  textArea.style.width = '2em';
  textArea.style.height = '2em';

  textArea.style.padding = 0;

  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  textArea.style.background = 'transparent';

  textArea.value = text;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}