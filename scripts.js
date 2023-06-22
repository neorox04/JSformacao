var destaque = document.getElementById('destaque');

destaque.className = 'block';

function ShowHide() {

    if (destaque.className == 'block') {
        destaque.className = 'hide';
    }
    else {
        destaque.className = 'block'
    }
}

document.getElementById('omeuformulario').addEventListener('submit', function (event) {

    event.preventDefault();

    var namecar = document.getElementById('namecar').value;



    if (namecar == "") {
        alert("tem de inserir um valor");
    }
    else {
        console.log(namecar);
        var namecar = document.getElementById('namecar').value;

        var cars = JSON.parse(localStorage.getItem('cars')) || [];
    
        var id;
    
        if (cars.length > 0) {
            id = cars[cars.length - 1].id + 1;
        }
        else {
            id = 1;
        }
       
    }

    cars.push({ id: id, name: namecar });

    localStorage.setItem('cars', JSON.stringify(cars));

    document.getElementById('namecar').value = '';

    displayCars();

});

function displayCars() {

    var cars = JSON.parse(localStorage.getItem('cars')) || [];

    var carsdiv = document.getElementById('cars');
    carsdiv.innerHTML = '';
    
    for(var i = 0; i < cars.length; i++){
    
        var car = cars[i];
        var id = car.id;

        var li = document.createElement('li');
        li.innerHTML = car.name + ' ' + 
        '<button onclick="deleteCar('+ id +')">Delete</button>' + 
        '<button onclick="editCar('+ id +')">Edit</button>';
        

        console.log(car.name);

        carsdiv.appendChild(li);
    }

}


displayCars();


