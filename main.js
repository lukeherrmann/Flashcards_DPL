$(document).ready( function() {
  $('#add').on('click', function(){
    let cardNew = $("#name").val();
    let infoNew = $("#info").val();
    let list = $("#cards-list")
    list.append("hello")
  })
});