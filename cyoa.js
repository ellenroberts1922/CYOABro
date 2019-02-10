var images = document.getElementById("images");
var text = document.getElementById("text");
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');

var advanceTo = function(s) {
  changeImage(s.image);
  changeText(s.text);
  changeButtons(s.buttons);
};



input.onclick = function(event) {
  if (input.click) {
    input.parentNode.removeChild(input);
      advanceTo(scenario.two);
}
};

var changeText = function(words) {
  text.innerHTML = words.replace(text);
};

var changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
};

var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  }
};




scenario = {};
var scenario = {
  one: {
    image: "group.jpg",
    text: "Welcome to ''Choose Your Own Adventure, Bro.'' You play the role of a talented, confident young man nearing the end of his second semester in a Computer Science program. In this interactive story, you will find that the subtle choices that you make on a daily basis can have a profound impact on those around you.",
  },
  two: {
    image: "window.jpg",
    text: "You wake up to the gentle tapping of rain, and there\'s a cool draft flowing through your open window. You have 45 minutes before your alarm goes off. The perfect conditions for pulling the covers up over your shoulders and lazily scrolling through Instagram. But your mind won\'t let you.The encroaching imposition of finals week for your second semester in Computer Science drags you from your bed.",
    buttons: [["Go to close the window", "advanceTo(scenario.three)"],["Stretch halfheartedly", "advanceTo(scenario.three)"]]
  },
  three: {
    image: "mirror.jpg",
    text: "You look at yourself in the mirror and attempt to smooth out your bed-head. To yourself:",
    buttons: [["''New semester, new you. You\'ve got this, man.''", "advanceTo(scenario.four)"], ["''Keep on keepin\'' on. You\'ve never met a challenge that you couldn\'t crush.''", "advanceTo(scenario.four)"]]
  },
  four: {
    image: "phonebuzz.jpg",
    text: "You hear your phone buzz against your desk--Samantha. Evidently she can\'t sleep either.",
    buttons: [["Continue", "advanceTo(scenario.five)"]]
  },
  five: {
    image: "phonebuzz.jpg",
    text: "Samantha: \"Coffee at Alpine in 15 min?\"",
    buttons: [["Continue", "advanceTo(scenario.six)"]]
  },
  six: {
    image: "omw.jpg",
    text: "You\'re not really interested in walking all the way to The Hill in the rain, but you know she's been struggling lately. Besides, you two supported each other through the shittiest junior year that there ever was. You know you need to stick together.",
    buttons: [["\"Sounds good, omw''", "advanceTo(scenario.seven)"]]
  },
  seven: {
    image: "coffeeshop.jpg",
    text: "You walk into the coffee shop. There\'s no line at the counter. Sam is hunched over a black coffee in your usual spot.",
    buttons: [["Make your way directly to her and sit down.", "advanceTo(scenario.ten)"],["Order a drink", "advanceTo(scenario.eight)"]]
  },
   eight: {
    image: "coffeeshop.jpg",
    text: "''What can I get you to drink?''",
    buttons: [["16 oz. Americano", "advanceTo(scenario.nine)"],["12 oz. Chai latte", "advanceTo(scenario.nine)"]]
  },
   nine: {
    image: "coffeeshop.jpg",
    text: "They hand you your drink in a wide white mug.",
    buttons: [["Drop your change into the jar.", "advanceTo(scenario.ten)"]]
  },
   ten: {
    image: "samcoffee.jpg",
    text: "You make your way to Sam and sit down in the familiar booth. The conversation quickly turns to school stresses. She\'s a Sociology major, but she\'s been putting an inordinate amount of time and effort into her Intro to Coding class. She\'s finally making some forward progress on her final coding projects but at the expense of her paper for Sociological Research Methods. You can tell that she hasn\'t been sleeping much lately. Then, she says something that surprises you.",
    buttons: [["Continue", "advanceTo(scenario.eleven)"]]
  },
   eleven: {
    image: "samcoffee.jpg",
    text: "''I think I'm going to add a minor in Comp Sci.''Yeah?'' ''Yeah. No doubt this class started off pretty rocky, but it\'s starting to click for me. I don\'t know. Like when I spend so much time trying to make something work and then it suddenly does. It makes me feel...smart.'' \n ''You are smart.''\n ''But this feels different.'' \n ''Huh.'' \n You recall the hours you\'ve spent helping her through beginner-level assignments and listening to her complain about her TAs. You feel that you need to protect her from herself here.",
    buttons: [["''I mean, you\'re smart, but it\'s a tough program. You\'ve been doing better, but honestly can you really picture yourself in tech?''", "advanceTo(scenario.twelve)"], ["''I\'d say it\'s worth considering. You\'ve been making pretty significant strides lately. I\'d be excited to see you continue on.''", "advanceTo(scenario.thirteen)"]]
  },
   twelve: {
    image: "samcoffee.jpg",
    text: "''Hmm. Yeah, I guess I need to think on it more. I just don't want people to think I'm dumb. I don't know, it was just a thought I guess.''",
    buttons: [["Continue", "advanceTo(scenario.fourteen)"]]
  },
   thirteen: {
    image: "samcoffee.jpg",
    text: "''You think so? I\'m thinking, at the very least, I try to fit a few more comp sci classes into my schedule next semester. Something about it just feels right to me.''",
    buttons: [["Continue", "advanceTo(scenario.fourteen)"]]
  },
   fourteen: {
    image: "samcoffee.jpg",
    text: "On your way out, you remind Sam that there\'s a party at Zeta this Thursday. You know it isn\'t her scene, but, now that you\'re a full-fledged brother, you figure you owe it to yourself to show off and throw around some invites. She offers her usual sarcasm: ''Yeah bro, let\'s fuckin' black out on a weekday, bro.''",
    buttons: [["''So...no?''", "advanceTo(scenario.fifteen)"]]
  },
   fifteen: {
    image: "sambye.jpg",
    text: "''Shotgun a Natty Light on my behalf. Bro.''",
    buttons: [["You can\'t say you\'re surprised she doesn\'t want to come", "advanceTo(scenario.sixteen)"]]
  },
   sixteen: {
    image: "russel.jpg",
    text: "Thankfully it\'s stopped raining by the time you make your way to your first class. The skinny grad TA at the front of the class explains that today is the day to lock down your final project groups. You immediately chat up Russel. He seriously needs to get rid of the beard and stand up straighter. Undeniably though, he\'s pretty sharp.",
    buttons: [["He's in.", "advanceTo(scenario.seventeen)"]]
  },
    seventeen: {
    image: "landa.jpg",
    text: "Shortly after, you make eye contact with Luke. Honestly one of the funniest guys you\'ve ever met. He would also be a safe bet, but he\'ll definitely want to bring Alison (The Beast with a Billion Questions).",
    buttons: [["Continue", "advanceTo(scenario.eighteen)"]]
  },
   eighteen: {
    image: "landa.jpg",
    text: "The chaos in the room seems to be subsiding; you need to figure this out before you end up stuck with the randos who never show up.",
    buttons: [["Let them join your group", "advanceTo(scenario.nineteen)"], ["Say you were thinking that you\'d work with...", "advanceTo(scenario.twenty)"]]
  },
    nineteen: {
    image: "landa.jpg",
    text: "Fuck.",
    buttons: [["At least you can drink off your sorrows later", "advanceTo(scenario.twentyone)"]]
  },
   twenty: {
    image: "landa.jpg",
    text: "Alison cuts in suddenly: ''With us! If that\'s cool.''",
    buttons: [["Fuck. At least you can drink off your sorrows later.", "advanceTo(scenario.twentyone)"]]
   },
   twentyone: {
    image: "party.jpg",
    text: "Thursday night. You\'re a little bit stoked that you\'re the designated doorkeeper for the first chunk of the party. Crushing the gym for the last two years has paid off. You don\'t take shit from anyone. You\'ve got a strong Jack and Coke in-hand, and Josh is on the porch with you smoking a spliff.",
    buttons: [["Continue", "advanceTo(scenario.twentytwo)"]]
   },
   twentytwo: {
    image: "party.jpg",
    text: "A group of girls walks by. Definitely freshmen who don\'t party that much. Josh: ''Dude, some of them are kinda hot.'' He yells out to them, ''Where you headed, ladies?'' It gets their attention. One of them looks over at you and seems very interested.",
    buttons: [["Yell to them as well. Maybe you can get the attention of that girl who seemed interested.", "advanceTo(scenario.twentythree)"], ["Take a long drink and see what happens.", "advanceTo(scenario.twentyfour)"]]
   },
    twentythree: {
    image: "party.jpg",
    text: "You can\'t think of anything clever to say so you whistle at them.",
    buttons: [["Continue", "advanceTo(scenario.twentyfour)"]]
   },
    twentyfour: {
    image: "party.jpg",
    text: "One girl gets a phone call and walks to the other side of the street. Most of them follow her. Josh tries to yell out again, but it\'s too late. He smacks you on the chest with the back of his hand. ''Pussy.''",
    buttons: [["''Dude, they seemed kinda...inexperienced.''", "advanceTo(scenario.twentyfive)"], ["''What did I miss?''", "advanceTo(scenario.twentysix)"]]
   },
    twentyfive: {
    image: "party.jpg",
    text: "We don\'t want a bunch of blacked out freshman girls getting themselves in trouble at our party. Not a good look, bro.'' Josh: ''Maybe you don\'t want that.'' He throws the last of his spliff on the lawn and heads inside.",
    buttons: [["Continue", "advanceTo(scenario.twentyseven)"]]
   },
   twentysix: {
    image: "party.jpg",
    text: "Josh: ''You didn\'t see those ladies? Stay sharp, frosh.'' He takes one last drag of his spliff and heads inside.",
    buttons: [["Continue", "advanceTo(scenario.twentyseven)"]]
   },
   twentyseven: {
    image: "party.jpg",
    text: "You knock back the last of your drink and head to the kitchen to refresh it. Lots of Jack and a little Coke. You check back on the door, and you really hope you aren\'t seeing what you\'re seeing. That's definitely Luke. And a bunch of randos. And fucking Alison.",
    buttons: [["Continue", "advanceTo(scenario.twentyeight)"]]
   },
   twentyeight: {
    image: "landa.jpg",
    text: "You hear Josh from inside, *cough* ''Whales,'' *cough*, and you take a mighty pull of your drink. They get to the door and Luke, clearly drunk, is excited to see you.",
    buttons: [["You let them in", "advanceTo(scenario.twentynine)"], ["Explain that, as much as you want to let them in, their ratio doesn't meet what's usually expected here, and that you've only been a brother for a while, and...", "advanceTo(scenario.thirty)"]]
   },
   twentynine: {
    image: "landa.jpg",
    text: "''Dude, man, I’m glad you came thru. Sup Alison. Beer's in the fridge and there's Franzia and tequila or some shit out back.''They file in to the house, and Josh says, ''Bro, just. Just fuckin\' go inside.'' ",
    buttons: [["Continue", "advanceTo(scenario.thirtyone)"]]
  },
  thirty: {
    image: "landa.jpg",
    text: "''I can\'t let you in, man. We\'re like. It\'s just a frat thing, bro. Like you don\'t really know anyone here, and like you\'ve got like a lot of dudes honestly, like, you understand?''",
    buttons: [["He seems to understand. The group heads out.", "advanceTo(scenario.thirtyone)"]]
  },
  thirtyone: {
    image: "party.jpg",
    text: "Well, that didn\'t feel awesome. It sounds like some of your brothers are setting up shot-skis. One calls out, ''Bro you tryna black out?''",
    buttons: [["Finish your drink and go crush shots with the boys.", "advanceTo(scenario.thirtytwo)"], ["Go upstairs and crash for the night.", "advanceTo(scenario.thirtythree)"]]
  },
  thirtytwo: {
    image: "blinds.jpg",
    text: "Your alarm goes off. The sun filters through the ramshackle blinds and hits you dead in the eye.",
    buttons: [["You're entirely too hungover to make it to class. Text your group and agree to meet on Saturday.", "advanceTo(scenario.thirtyfour)"]]
  },
  thirtythree: {
    image: "blinds.jpg",
    text: "Your alarm goes off. The sun filters through the ramshackle blinds and hits you dead in the eye.",
    buttons: [["You're entirely too hungover to make it to class. Text your group and agree to meet on Saturday.", "advanceTo(scenario.thirtyfour)"], ["Psych yourself up and get to class.", "advanceTo(scenario.thirtyfive)"]]
  },
  thirtyfour: {
    image: "blinds.jpg",
    text: "You spend the day in bed resting and playing video games.",
    buttons: [["Continue", "advanceTo(scenario.thirtysix)"]]
  },
  thirtyfive: {
    image: "group.jpg",
    text: "Today is a work-day in class. With a little bit of coffee in your system, you're feeling good. And you finally figured out a way to implement an AR fitting room. You're still a little stressed, but the project seems to be moving along nicely.",
    buttons: [["Your group agrees to meet up on Saturday to knock this thing out.", "advanceTo(scenario.thirtysix)"]]
  },
  thirtysix: {
    image: "group.jpg",
    text:"Saturday morning you and Alison are working on the UX section of your presentation. She has an idea, but she's having trouble explaining it. It's been a few minutes, and you aren't getting any closer to understanding what she wants. You just want to get back to work; you were on a roll.",
    buttons: [["Turn your laptop away and focus on her as she talks to you.", "advanceTo(scenario.thirtyseven)"], ["Tell her that we should stick to the plan that you laid out.", "advanceTo(scenario.forty)"]]
  },
  thirtyseven: {
    image: "group.jpg",
    text: "She seems a little more comfortable now, and you're definitely starting to follow what she's saying.",
    buttons: [["Tell her what you think she's saying but concisely.", "advanceTo(scenario.thirtyeight)"], ["Tell her that you think she's on to something and that you'd like to see how it would play out.", "advanceTo(scenario.thirtynine)"]]
  },
  thirtyeight: {
    image: "group.jpg",
    text: "She nods along as you speak and finally says, ''Yeah, that's sort of what I mean. Maybe it isn't worth the effort.''",
    buttons: [["You both continue working on the project in silence.", "advanceTo(scenario.fortyone)"]]
  },
  //good alison ending
  thirtynine: {
    image: "group.jpg",
    text: "She seems encouraged. ''Okay. Cool. Yeah, I'm gonna get started, and then I'll run it by you in a little bit?''",
    buttons: [["''That sounds good''", "advanceTo(scenario.fortyonea)"]]
  },
  forty: {
    image: "group,jpg",
    text: "''Look, I'm not really sure what you're getting at here. I feel like, if this were a legitimate problem, it would be easier to spell out. I really don't think anyone else will pick up on this.'' She seems to understand.",
    buttons: [["You both continue working on the project in silence.", "advanceTo(scenario.fortyone)"]]
  },
  fortyone: {
    image: "phonebuzz.jpg",
    text: "On Sunday morning, you get a text from Sam. Apparently her final project for Intro to Coding isn't going well. You meet up with her at the library.",
    buttons: [["Continue", "advanceTo(scenario.fortytwo)"]]
  },
  fortyonea: {
    image: "phonebuzz.jpg",
    text: "On Sunday morning, you get a text from Sam. Apparently her final project for Intro to Coding isn't going well. You meet up with her at the library.",
    buttons: [["Continue", "advanceTo(scenario.fortytwoa)"]]
  },
  fortytwo: {
    image: "samcoffee.jpg",
    text: "Sam: ''I really wish that we could just hang out like normal and that you didn't have to bail me out on this class all the time but I'm so fucked.''",
    buttons: [["''We can totally sort this out.''", "advanceTo(scenario.fortythree)"], ["''I doubt that's the case. You've got this.''", "advanceTo(scenario.fortythree)"]]
  },
  fortytwoa: {
    image: "samcoffee.jpg",
    text: "Sam: ''I really wish that we could just hang out like normal and that you didn't have to bail me out on this class all the time but I'm so fucked.''",
    buttons: [["''We can totally sort this out.''", "advanceTo(scenario.fortythreea)"], ["''I doubt that's the case. You've got this.''", "advanceTo(scenario.fortythreea)"]]
  },
  fortythree: {
    image: "samcoffee.jpg",
    text: "''I don't know, man. I've been staring at this shit for days, and it feels like every time I fix something the problem just moves somewhere else and then I have to debug that and then it's two in the damn morning and I haven't even started on all the other shit that I have to do this week.'' She's starting to speak more loudly and forcefully.",
    buttons: [["''Hey it's gonna be okay, I promise you.''", "advanceTo(scenario.fortyfour)"], ["''We don't need to worry about that other stuff right now''", "advanceTo(scenario.fortyfour)"]]
  },
  fortythreea: {
    image: "samcoffee.jpg",
    text: "''I don't know, man. I've been staring at this shit for days, and it feels like every time I fix something the problem just moves somewhere else and then I have to debug that and then it's two in the damn morning and I haven't even started on all the other shit that I have to do this week.'' She's starting to speak more loudly and forcefully.",
    buttons: [["''Hey it's gonna be okay, I promise you.''", "advanceTo(scenario.fortyfoura)"], ["''We don't need to worry about that other stuff right now''", "advanceTo(scenario.fortyfoura)"]]
  },
  fortyfour: {
    image: "samcoffee.jpg",
    text: "''And I try to talk to the TAs and get some just basic help. Like one specific fucking question that I have but whenever I ask they just like dive in to this long diatribe on the fundamentals of coding like I'm stupid.'' She's speaking very loudly now, and people are beginning to notice.",
    buttons: [["''I hate that they aren't helping you'", "advanceTo(scenario.fortyfive)"], ["''I can try to answer some questions''", "advanceTo(scenario.fortyfive)"]]
  },
  fortyfoura: {
    image: "samcoffee.jpg",
    text: "''And I try to talk to the TAs and get some just basic help. Like one specific fucking question that I have but whenever I ask they just like dive in to this long diatribe on the fundamentals of coding like I'm stupid.'' She's speaking very loudly now, and people are beginning to notice.",
    buttons: [["''I hate that they aren't helping you'", "advanceTo(scenario.fortyfivea)"], ["''I can try to answer some questions''", "advanceTo(scenario.fortyfivea)"]]
  },
  fortyfive: {
    image: "samcoffee.jpg",
    text: "''And now it's not even about doing well it's just like trying not to embarrass myself and trying to keep myself from becoming just a like a vehicle for some douchebag's like amazing and profound views on who-the-fuck-even-cares what.'' People are staring.",
    buttons: [["''Sam it's okay. Please take a breath, okay?'", "advanceTo(scenario.fortysix)"], ["''Sam I really feel like you're getting too emotional right now''", "advanceTo(scenario.fortynine)"]]
  },
  fortyfivea: {
    image: "samcoffee.jpg",
    text: "''And now it's not even about doing well it's just like trying not to embarrass myself and trying to keep myself from becoming just a like a vehicle for some douchebag's like amazing and profound views on who-the-fuck-even-cares what.'' People are staring.",
    buttons: [["''Sam it's okay. Please take a breath, okay?'", "advanceTo(scenario.fortysixa)"], ["''Sam I really feel like you're getting too emotional right now''", "advanceTo(scenario.fortyninea)"]]
  },
  fortysix: {
    image: "samcoffee.jpg",
    text: "''Like how come I'm the only one that's absolutely drowning right now?",
    buttons: [["''I promise that isn't true, we just need to--'", "advanceTo(scenario.fortyseven)"], ["''Sam maybe because this just isn't for you''", "advanceTo(scenario.fortynine)"]]
  },
  fortysixa: {
    image: "samcoffee.jpg",
    text: "''Like how come I'm the only one that's absolutely drowning right now?",
    buttons: [["''I promise that isn't true, we just need to--'", "advanceTo(scenario.fortysevena)"], ["''Sam maybe because this just isn't for you''", "advanceTo(scenario.fortyninea)"]]
  },
  fortyseven: {
    image: "samcoffee.jpg",
    text: "''I just feel like even considering getting into Comp Sci was a mistake.''",
    buttons: [["''I don't think it was a mistake.''", "advanceTo(scenario.fortyeight)",], ["''You know, maybe it was, Sam. ''", "advanceTo(scenario.fortynine)"]]
  },
  fortysevena: {
    image: "samcoffee.jpg",
    text: "''I just feel like even considering getting into Comp Sci was a mistake.''",
    buttons: [["''I don't think it was a mistake.''", "advanceTo(scenario.fortyeighta)",], ["''You know, maybe it was, Sam. ''", "advanceTo(scenario.fortyninea)"]]
  },
  fortyeight: {
    image: "samcoffee.jpg",
    text: "''Look, I know you're not in a good place right now, but it's okay. Needing help on this isn't a bad thing. It doesn't make you dumb. And getting upset I feel like is a factor of giving a shit about this. That's important. I'm sorry that you aren't getting the respect that you deserve from the department, but they can fuck off for now.''",
    buttons: [["''You're going to get this thing done, and I've got your back.''", "advanceTo(scenario.fifty)"]]
  },
  fortyeighta: {
    image: "samcoffee.jpg",
    text: "''Look, I know you're not in a good place right now, but it's okay. Needing help on this isn't a bad thing. It doesn't make you dumb. And getting upset I feel like is a factor of giving a shit about this. That's important. I'm sorry that you aren't getting the respect that you deserve from the department, but they can fuck off for now.''",
    buttons: [["''You're going to get this thing done, and I've got your back.''", "advanceTo(scenario.fiftya)"]]
  },
  fortynine: {
    image: "samcoffee.jpg",
    text: "''Like, look. I'm sorry, but I feel like you're just not seeing the big picture. If this is what's happening to you because of an intro-level class, can you even imagine yourself in an a tech career? Except instead of TAs, it's your boss, and he needs someone who can deliver consistently. Sam, trust me. You would hate a job like that.''",
    buttons: [["Continue", "advanceTo(scenario.fiftyone)"]]
  },
  fortyninea: {
    image: "samcoffee.jpg",
    text: "''Like, look. I'm sorry, but I feel like you're just not seeing the big picture. If this is what's happening to you because of an intro-level class, can you even imagine yourself in an a tech career? Except instead of TAs, it's your boss, and he needs someone who can deliver consistently. Sam, trust me. You would hate a job like that.''",
    buttons: [["Continue", "advanceTo(scenario.fiftyonea)"]]
  },
  //good sam ending
  fifty: {
    image: "sambye.jpg",
    text: "Sam: ... Sam: Let's... Fucking. Do this.",
    buttons: [["You give her a hug. You're really proud of her.", "advanceTo(scenario.fiftytwob)"]]
  },
  fiftya: {
    image: "sambye.jpg",
    text: "Sam: ... Sam: Let's... Fucking. Do this.",
    buttons: [["You give her a hug. You're really proud of her.", "advanceTo(scenario.fiftytwod)"]]
  },
  //bad sam ending
  fiftyone: {
    image: "samcoffee.jpg",
    text: "Sam: ''...maybe you're right. I just finish this thing in a simple way so I don't have to deal with it anymore. Yeah, I'm gonna head out and do that. Thanks.",
    buttons: [["You're glad she's being honest with herself.", "advanceTo(scenario.fiftytwo)"]]
  },
  fiftyonea: {
    image: "samcoffee.jpg",
    text: "Sam: ''...maybe you're right. I just finish this thing in a simple way so I don't have to deal with it anymore. Yeah, I'm gonna head out and do that. Thanks.",
    buttons: [["You're glad she's being honest with herself.", "advanceTo(scenario.fiftytwoa)"]]
  },
  //
  fiftytwo: {
    image: "final.jpg",
    text: "You show up to class on Monday looking fly. You're too nervous to pay attention to the first group that presents. You fidget with your pen and bounce your foot as the first team answers questions. A lot of questions.",
    buttons: [["Continue", "advanceTo(scenario.fiftythree)"]]
  },
  fiftytwoa: {
    image: "final.jpg",
    text: "You show up to class on Monday looking fly. You're too nervous to pay attention to the first group that presents. You fidget with your pen and bounce your foot as the first team answers questions. A lot of questions.",
    buttons: [["Continue", "advanceTo(scenario.fiftythreea)"]]
  },
  fiftytwob: {
    image: "final.jpg",
    text: "You show up to class on Monday looking fly. You're too nervous to pay attention to the first group that presents. You fidget with your pen and bounce your foot as the first team answers questions. A lot of questions.",
    buttons: [["Continue", "advanceTo(scenario.fiftythreeb)"]]
  },
  fiftytwod: {
    image: "final.jpg",
    text: "You show up to class on Monday looking fly. You're too nervous to pay attention to the first group that presents. You fidget with your pen and bounce your foot as the first team answers questions. A lot of questions.",
    buttons: [["Continue", "advanceTo(scenario.fiftythreed)"]]
  },
  fiftythree: {
    image: "final.jpg",
    text: "The presentation went fine. You're happy that your portion went so well, but your teammates just didn't have...presence. You were afraid that people were going to try to trip up Alison with obscure questions but they didn't. The audience tossed out a few basic questions but overall didn't have much to say. Ah well, if absolutely nothing else, it's over.",
    buttons: [["Continue", "advanceTo(scenario.fiftyfour)"]]
  },
  fiftythreea: {
    image: "final.jpg",
    text: "The presentation goes off without a hitch. You can barely recall what you said, but the audience seemed engaged. A couple guys tried to catch Alison with some unnecessarily complicated questions, but she rolled with it. Maybe they were trying to pay her back for asking so many questions in lecture; maybe they were just uncomfortable with seeing her confident. Regardless, it was a good day.",
    buttons: [["Continue", "advanceTo(scenario.fiftyfour)"]]
  },
  fiftythreeb: {
    image: "final.jpg",
    text: "The presentation went fine. You're happy that your portion went so well, but your teammates just didn't have...presence. You were afraid that people were going to try to trip up Alison with obscure questions but they didn't. The audience tossed out a few basic questions but overall didn't have much to say. Ah well, if absolutely nothing else, it's over.",
    buttons: [["Continue", "advanceTo(scenario.fiftyfourb)"]]
  },
  fiftythreed: {
    image: "final.jpg",
    text: "The presentation goes off without a hitch. You can barely recall what you said, but the audience seemed engaged. A couple guys tried to catch Alison with some unnecessarily complicated questions, but she rolled with it. Maybe they were trying to pay her back for asking so many questions in lecture; maybe they were just uncomfortable with seeing her confident. Regardless, it was a good day.",
    buttons: [["Continue", "advanceTo(scenario.fiftyfourb)"]]
  },
  //bad sam ending complete
  fiftyfour: {
    image: "phonebuzz.jpg",
    text: "As you're leaving class, you check your phone to find that you have two texts from Sam. One, received an hour ago, reads ''Good luck!'' The second one came in just two minutes ago. ''Wanna stop by my room after you're done with class?''",
    buttons: [["Continue", "advanceTo(scenario.fiftyfiveoops)"]]
  },
  fiftyfourb: {
    image: "phonebuzz.jpg",
    text: "As you're leaving class, you check your phone to find that you have two texts from Sam. One, received an hour ago, reads ''Good luck!'' The second one came in just two minutes ago. ''Wanna stop by my room after you're done with class?''",
    buttons: [["Continue", "advanceTo(scenario.fiftyfiveoopsb)"]]
  },
  fiftyfiveoops: {
    image: "omw.jpg",
    text: "You recall that Sam had her last final the evening before, so you wonder when she'll be flying back home for the summer. She's probably packing up her dorm as we speak. You have one more test on Wednesday evening, so you'll be a while.",
    buttons: [["Continue", "advanceTo(scenario.fiftyfive)"]]
  },
  fiftyfiveoopsb: {
    image: "omw.jpg",
    text: "You recall that Sam had her last final the evening before, so you wonder when she'll be flying back home for the summer. She's probably packing up her dorm as we speak. You have one more test on Wednesday evening, so you'll be a while.",
    buttons: [["Continue", "advanceTo(scenario.fiftyfiveb)"]]
  },
  fiftyfive: {
    image: "sambad.jpg",
    text: "You arrive to find that her room is completely cleared out, spare a few suitcases standing in the middle of the floor. Sam explains that she booked an earlier flight and would be heading out fairly soon.",
    buttons: [["Continue", "advanceTo(scenario.fiftysix)"]]
  },
  fiftyfiveb: {
    image: "samgood.jpg",
    text: "You get to her room to find that it's tidied but not completely disassembled. Looks like her roommate has moved out, though. Sam explains that her flight isn't until tomorrow morning and that she hopes you're still available to kick back and have a movie night.",
    buttons: [["''Of course!''", "advanceTo(scenario.fiftysixb)"]]
  },
  fiftysix: {
    image: "sambad.jpg",
    text: "Sam: ''Hey, sorry I kinda freaked out on you the other day. I was upset. Sociology just wasn't what I wanted it to be, and you were right; I don't really see myself in tech. So I think I'm gonna plan on taking next year off of school.''",
    buttons: [["Her phone buzzes in her hand and she reads the message.", "advanceTo(scenario.fiftyseven)"]]
  },
  fiftysixb: {
    image: "samgood.jpg",
    text: "Sam: ''Hey, thanks for like hearing me out the other day. I know I wasn't being super reasonable, but I'm glad you were there with me. Even if my project wasn't everything I wanted it to be, I feel good about coming back next year.''",
    buttons: [["You give her a hug. ''Me too.'' (End.)", "advanceTo(scenario.fiftyeight)"]]
  },
  fiftyseven: {
    image: "sambad.jpg",
    text: "''Damn yeah I need to get going. My mom's on my ass about getting to the airport in time. But hey, I'll see you when you get back to town. Good luck on that last final.''",
    buttons: [["End", "advanceTo(scenario.fiftyeight)"]]
  },
  fiftyeight: {
    image: "sambye.jpg",
    text: "In the end, this game came down to a very simple premise: were you willing to support the women in your life? Were you able to come from a place of care and understand that there are social forces that keep women from succeeding in tech?",
    buttons: [["Continue", "advanceTo(scenario.sixty)"]]
  },
  sixty: {
    image: "sambye.jpg",
    text: "If you achieved these goals, then you received one of the 'good' endings. If not, then you received one of the 'bad' endings. However, as someone playing the role of a straight, cis male in a male-dominated environment, these endings played out somewhat similarly for you. Engaging in microaggressive behavior and toxic masculinity didn't ruin your personal outcome; it simply pushed down the women around you.",
    buttons: [["Continue", "advanceTo(scenario.sixtyone)"]]
  },
  sixtyone: {
    image: "sambye.jpg",
    text: "It's in this way that men can do better. Engaging in positive masculinity and interrupting problematic behavior will always contribute to a more inclusive and overall more fulfilling outcome.",
    buttons: [["Play again?", "advanceTo(scenario.oneagain)"]]
  },
  oneagain: {
    image: "group.jpg",
    text: "Welcome to ''Choose Your Own Adventure, Bro.'' You play the role of a talented, confident young man nearing the end of his second semester in a Computer Science program. In this interactive story, you will find that the subtle choices that you make on a daily basis can have a profound impact on those around you.",
    buttons: [["Let's do this, BRO", "advanceTo(scenario.two)"]]
  },
};



advanceTo(scenario.one);
