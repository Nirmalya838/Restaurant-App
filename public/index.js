fetch('/api/read')
  .then(response => response.json())
  .then(orders => {
    orders.forEach(order => {
      const tableId = order.table;
      const targetTable = document.getElementById(tableId);

      const newRow = targetTable.insertRow();
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);

      cell1.innerHTML = order.price;
      cell2.innerHTML = order.dish;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'delete';
      cell3.appendChild(deleteBtn);

      deleteBtn.addEventListener('click', () => {
        deleteOrder(order.id);
      });

      const editBtn = document.createElement('button');
      editBtn.textContent = 'update';
      cell3.appendChild(editBtn);

      editBtn.addEventListener('click', () => {
        editOrder(order.id);
      });
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

function editOrder(orderId) {
  axios.get(`/api/read/${orderId}`)
    .then(response => {
      const table = document.getElementById("table");
      const price = document.getElementById('price');
      const dish = document.getElementById('dish');
      table.value = response.data.table;
      price.value = response.data.price;
      dish.value = response.data.dish;

      const updateBtn = document.getElementById('update');
      updateBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const updatedOrder = {
          table: table.value,
          dish: dish.value,
          price: price.value
        };

        axios.put(`/api/update/${orderId}`, updatedOrder)
          .then(response => {
            console.log(response);
            window.location.href = "/update.html";
          })
          .catch(error => console.log(error));
      });
    })
    .catch(error => console.log(error));
}

function deleteOrder(orderId) {
  axios.delete(`/api/delete/${orderId}`)
    .then(response => {
      console.log(response);
      window.location.href = "/delete.html";
    })
    .catch(error => console.log(error));
}
