
function onDeviceReady() {
    
    // Initialize SendBird Chat API
    var sb = new SendBird({
	    appId: "675F2DA5-5BEF-4EDA-ABF2-51B2B1B43431"
	});

	sb.connect("123456789axee", "5da3c6bd8049bf190eae2e5b0ec29b476ca9ec1a", function(user, error) {
		console.log(user, error);
	});
}

document.addEventListener("deviceready", onDeviceReady, false);


/*{
  "user_id": "123456789axee",
  "access_token": "5da3c6bd8049bf190eae2e5b0ec29b476ca9ec1a",
  "is_online": false,
  "last_seen_at": 0,
  "nickname": "lgmesaros",
  "profile_url": "http://lucianmesaros.ro/test/yesagency/findamate/profile-images/5.jpg"
}*/