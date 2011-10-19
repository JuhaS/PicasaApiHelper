		blockingParseLinks = function(picasaUserName, picasaCollectionName) { 
			jsonUrl = 'http://picasaweb.google.com/data/feed/api/user/' + picasaUserName + '/album/' + picasaCollectionName +'?imgmax=912&max-results=999&alt=json';
			linkArray = new Array();
			$.ajax({
			  type: "GET",
			  url: jsonUrl,
			  dataType: "json",
			  async: false,
			  success: function(data) {
				  images = data.feed.entry;
				  
				  for (i in images ) {
				  	
					url = images[i].content.src;
					var caption;
					if (images[i].summary.$t){
						caption = images[i].summary.$t.toUpperCase(); 
					}
					linkArray[i] = {"url":url, "caption":caption};
				  }
			  },
			  error: function() {
				alert("Error: Could not connecto to Picasa.");
			  }
			
			});
			return linkArray;
		};
		
		parseLinks = function(picasaUserName, picasaCollectionName, cb) {
			jsonUrl = 'http://picasaweb.google.com/data/feed/api/user/' + picasaUserName + '/album/' + picasaCollectionName +'?imgmax=912&max-results=999&alt=json';
			$.ajax({
			  type: "GET",
			  url: jsonUrl,
			  dataType: "json",
			  async: true,
			  success: function(data) {
				  images = data.feed.entry;
				  linkArray = new Array();
				  for (i in images ) {
				  	
					url = images[i].content.src;
					var caption;
					if (images[i].summary.$t){
						caption = images[i].summary.$t.toUpperCase(); 
					}
					linkArray[i] = {"url":url, "caption":caption};
				  }
				  cb(linkArray);
			  },
			  error: function() {
				alert("Error: Could not connecto to Picasa.");
			  }
			
			});
		};