var quotes = [];
quotes.push("Kanye said... If you have the opportunity to play this game of life you need to appreciate every moment. a lot of people don't appreciate the moment until it's passed.");
quotes.push("Kanye said... 'I don't even listen to rap. My apartment is too nice to listen to rap in.'");
quotes.push("Kanye said... 'I have this table in my new house. It was some weird nouveau-riche marble table, and I hated it. We would try to set up different things around it, but it never really worked. I realised that table was my ego. No matter what you put around it, under it, no matter who photographed it, the douchebaggery would always come through.");
quotes.push("Kanye said... 'I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle.'");
quotes.push("Kanye said... Sometimes people write novels and they just be so wordy and so self-absorbed. I am not a fan of books. I would never want a books autograph. I am a proud non-reader of books.");
quotes.push("DJ Khaled said... You can never run out of keys.");
quotes.push("DJ Khaled said... Don't ever play yourself.");
quotes.push("DJ Khaled said... You gotta water your plants. Nobody can water them for you.")
quotes.push("Drake said... I like sweaters. I have a sweater obsession, I guess.");
quotes.push("Drake said... A relationship without trust is like a phone without service. and what do you do with a phone that doesn't have service? Play games.")
quotes.push("Jaden Smith said... If I had a nickel for every time I've cried in the back of an uber, I would have another pair of Yeezy's.")
quotes.push("Jaden Smith said... Just stare in the mirror and cry and you'll be good.");
quotes.push("Jaden Smith said... Instagram is not the answer.");
quotes.push("Jaden Smith said... Yeah yeah, but how many pull ups can you do")
quotes.push("Jaden Smith said... The grass is always greener on the other side, so stay over there would ya")
quotes.push("Post Malone said... In order to find yourself, who you really are, you got to be with yourself; you got to hang out with yourself.")
quotes.push("2 Chainz said... My writ deserve a shout out, I'm like what up wrist? My stove deserve a shout out, I'm like what up stove?");
quotes.push("Wiz Khalifa said... Bestfriends has 11 letters, but so does Backstabber.");
quotes.push("Lil Wayne said.. Real gs move in silence like lasagna.");

exports.getRandomQuote = function() {
    return quotes[Math.floor(Math.random() * quotes.length)];
};