
lich = User.create({username: 'lichard', password: '1234'})
lich.polls.create({ picture_1_id: Picture.all[0].id,  picture_2_id: Picture.all[1].id })

my_poll.picture_1_votes+=1
my_poll.save()


