$(document).ready(function () {
  $("#add").click(function () {
    var product = $(`<div class="productInfo">
                    <img width="100%" src="bag.jpeg" />

                    <div class="NamePrice">
                    <h3>${$("select#itemName").val()}</h3>
                    <p id="price">${$("select#itemPrice").val()}</p>
                    </div>

                    <div class="amount">
                    <p>${$("select#itemAmount").val()}</p>
                    </div>

                    <div>
                    <button class="deleteThis">DELETE</button>
                    </div>

                    </div>
`);

    $("#displayProducts").append(product);
    $(".deleteThis").click(function () {
      $(this).parent().parent().remove();
    });
  });
});
