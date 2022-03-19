// const message = prompt('How many times should you fuck Putin?');
// console.log(Number(message));
// // alert(message);
// console.log(message);

// 1. всплывает окно, где пользователь вводит номер комнаты

// об

// 2. высплывает окно, где пользователь вводит вид обслуживание
// 3. всплывает окно, где пользователю говорится что столик VIP забронирован на номер комнаты

const roomNumber = prompt('Введите номер комнаты');
console.log(roomNumber);

const service = prompt('Введите вид сервиса (ВИП / НЕ ВИП)');
console.log(service);

confirm(`проверьте правильность данных: 
Номер: ${roomNumber}
Сервис: ${service}`);

// const message = `Столик с обслуживанием ${service} забронирован за комнатой ${roomNumber}. Приятного аппетита!`;



alert(`Столик с обслуживанием ${service} забронирован за комнатой ${roomNumber}. Приятного аппетита!`);