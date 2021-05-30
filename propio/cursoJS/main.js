

let dineroCofla = prompt("¿Cuanto dinero tienes Cofla?");
let dineroRoberto = prompt("¿Cuanto dinero tienes Roberto?");
let dineroPedro = prompt("¿Cuanto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);

// DINERO COFLA

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla comprate el helado de agua");
    alert("y te sobran " + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla comprate el helado de crema");
    alert("y te sobran " + (dineroCofla - 1));
}


else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla comprate el helado de chocolate");
    alert("y te sobran " + (dineroCofla - 1.6));
}


else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla comprate el helado de vainilla");
    alert("y te sobran " + (dineroCofla - 1.7));
}


else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla comprate el helado de fresa");
    alert("y te sobran " + (dineroCofla - 1.8));
}


else if (dineroCofla >= 2.9) {
    alert("Cofla comprate el helado con confites o el bote de 1/4kg");
    alert("y te sobran " + (dineroCofla - 2.9));
    
} 

else {
    alert("Lo sieto cofla no tiene el suficiente dinero para ningun helado");
}

// DINERO ROBERTO 

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto comprate el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto comprate el helado de crema");
}


else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto comprate el helado de chocolate");
}


else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto comprate el helado de vainilla");
}


else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto comprate el helado de fresa");
}


else if (dineroRoberto >= 2.9) {
    alert("Roberto comprate el helado con confites o el bote de 1/4kg");
    
} 

else {
    alert("Lo sieto roberto no tiene el suficiente dinero para ningun helado");
}

// DINERO PEDRO 

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro comprate el helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro comprate el helado de crema");
}


else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro comprate el helado de chocolate");
}


else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro comprate el helado de vainilla");
}


else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro comprate el helado de fresa");
}


else if (dineroPedro >= 2.9) {
    alert("Pedro comprate el helado con confites o el bote de 1/4kg");
    
} 

else {
    alert("Lo sieto pedro no tiene el suficiente dinero para ningun helado");
}
