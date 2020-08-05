
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('puns').del()
    .then(function () {
      // Inserts seed entries
      return knex('puns').insert([
        {
          author: "Priya Vaidya",
          pun: "Why was the IT guy in the hospital? He touched the firewall.",
          likes: 0,
          user_id: 1
        },
        {
          author: "Priya Vaidya",
          pun: "How does a computer get drunk? It takes screenshots.",
          likes: 0,
          user_id: 1
        },
        {
          author: "Priya Vaidya",
          pun: "Who's a computer's favorite singer? A Dell.",
          likes: 0,
          user_id: 1
        },
        {
          author: "Priya Vaidya",
          pun: "Why are people afraid of computers? They Byte.",
          likes: 0,
          user_id: 1
        },
        {
          author: "Priya Vaidya",
          pun: "What do computers do on a beach vacation? Surf the net.",
          likes: 0,
          user_id: 1
        }
      ]);
    });
};
