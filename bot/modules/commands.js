/*
'use strict';

exports.commands = [
	"helpfulcommands"
]

exports.init = function(bot){
	console.log(bot);
}

exports.helpfulcommands = {
	usage: " ",
	description: 'Displays Helpful Commands',
	process: function(bot,msg){
		msg.author.send( 
		{
		  "embed":{
		  "title": "*List of Helpful Commands*",
		  "description": "beta, github, daemondownload, directories, faq, name, mining, pricestance, publisher, publish, random, referral, reward, rewardsvsreferrals, cc, verify, verification, logfile, backup, startup, streamingissues, ports, migrate, tipping, email, cli",
		  "color": 7976557,
		  "author": {
			"name": "LBRY COMMANDS",
			"icon_url": "https://i.imgur.com/yWf5USu.png"
		}}}
			);
		}
	}
*/