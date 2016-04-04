exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries - Only do this if you are ok with losing current data in //the table - if not delete the del() statement
    knex('apes').del(),

    // Inserts seed entries
    knex('apes').insert({
      id: 1,
      type: 'gorilla'
    }),
    knex('apes').insert({
      id: 2,
      type: 'bonobo'
    }),
    knex('apes').insert({
      id: 3,
      type: 'orangutan'
    })
  );
};
