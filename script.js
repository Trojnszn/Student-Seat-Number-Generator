const intputedId = document.querySelector(".studentId");
const intputedRegNo = document.querySelector(".password");
const formSubmitBtn = document.querySelector(".form_submit");
const generateForm = document.querySelector(".generate_form");
const loginContainer = document.querySelector(".login_container");
const generetor = document.querySelector(".generetor");
const exam_center = document.querySelector("#exam_center");
const exam_type = document.querySelector("#exam_type");
const seat_number = document.querySelector(".seat_number");

generateForm.style.display = "none";
loginContainer.style.display = "flex";
const idData = {
    M1234: {
        regNo: 234123,
        UserName: "Fatima Bala",
        School: "Sky Heights Academy",
    },
    M12345: {
        regNo: 2341234,
        UserName: "Maryam Umar",
        School: "Sky Heights Academy",
    },
    M12346: {
        regNo: 23412345,
        UserName: "Fatima Hakeem",
        School: "Sky Heights Academy",
    },
};

const seats = {
    base_hall: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    nile_hall: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    garki_jamb_center: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    miacal_center: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};
const assigned = {};

const login = function () {
    if (idData[intputedId.value]) {
        if (intputedRegNo.value === idData[intputedId.value].regNo + "") {
            generateForm.style.display = "flex";
            loginContainer.style.display = "none";
        } else alert("incorrect Reg No");
    } else alert("incorrect Id");
};

formSubmitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    login();
});

generetor.addEventListener("click", function (e) {
    e.preventDefault();
    const hall = exam_center.value;
    const exam = exam_type.value;

    const rndN = Math.floor(10 * Math.random());
    const seatNumber = seats[hall][rndN];
    console.log(hall, exam);
    const seatN = `Your seat number is seat ${seatNumber}`;
    seat_number.textContent = seatN;
    this.style.display = "none";
    assigned[intputedId.value] = [hall, seatNumber];
    console.log(assigned);
});
