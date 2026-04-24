    document.getElementById("agregar").addEventListener("click", function(e) {
        e.preventDefault();

        let Descripcion = document.getElementById("descripcion").value;
        let Prioridad = document.getElementById("prioridad").value;
        let Fecha = document.getElementById("fecha").value;
        
        if (Descripcion === "" || Prioridad === "" || Fecha === "") {
            alert("Por favor, complete todos los campos.");
            return;
        }


        let tarjeta = document.createElement("div");
        tarjeta.classList.add("tarea-card");

        if (Prioridad === "Alta") {
            tarjeta.classList.add("prioridad-alta");
        } else if (Prioridad === "Media") {
            tarjeta.classList.add("prioridad-media");
        } else if (Prioridad === "Baja") {
            tarjeta.classList.add("prioridad-baja");
        }

        tarjeta.innerHTML = `
            <h4>${Descripcion}</h4>
            <p>Prioridad: ${Prioridad}</p>
            <p>Fecha límite: ${Fecha}</p>
            <button class="btn-eliminar">Eliminar</button>
            <button class="btn-progreso">En Progreso</button>
            <button class="btn-completar">Completar</button>
            <button class="btn-retroceder">Retroceder</button>
        `;

        document.querySelector("#pendientes .tareas-container").appendChild(tarjeta);       
            document.querySelector("#pendientes .contador").textContent = document.querySelectorAll("#pendientes .tarea-card").length;
            tarjeta.querySelector(".btn-completar").style.display = "none";
            tarjeta.querySelector(".btn-retroceder").style.display = "none";
        
        tarjeta.querySelector(".btn-eliminar").addEventListener("click", function() {
            tarjeta.remove();
            document.querySelector("#pendientes .contador").textContent = document.querySelectorAll("#pendientes .tarea-card").length;
            document.querySelector("#en-progreso .contador").textContent = document.querySelectorAll("#en-progreso .tarea-card").length;
            document.querySelector("#completadas .contador").textContent = document.querySelectorAll("#completadas .tarea-card").length;
        });

        tarjeta.querySelector(".btn-progreso").addEventListener("click", function() {
            document.querySelector("#en-progreso .tareas-container").appendChild(tarjeta);
            document.querySelector("#pendientes .contador").textContent = document.querySelectorAll("#pendientes .tarea-card").length;
            document.querySelector("#en-progreso .contador").textContent = document.querySelectorAll("#en-progreso .tarea-card").length;
                tarjeta.querySelector(".btn-progreso").style.display = "none";
                tarjeta.querySelector(".btn-retroceder").style.display = "inline-block";
                tarjeta.querySelector(".btn-completar").style.display = "inline-block";
            
        });

        tarjeta.querySelector(".btn-completar").addEventListener("click", function() {
            document.querySelector("#completadas .tareas-container").appendChild(tarjeta);
            document.querySelector("#en-progreso .contador").textContent = document.querySelectorAll("#en-progreso .tarea-card").length;
            document.querySelector("#completadas .contador").textContent = document.querySelectorAll("#completadas .tarea-card").length;
                tarjeta.querySelector(".btn-progreso").style.display = "none";
                tarjeta.querySelector(".btn-completar").style.display = "none";
                tarjeta.querySelector(".btn-retroceder").style.display = "none";
        });

        tarjeta.querySelector(".btn-retroceder").addEventListener("click", function() {
            document.querySelector("#pendientes .tareas-container").appendChild(tarjeta);
            document.querySelector("#pendientes .contador").textContent = document.querySelectorAll("#pendientes .tarea-card").length;
            document.querySelector("#en-progreso .contador").textContent = document.querySelectorAll("#en-progreso .tarea-card").length;
                tarjeta.querySelector(".btn-progreso").style.display = "inline-block";
                tarjeta.querySelector(".btn-completar").style.display = "none";
                tarjeta.querySelector(".btn-retroceder").style.display = "none";
        });

        // Limpiar campos
        document.getElementById("descripcion").value = "";
        document.getElementById("prioridad").value = "";
        document.getElementById("fecha").value = "";
    });