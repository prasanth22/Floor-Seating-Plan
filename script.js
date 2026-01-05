const sheetURL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vSlPbhaTHuBVIhZGhJubSSy_L02DwUAp0jC_rRUrZiMxmVPiXenOqN-pe0lLZyk4y4hvMOaiKGVx21s/pub?output=csv";

const floor = document.getElementById("floor");
const tooltip = document.getElementById("tooltip");

/* Seat type rule */
function getSeatType(seatId) {
  if (seatId.startsWith("A")) return "cabin";
  if (seatId.startsWith("B")) return "big";
  if (seatId.startsWith("C")) return "small";
  return "small";
}

fetch(sheetURL)
  .then(res => res.text())
  .then(csv => {
    const lines = csv.trim().split("\n");
    const headers = lines[0].split(",");

    const idx = {
      seatId: headers.indexOf("seat_id"),
      row: headers.indexOf("row"),
      col: headers.indexOf("col"),
      name: headers.indexOf("emp_name"),
      designation: headers.indexOf("designation"),
      dept: headers.indexOf("department"),
      email: headers.indexOf("email")
    };

    lines.slice(1).forEach(line => {
      const cols = line.split(",");

      const seatId = cols[idx.seatId];
      const row = cols[idx.row];
      const col = cols[idx.col];
      const name = cols[idx.name];
      const designation = cols[idx.designation];
      const dept = cols[idx.dept];
      const email = cols[idx.email];

      if (!seatId || !row || !col) return;

      const seatType = getSeatType(seatId);

      const seat = document.createElement("div");
      seat.classList.add("seat", seatType);
      seat.id = seatId;
      seat.textContent = seatId;

      seat.style.gridRowStart = row;
      seat.style.gridColumnStart = col;


      if (name && name !== "Empty") {
        seat.classList.add("occupied");

        seat.onmousemove = e => {
          tooltip.style.display = "block";
          tooltip.style.left = e.pageX + 10 + "px";
          tooltip.style.top = e.pageY + 10 + "px";
          tooltip.innerHTML = `
            <b>${name}</b><br>
            ${designation}<br>
            ${dept}<br>
            Seat: ${seatType.toUpperCase()}<br>
            ${email}
          `;
        };

        seat.onmouseleave = () => tooltip.style.display = "none";
      }

      floor.appendChild(seat);
    });
  })
  .catch(err => console.error("Sheet load failed:", err));
