const seatContainer = document.querySelector('.seats-container');
let seatsbooked = document.querySelector('.booked');
let seatsRemaining = document.querySelector('.remaining');
let booked = 0;
let totalSeat = 35;
for(let i = 0; i < totalSeat; i++){
    let seats = document.createElement('div');
    seatContainer.appendChild(seats);
    seats.className = 'seats';
}
const seats = document.querySelectorAll('.seats');
seats.forEach(seat => {
    seat.addEventListener('click',()=> {
        if(seat.classList.contains("seat-booked")){
            seat.classList.remove('seat-booked');
            booked -= 1;
            seatsbooked.textContent = `Seats Booked : ${booked}`;
            totalSeat += 1;
            seatsRemaining.textContent = `Seats Remaining : ${totalSeat}`;
        }
        else{
            seat.classList.add('seat-booked');
            booked += 1;
            seatsbooked.textContent = `Seats Booked : ${booked}`;
            totalSeat -= 1;
            seatsRemaining.textContent = `Seats Remaining : ${totalSeat}`;
        }
    })
})
