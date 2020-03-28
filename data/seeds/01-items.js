
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Items').del()
    .then(function () {
      // Inserts seed entries
      return knex('Items').insert([
        {id: 1, item_name: 'Iphone 11', description: `It's really a cool Iphone`, user_id: 3, availability: 1, daily_rate: 5, condition: "New", location: "Paris", imgs: "https://d1eh9yux7w8iql.cloudfront.net/product_images/1576661846.41.jpg"},
        {id: 2, item_name: 'Truck', description: 'The truck works as entended', user_id: 1, availability: 1, daily_rate: 20, condition: "Brand New", location: "Paris", imgs: "https://upload.wikimedia.org/wikipedia/commons/1/11/Freightliner_M2_106_6x4_2014_%2814240376744%29.jpg"},
        {id: 3, item_name: 'Ps4', description: `Buy my ps4 to kill all those noobs!`, user_id: 3, availability: 1, daily_rate: 1, condition: "Used", location: "Paris", imgs: "https://d1eh9yux7w8iql.cloudfront.net/product_images/1578991359.06.jpg"}
      ]);
    });
};
