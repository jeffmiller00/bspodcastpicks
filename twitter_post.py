#!/usr/bin/python

import oauth2 as oauth
import json

CONSUMER_KEY = '0WrAvI0JuVMkbj5gKrsEpZdjr'
CONSUMER_SECRET = 'fp8MGlZamciuqJMPOw2kOvGHpWSXHyDMOmTfGhkHGKQ1zEKh8k'
ACCESS_KEY = '25088104-5PkLCUc710lMtlk7i1TxO3CKXPXNTLJze9aXrkKxR'
ACCESS_SECRET = 'IXRTF2FYAzAWMveHFGiMKRcQv1g9PjByPZIlBqhpXmLWL'

consumer = oauth.Consumer(key=CONSUMER_KEY, secret=CONSUMER_SECRET)
access_token = oauth.Token(key=ACCESS_KEY, secret=ACCESS_SECRET)
client = oauth.Client(consumer, access_token)

timeline_endpoint = 'https://api.twitter.com/1.1/search/tweets.json?q=%40billsimmons&count=5'
response, data = client.request(timeline_endpoint)

tweets = json.loads(data)
tweets = tweets['statuses']
for tweet in tweets:
  print tweet['text'] + 'by: ' + tweet['user']['screen_name']
  response_tweet = 'Hey @'+tweet['user']['screen_name']+' -- take a look at bspodcastlist.com -- what did I get wrong? #bspodcastlist'
  tweet_url = 'https://api.twitter.com/1.1/statuses/update.json?status='+response_tweet
  response, data = client.request(timeline_endpoint)
  print response_tweet
  print '|------------------------------------------|'


#print data