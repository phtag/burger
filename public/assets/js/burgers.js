// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(document).on("click", ".burgers-to-eat-button", function(event) {
    // update the database to indicate that the selected burger has been eaten
    var burgerID = $(this).attr("id");
    var newBurgerState = {
      devoured: 1
    };
    // Send update to the server 
    $.ajax("/api/burgers/" + burgerID, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(document).on("click", "#add-burger-button", function(event) {
    var newBurger = {
      burger_name: $("#burger-name").val(),
      devoured: 0
    }
    console.log("Adding burger = " + newBurger.burger_name);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(result) {
        location.reload();
      }
    );
  });

  var $addBurgerButton = $("#add-burger-button");
  $addBurgerButton.on("click", handleAddBurgerBtnClick);
  // $(document).on("submit", ".create-form", function(event) {
  var handleAddBurgerBtnClick = function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

  };
});
