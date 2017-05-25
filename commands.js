const commands = {"Fate Grand Order":{"alignment":"alignment <search term> <page number>:: Search for servants with a specific alignment","daily":"daily :: Get current Daily Quest info","dropmap":"dropmap <map name> :: Get the drop map of certain stage. Omit <map name> to get list of all maps\n\nMaps images are screenshots from Cirnopedia","event":"event :: Get info for the current, or next event","fgo-quiz":"fgo-quiz :: get a quiz of a random Servant in Fate Grand Order","gacha-temp":"gacha-temp <servant id> <optional: event id> :: See how many gacha u need to get a certain servant.","gacha":"gacha <optional arguments> :: Do a simulated FGO Gacha\n\n== Arguments\nyolo :: include this for solo roll. If not included, a 10-roll will be carried out\nevent + event ID :: event exclusive roll. If not included, the default story pool will be drawed. Example: event1\neventList :: see the list of events. Will not roll.\n\n== Roll rate\nServant :: 1% SSR | 3% SR | 40% R\nCE      :: 4% SSR | 12% SR | 40% R\n\nNote: Pick up rate and guaranteed cards are not considered","item":"item <item ID or name> :: Get drop info for a certain item. Omit <item ID or name> to get list of all items\n\nAscension List is made by Enkicon","map":"map <map name> :: Get the map of certain stage. Omit <map name> to get list of all maps\n\nMaps images are screenshots from Cirnopedia","master":"master :: Show info for the current week's master missions","material":"servant <name> :: Search for a servant with the name\n\nStart search term with 'id:' to search with ID","profile-edit":"profile-edit name: <Your IGN> | id: <Friend ID> :: Save or edit FGO profile\n\nAlso attach an image that show your support servants (can be screenshot or custom design) by uploading to discord","profile":"profile :: Get your saved FGO profile","servant-card":"servant-card <args> :: Generate an FGO Servant Card with the provided arguments\n\nArguments:\nname: Servant's name | class: Servant's class | icon: Servant's icon | rarity: Servant's rarity | HP: Servant's HP | ATK: Servant's ATK\n\nAttach a photo for the servant's image","servant":"servant <name> :: Search for a servant with the name\n\nStart search term with 'id:' to search with ID","skill":"skill <servant name> :: Show skills of a certain servant\n\nStart search term with 'id:' to search with servant's ID"},"Gamepedia":{"gamepedia":"gamepedia <domain> <search term> :: Search in a specific Gamepedia","vindictus":"vindictus <search term> :: Search in Vindictus Gamepedia"},"General":{"channel":"channel :: Check current channel info","createinvite":"createinvite <channel mention> :: Create a 24-hour invite code for the mentioned channel","emoji":"emoji <emoji name> :: print out the emoji. Omit <emoji name> to show the list of all emoji","invite":"invite <optional: channel mention> :: Get invite link to the channel","nick":"nick <mention> <optional: name> :: change nickname of mentioned user, leave <name> empty for removing nickname","respect":"respect :: F","server":"server :: Get server info","translate":"translate <sentence> :: Translate the sentenace to English","user":"user <mentions> :: Check users by mentions"},"Images":{"ascii":"ascii <text> :: Post an ascii text","blame":"blame <text> :: Blame someone???","cirno":"cirno <text> :: Post an image with cirno sipping tea and the text","cirnoplz":"cirnoplz <text> :: Post an image with not-amused cirno and the text","flip":"cirno <text> :: Post an image with cirno sipping tea and the text","rip":"rip <text> :: Rip :(","slap":"slap <mention> :: Slap the mentioned user"},"Info":{"about":"about :: Learn more about nobuBot","changelog":"changelog :: See the most recent changelog","feedback":"feedback <content> :: Send us a feedback, it can be compliment, bug report, or feature request and suggestions","help":"help <optional: command> :: Show help","inviteme":"inviteme :: Get nobuBot to your server","ping":"ping :: Poke the bot, see if it's alive","stat":"stat :: For nerds only"},"Misc":{"check":"check <shortened link> :: Get full link of the provided link","fml":"fml :: Random fml story","insult":"insult :: For M only","pun":"pun :: Random pun","rnd":"roll <min> <max> :: Get a random number within <min> and <max>","rumor":"rumor :: spread rumors about two random people in the guild\n\n(It's actually two random people who has said something in the last 100 messages but shhhhhh)","ship":"ship :: shipping two random people in the guild","straw":"straw <option 1> | <option 2> | <etc.> :: Get a random number within <min> and <max>"},"NSFW":{"danbooru":"danbooru <tags>:: Search for random image with tags\n\nAutomatically turn on safe mode if used outside nsfw channel"},"Search":{"google":"google <google search query> :: Google Search","image":"image <image search query> :: Image Search","youtube":"youtube <youtube search query> :: Youtube Search"},"Settings":{"welcome":"welcome <message> :: set welcome message for new members (only for users with Manage Server permission)\n\nUse [member] and [guild] (the square brackets are included) as placeholder for new member's name and guild's name\nUse [disable] (square brackets included) to disable welcoming message"},"Valkyrie Crusade":{"card":"card <card name> :: Show info of the card\n\nStart search term with 'id:' to search with card's ID","vc-profile-edit":"vc-profile-edit name: <Your IGN> | id: <Friend ID> | role: <FAWK, LAWK, Sender, etc.> | alliance: <alliance name> :: Save or edit VC profile\n\nAlso you can attach an image along with the command to put it into your profile","vc-profile":"vc-profile :: Get your saved VC profile","vc-reset":"vc-reset :: Reset your nickname","vc-roleplay":"vc-roleplay :: Change your nickname to a random maiden in Valkyrie Crusade\n\nCurrent Rate: 0.2% LR | 2.8% UR | 17% SR | 30% R | 50% N","vc-waifu":"vc-waifu :: Marry a random maiden in Valkyrie Crusade\n\nCurrent Rate: 0.2% LR | 2.8% UR | 17% SR | 30% R | 50% N"},"Wikia":{"fgo":"fgo <search term> :: Search in Fate Grand Order Wikia","touhou":"touhou <search term> :: Search in Touhou Wikia","wikia":"wikia <wikidomain> <search term> :: Search in a specific Wikia"}};