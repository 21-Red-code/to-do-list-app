function newItem(){
// Adding a new item
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
  alert("Please write somthing.");
} else {
  $('#list').append(li);
//after each click makes the input field empty
  $('#input').val('')
}

// Crossing an item out:
function crossOut() {
  li.toggleClass("strike");
}
li.on("dblclick", function crossOut() {
  li.toggleClass("strike");
});
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('x'));
li.append(crossOutButton);
crossOutButton.on("click", deleteListItem);

function deleteListItem(){
	li.addClass("delete");}
// to make the list sortable
  $('#list').sortable()
}
