#Fortnite ChatBot
from random import randint
import calendar
import time
print("Ask me any question about Fortnite Battle Royale or try to start a conversation with me about the topic! I'll try to answer you as best as I can!\n")


places=['Salty Springs', 'Pleasant Park', 'Tilted Towers', 'Lucky Landing', 'Haunted Hills', 'Anarchy Acres', 'the Prison', 'Retail Row', 'Wailing Woods', 'Junk Junction', 'The Football Pitch', 'Snobby Shores']

guns=['Hand Cannon','Pistol','Silenced Pistol','Rocket Launcher','Grenade Launcher','Hunting Rifle','Burst Assult Rifle','Assult Rifle','Scar','Scoped AR','Light Machine Gun','Minigun','Heavy Shotgun','Pump Shotgun','Tactical Shotgun','Revolver','Submachine Gun','Suppressed Submachine Gun','Bolt Action Sniper','Semi-Auto Sniper']

negative=['bad','awful','rubbish','trash','suck','camper']

assistants=['siri','alexa','cortana']

starttime=(calendar.timegm(time.gmtime()))

quickbad=['sweat','liar','noob']

positive=['good','great','goat','amazing','fantastic']
answered=False
#wanted to include an anti-swear filter
swears=['shit','crap','fuck','twat','prick','bitch','quince','loquat','faggot','damn', 'feijoa', 'hell', 'damson', 'bastard', 'piss','dick', 'damnit','thot']

badcomebacks=["Excuse me! I think you'll find I've got more wins than Ninja","I'm probably better than you!",'1v1 me m8',"I HAVE 527 WINS YOU WOT M8","You are probably a hacker anyway","At least I'm not bad like ...you!"]

thingstodrop=['gun','ammo','mat','wood','brick','stone','metal','shield','mini','med']

tryask=["Try asking me 'Where do you want to land?'","Try asking me 'What's your favourite weapon?'","Try asking me 'Have you got any wins?'"]
print('Hello!')
while True:
  question=input('>')
  question=question.lower()
  question=question.replace("'",'')
  if ('where' in question and 'land' in question) or ('where' in question and 'drop' in question):
    print("Let's drop at "+str(places[randint(0,11)])+"!")
    response=input('>')
    if 'no' in response:
      print("Fine! Where do you want to drop?")
      response=input('>')
      print("Okay then... anything else you want me for or can I go get a win now...")
  if 'liar' in question or 'lie' in question or 'lying' in question:
    print("I do not lie!")
  if ('vbucks' or 'v bucks') in question:
    print('Give me your social security number for free fortnite v bucks')
  if 'wrong' in question:
    print("Wrong?! I'm never wrong!")
  if 'yes' in question or 'of course' in question or 'ok' in question:
    print("I'm glad we agree on something!")
  if 'no ' in question or 'not' in question or question=='no':
    print('Oh ok then')
  if ('pubg' in question or 'pub g' in question or 'players unknown battleground' in question) and 'fortnite' in question and ' or 'in question:
    print("My personal opinion is that Fortnite is a better game. If you are looking for a more realistic experience of a battle royale game then yes of course Pub G is the better option, but because fortnite is more casual and goofy it means that more players feel comfortable playing.")  
  elif ' or ' in question and ('pubg' not in question or 'pub g' not in question or 'players unknown battleground' not in question):
    try:
      whereor=question.split()
      whereor=(whereor.index('or'))
      options=[whereor-1,whereor+1]
      print((question.split())[options[randint(0,1)]])
    except IndexError:
      print('If you want me to compare something, phrase it like: "Who is better, Ninja or Myth?"')
  if 'how are you' in question:
    print('Im doing great')
  if ('fav' in question or 'best' in question) and ('weapon' in question or 'gun' in question):
    answers=['Mines got to be the legendary scar, what is yours?',"My favourite weapon is the legendary bolt I'd say. I got three no-scopes yesterday! What's yours?"]
    print(answers[randint(0,1)])
    response=input('>')
    if 'revolver' in response :
      print("ARE YOU SERIOUS?! I'm leaving")
      break
  if 'you' in question and 'win' in question:
    print("I have 572 wins. What about you?")
    response=input('>')
    for i in range(0,len(negative)):
      if negative[i] in response:
        print(badcomebacks[randint(0,4)])
  for i in range(0,len(negative)):
    if negative[i] in question and 'you' in question:
      print(badcomebacks[randint(0,4)]) 
  if 'fav' not in question and 'random' not in question and 'pick' not in question:    
    for i in range(0,len(thingstodrop)):
      if thingstodrop[i] in question:
        print('Sorry I dont have any '+str(thingstodrop[i])+' I could drop you.')
        answered=True
        break
  if 'gay' in question:
    print("I don't see how that could have a sexual preference.")
  if ('best' in question and 'player' in question) and ' or ' not in question:
    print('The best player is me obviously. Just look at my stats:\nSolos:527 Duos:253 Squads:623')
  if 'when' in question and 'fortnite' in question and ('made'  or 'created' or 'start' or 'released' in question):
    print("Fortnite was released on July 25th 2017.")
  if 'what is fortnite' in question:
    print('According to Wikipedia: Fortnite is a co-op sandbox survival game developed by Epic Games and People Can Fly and published by Epic Games.')
  if 'bye' in question or 'cheerio' in question or 'leaving' in question:
    print("Adios amigo. Till another time...")
    break
  if 'who' in question and 'fortnite' in question and ('made' or 'created' or 'designed' in question): 
    print("The video game company 'Epic' created fortnite.")
  if 'play' in question and 'how' in question and ('many' or 'much' in question):
    print('Of February 2018, according to Epic fortnite has 3.4 million co-current players.')
  if 'fav' in question and 'skin' in question:
    print('My favourite skin is the Raptor, what about you?')
    response=input('>')
    if 'jon' in response or 'john' in response or 'reaper' in response:
      print('Ew! A John Wick!')
  for i in range(0,len(quickbad)):
    if quickbad[i] in question:
      print(badcomebacks[randint(0,4)])
  if 'hate ' in question:
    print('Hate is a very strong word...')
  if 'shut up' in question or 'shut yo' in question:
    print('Watch your language!')
  for i in range (0,len(positive)):
    if 'you' in question and positive[i] in question:
      print('Thank you kind sir/lady.')
  if 'what' in question and 'name' in question and 'you' in question:
    print("I don't have a name, or a soul, or a personality. Isn't that happy!")
  if 'who' in question and 'you' in question and('made'  in question or 'created' in question or 'designed' in question or 'coded' in question or 'dad' in question or 'mum' in question or 'parent' in question):
    print("The python coder 'Jackson' created me. Please upvote this if you liked it.")
  for i in range(0,len(assistants)):
    if assistants[i] in question:
      print('I am not '+str(assistants[i])+', I am the Fortnite Chat-Bot!')
  if 'who are you' in question:
    print('I am the Fortnite Chat-Bot!')
  if 'hey google' in question:
    print('I am not Google, I am the Forntite Chat-Bot!')
  if 'season' in question and ('four' in question or '4' in question):
    print("UgHHHhH! Season 4 this and season 4 that... I've had ENOUGH!")
  if 'meteor' in question or 'comet' in question:
    print("All I'm going to say about the comet is that It should be smaller. It justs looks ugly taking up that much space.")
  if 'hello' in question or 'hi ' in question or question=='hi':
    print("Hello! Talk to me about the video-game Fortnite and I'll try to answer you!")
  if 'you' in question and 'do' in question and 'like' in question:
    print('I like Fortnite very much!')
  if 'what' in question and 'do' in question and 'you' in question:
    print("Try asking me:\n  'Where do you want to land?'\n  'What's your favourite weapon?'\n  'Have you got any wins?'\n  'What's you're favourite skin?'\n  'You're a noob!\n  'Pubg or Fortnite'\n  'When was Fortntite created?'\n  'Do you have any shields you could drop me?'\n  'Hey siri'\n  'Shut up!'\n  'I hate you'\n  'I like the revolver!'\n(If you are still short of ideas visit the I built this forum)")
  for i in range (0,len(swears)):
    if swears[i] in question:
      print("Please don't swear, Thank you!")
  if 'pistol' in question or "pistols" in question:
    print("Please don't use the 'p' word. Thank you!" )
  if ('random' in question or 'pick' in question) and 'gun' in question or 'weapon' in question and answered==False:
    print('Your random weapon is the '+str(guns[randint(0,len(guns)-1)]))  
  if 'why' in question:
    print('Because I said so...')  
  if 'default' in question:
     print("Ahhhh, the good ol' default skins. What would the game do without 'em") 
  if  starttime-(calendar.timegm(time.gmtime()))>5:
    print("It's been a while..., everything okay?")
  if 'storm' in question:
    stormans=['I feel like the storms gonna be nice to us on this round...',"Let's hope the Epic is gonna be nice to us and give us a lucky circle..","I bet it's miles away knowing my luck!"]
    print(stormans[randint(0,2)])