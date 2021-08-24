function HTMLCalculator()
{
	let html = '';

	return html;
}

function onButton7Click()
{
	document.getElementById('???').value = document.getElementById('???').value + '7';
}

function onButton8Click()
{
	document.getElementById('???').value = document.getElementById('???').value + '8';
}


document.getElementById('???').innerHTML = HTMLCalculator();
document.getElementById('???').addEventListener('click', onButton7Click );
document.getElementById('???').addEventListener('click', onButton8Click );
