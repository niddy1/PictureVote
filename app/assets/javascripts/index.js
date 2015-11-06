//workaround for not having ajax.
//prevents submit on actual vote click, and then makes the vote when closing modal.
$('#poll-edit').on('click', function(e){
  e.preventDefault();
  // console.log('MEEE: ' + $('#poll-vote').val());
  // console.log('poll_id: ' + $('#poll-id').val());
  // console.log('user_id: ' + $('#poll-user_id').val());

  if ($('#poll-vote').val().split(',')[1] === 'one' ) {
    $("#modal").toggle();

    //FAILED AJAX ATTEMPT.. HAAALP
    // $.ajax({
    //   url: "/polls",
    //   type: "PUT",
    //
    //     poll: {
    //     picture_1_votes: 200
    //   }
    // });
    // $.put("/polls/1",
    // {
    //   poll: {
    //   picture_1_votes: 200
    // }
    // });
  }

  else if ($('#poll-vote').val().split(',')[1]  === 'two') {
    $("#modal2").toggle();
  }
})
$("#close-modal").on("click", function() {
  $("#modal").toggle();
  // console.log("You clicked the close button.");
  // console.log('pic_id_chosen: ' + $('#poll-vote').val());
  // console.log('poll_id: ' + $('#poll-id').val() );
  // console.log('user_id: ' + $('#poll-user_id').val());
  // console.log('data: ' + $('#poll-user_id').data());
  $('form#poll-edit').submit();
  // location.reload();
});


$("#close-modal2").on("click", function() {
  $("#modal2").toggle();
  // console.log("You clicked the close button.");
  // console.log('pic_id_chosen: ' + $('#poll-vote').val());
  // console.log('poll_id: ' + $('#poll-id').val() );
  // console.log('user_id: ' + $('#poll-user_id').val());
  // console.log('data: ' + $('#poll-user_id').data());
  $('form#poll-edit').submit();
  // location.reload();
});
