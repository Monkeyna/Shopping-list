console.log('funguju!');


const ListItem = (props) => {
	const {product, amount, unit, done} = props;

	let tickClass = '';
	if (done) {
		tickClass = ' btn-tick--on';
	}

	return `
		<div class="list-item">
			<button class="icon-btn btn-tick${tickClass}"></button>
			<div class="list-item__body">
				<div class="list-item__product">${product}</div>
				<div class="list-item__amount">${amount} ${unit}</div>
			</div>
		</div>
	`;
}

const ShopList = (props) => {
	const {dayName, items} = props;

	return `
		<div class="shoplist">
			<div class="shoplist__head">
				<h2 class="shoplist__day">${dayName}</h2>
			</div>
			<div class="shoplist__items">
				${
					items
					.map(item => ListItem(item))
					.join('')
				}
			</div>
		</div>
	`;
}

const mainElement = document.querySelector('main');

fetch('https://nakupy.kodim.app/api/sampleweek/mon')
.then((response) => response.json())
.then((data) => {
	mainElement.innerHTML += ShopList({
		dayName: data.result.dayName,
		items: data.result.items
	})
});

fetch('https://nakupy.kodim.app/api/sampleweek/tue')
.then((response) => response.json())
.then((data) => {
	mainElement.innerHTML += ShopList({
		dayName: data.result.dayName,
		items: data.result.items
	})
});