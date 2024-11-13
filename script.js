let myelement1 = document.getElementById("etap-0");
let myelement2 = document.getElementById("etap-1");
let myelement3 = document.getElementById("etap-2");
let myelement4 = document.getElementById("etap-3");
let myelement5 = document.getElementById("etap-4");
let div5 = document.querySelector(".tab-0");
let div6 = document.querySelector(".tab-1");
let div7 = document.querySelector(".tab-3");
let div8 = document.querySelector(".tab-3");

myelement1.style.zIndex = 100;
myelement2.style.zIndex = 0;
myelement3.style.zIndex = 0;
myelement4.style.zIndex = 0;
myelement5.style.zIndex = 0;
function next1() {
  document.getElementById("step-2").click();
  myelement1.style.zIndex = 0;
  myelement2.style.zIndex = 100;
  myelement3.style.zIndex = 0;
  myelement4.style.zIndex = 0;
  myelement5.style.zIndex = 0;
}
function next2() {
  document.getElementById("step-3").click();
  myelement1.style.zIndex = 0;
  myelement2.style.zIndex = 0;
  myelement3.style.zIndex = 100;
  myelement4.style.zIndex = 0;
  myelement5.style.zIndex = 0;
}
function next3() {
  document.getElementById("step-4").click();
  myelement1.style.zIndex = 0;
  myelement2.style.zIndex = 0;
  myelement3.style.zIndex = 0;
  myelement4.style.zIndex = 100;
  myelement5.style.zIndex = 0;
  PRIX1();
}
function next4() {
  soms();
  document.getElementById("step-5").click();
  myelement1.style.zIndex = 0;
  myelement2.style.zIndex = 0;
  myelement3.style.zIndex = 0;
  myelement4.style.zIndex = 0;
  myelement5.style.zIndex = 100;
  let date = document.getElementById("select3");
  document.getElementById("reservation").textContent = date.value;
}
function back1() {
  document.getElementById("step-1").click();
  myelement1.style.zIndex = 100;
  myelement2.style.zIndex = 0;
  myelement3.style.zIndex = 0;
  myelement4.style.zIndex = 0;
  myelement5.style.zIndex = 0;
}
function back2() {
  document.getElementById("step-2").click();
  myelement1.style.zIndex = 0;
  myelement2.style.zIndex = 100;
  myelement3.style.zIndex = 0;
  myelement4.style.zIndex = 0;
  myelement5.style.zIndex = 0;
}

function back3() {
  document.getElementById("step-3").click();
  myelement1.style.zIndex = 0;
  myelement2.style.zIndex = 0;
  myelement3.style.zIndex = 100;
  myelement4.style.zIndex = 0;
  myelement5.style.zIndex = 0;
}
function back4() {
  document.getElementById("step-4").click();
  myelement1.style.zIndex = 0;
  myelement2.style.zIndex = 0;
  myelement3.style.zIndex = 0;
  myelement4.style.zIndex = 100;
  myelement5.style.zIndex = 0;
}
document.getElementById("reservation-form");

document.addEventListener("submit", function (e) {
  e.preventDefault();

  const NomPrenom = document.getElementById("nom").value;

  const email = document.getElementById("email").value;

  let reservationData = {
    NometPrenom: NomPrenom,

    email: email,
  };
  localStorage.setItem("reservation", JSON.stringify(reservationData));
});

function veri() {
  if (adult + enfant == cheke) {
    document.getElementById("checkk").style.display = "block";
  } else {
    document.getElementById("checkk").style.display = "none";
  }
}

let myadult1 = document.getElementById("adult1");
let myadult2 = document.getElementById("adult2");
let myenfant1 = document.getElementById("enfant1");
let myenfant2 = document.getElementById("enfant2");
let adult = 0;
let enfant = 0;
if (adult + enfant < 8) {
  myadult1.addEventListener("click", () => {
    if (adult < 8) {
      adult++;
      document.getElementById("adultnum").textContent = adult;
      PRIX1();
      veri();
      pr();
    }
  });
  myadult2.addEventListener("click", () => {
    if (adult > 0) {
      adult--;
      document.getElementById("adultnum").textContent = adult;
      PRIX1();
      veri();
      pr();
    }
  });
  myenfant1.addEventListener("click", () => {
    if (enfant < 8) {
      enfant++;
      document.getElementById("enfantnum").textContent = enfant;
      PRIX1();
      veri();
      pr();
    }
  });
  myenfant2.addEventListener("click", () => {
    if (enfant > 0) {
      enfant--;
      document.getElementById("enfantnum").textContent = enfant;
      PRIX1();
      veri();
      pr();
    }
  });
}
let prixstor = 0;
function PRIX1() {
  let prixtotal = 0;
  let prixtotaladult = adult * 500;

  let prixtotaenfant = enfant * 100;
  prixtotal = prixtotaladult + prixtotaenfant;
  prixstor = prixtotal;
  console.log(prixtotal);
  console.log(prixstor);
  document.getElementById("PRIXTOTAL").textContent = `${prixtotal}dh`;
}
let cheke = 0;
let checkboxes = document.querySelectorAll(".check");
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      cheke++;
    } else {
      cheke--;
    }
    if (adult + enfant == cheke) {
      document.getElementById("checkk").style.display = "block";
    } else {
      document.getElementById("checkk").style.display = "none";
    }
  });
});
function pr() {
  document.getElementById("prix").innerHTML = prixstor;
}
function soms() {
  var date = JSON.parse(localStorage.getItem("reservation"));
  console.log(prixstor);

  let prixtotal = adult + enfant;
  console.log(prixtotal);
  console.log(adult);
  console.log(enfant);
  let total = document.getElementById("etap-4");
  for (let i = 0; i < prixtotal; i++) {
    total.innerHTML += `<div
              id="etap4"
              style="
                height: 500px;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <div class="card content">
                <div class="user-info">
                  <p>Nom et prénom : <span id="nom2"></span>${date.NometPrenom}</p>
                  <p>E-mail : <span id="email2">${date.email}</span></p>
                  <p>Date de réservation : <span id="reservation"></span></p>
                  <p>Prix : <span id="prix">${prixstor}DH</span></p>
                </div>
                <div class="qr-code">
                  <p>Code QR :</p>
                  <img src="qr-code.svg" alt="code QR" />
                </div>
              </div>
              
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
}
