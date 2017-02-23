$(function() {
	let url = 'https://restcountries.eu/rest/v1/name/';
	let countriesList = $('#countries');

	function showCountriesList(resp) {
		countriesList.empty();
		resp.forEach(function(item) {
			$('<li>').text('Country: ' + item.name + ', Capital: ' + item.capital).appendTo(countriesList);
		});
	}

	function searchCountries() {
		let countryName = $('#country-name').val();
		if(!countryName.length) countryName = 'Poland';
		$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList
		});
	}

	$('#search').click(searchCountries);
});