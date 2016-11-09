// Globally accessible helper functions

'use strict';

var DEBUG_FLAG = false;

// format text for the badge and for the song URL
function formatHour(time) {
	if (time === -1) {
		return '';
	}
	if (time === 0) {
		return '12a';
	}
	if (time === 12) {
		return '12p';
	}
	if (time < 13) {
		return time + 'a';
	}
	return (time - 12) + 'p';
}

function toggleWeatherOptions(music) {
	if(music === 'new-leaf-live' || music === ' wild-world-live')
		document.getElementById('weather').style.visibility 	= "visible";
	else
		document.getElementById('weather').style.visibility 	= "hidden";
}

function printDebug(message) {
	if (DEBUG_FLAG) console.log(message);
}