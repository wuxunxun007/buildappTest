alert(10)
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady(){
	checkConnection(); 
	navigator.geolocation.getCurrentPosition(onSuccess1, onError1);
	document.getElementById("cameraBtn").onclick = function(){
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50 });

	}
	
	function onSuccess(imageData) {
	   var box = document.getElementById('box');
	   box.style.backgroundImage = "url("+imageData+")";
	   box.style.backgroundSize = "cover";
	}

	function onFail(message) {
	   alert('Failed because: ' + message);
	}
}
function checkConnection() { 
		var networkState = navigator.network.connection.type; 		 

		var states = {}; 
		states[Connection.UNKNOWN]  = 'Unknown connection'; 
		states[Connection.ETHERNET] = 'Ethernet connection'; 
		states[Connection.WIFI]     = 'WiFi connection'; 
		states[Connection.CELL_2G]  = 'Cell 2G connection'; 
		states[Connection.CELL_3G]  = 'Cell 3G connection'; 
		states[Connection.CELL_4G]  = 'Cell 4G connection'; 
		states[Connection.NONE]     = 'No network connection'; 

		alert('Connection type: ' + states[networkState]); 
}
// 获取位置信息成功时调用的回调函数
	function onSuccess1(position) {
		var element = document.getElementById('geolocation');
		element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
							'Longitude: '          + position.coords.longitude             + '<br />' +
							'Altitude: '           + position.coords.altitude              + '<br />' +
							'Accuracy: '           + position.coords.accuracy              + '<br />' +
							'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
							'Heading: '            + position.coords.heading               + '<br />' +
							'Speed: '              + position.coords.speed                 + '<br />' +
							'Timestamp: '          + new Date(position.timestamp)          + '<br />';
	}
	
	// onError回调函数接收一个PositionError对象
	function onError1(error) {
		alert('code: '    + error.code    + '\n' +
			'message: ' + error.message + '\n');
	}