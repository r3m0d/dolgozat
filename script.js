function ellenorzes(){
    var pont = 0;
    var negyedikmegoldas = "Fekete-erdő";
    if(document.getElementById("legnagyobbmap").value == negyedikmegoldas){
        pont +=1;
    }
    var otodikmegoldas = "Troll völgy";
    if(document.getElementById("legkisebbmap").value == otodikmegoldas){
        pont +=1;
    }

    if(document.getElementById("elso").checked==true){
        pont+=1;
    }
    var select = document.getElementById("fizetoeszkozok");
    var jovalasz = select.options[select.selectedIndex].value;
    pont+=parseInt(jovalasz);

    if(document.getElementById("cbox1").checked==true){
        pont+=1;
    }
    if(document.getElementById("cbox3").checked==true){
        pont+=1;
    }
    if(document.getElementById("cbox6").checked==true){
        pont+=1;
    }

    console.log(pont);
}