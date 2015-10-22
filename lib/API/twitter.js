var  Twitter = require("node-twitter-api"),
     secret  = include("secret"),
     Promise = require("bluebird"),
	_    = require('lodash')

module.exports = new function(){
	var applicationObj = new Twitter({consumerKey:secret.consumerKey,
					consumerSecret:secret.consumerSecret});

	this.search = function(hashtag){
		return new Promise(function(resolve,reject){
			applicationObj.search({q:hashtag,count:10},
					secret.accessToken,
					secret.accessTokenSecret,
					function(err,data,res){
						if(err){
							console.log('error')
							reject();	
						}else{
							data = _(data.statuses)
								.map(function(a){
									return 	{ text:_.get(a,'text'),
										  username:_.get(a,'user.name'),
										  pic:_.get(a,'user.profile_image_url_https') 
									}
								}).value();
							resolve(data);
						}	
					})	
		
				});
			}

	}
