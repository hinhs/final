$(document).ready(function() 
{    $("#results").click(function() {
    
    function isEmpty(thing) {
        if (thing == ""){
            return true
        }
        else{
            return false
        }
    }

    

    if (isEmpty(document.getElementById('q1').value) ||isEmpty(document.getElementById('q2').value) ||isEmpty(document.getElementById('q3').value) ||isEmpty(document.getElementById('q4').value) ||isEmpty(document.getElementById('q5').value) ||isEmpty(document.getElementById('q6').value) ||isEmpty(document.getElementById('q7').value) ||isEmpty(document.getElementById('q8').value) ||isEmpty(document.getElementById('q9').value) ||isEmpty(document.getElementById('q9').value) ||isEmpty(document.getElementById('q11').value) ||isEmpty(document.getElementById('q10').value) ||isEmpty(document.getElementById('q13').value) ||isEmpty(document.getElementById('q12').value) ||isEmpty(document.getElementById('q15').value) ||isEmpty(document.getElementById('q14').value) ||isEmpty(document.getElementById('q17').value) ||isEmpty(document.getElementById('q16').value) ||isEmpty(document.getElementById('q19').value) ||isEmpty(document.getElementById('q18').value) ||isEmpty(document.getElementById('q20').value)) {            
        alert("Please Complete the Quiz!");        
    }        

    else {            
        var cat1name = "Glycine";            
        var cat2name = "Alanine";
        var cat3name = "Valine";            
        var cat4name = "Leucine";  
        var cat5name = "Isoleucine";            
        var cat6name = "Proline";  
        var cat7name = "Phenylalanine";            
        var cat8name = "Tyrosine";  
        var cat9name = "Tryptophan";            
        var cat10name = "Serine";  
        var cat11name = "Theronine";            
        var cat12name = "Cysteine";  
        var cat13name = "Methionine";            
        var cat14name = "Asparagine";  
        var cat15name = "Glutamine";            
        var cat16name = "Lysine";  
        var cat17name = "Arginine";            
        var cat18name = "Histidine";  
        var cat19name = "Aspartate";            
        var cat20name = "Glutamate";  
        var cat21name = "None"; 

        var cat1 = (document.getElementById('q1').value == cat1name);
        var cat2 = (document.getElementById('q2').value == cat2name); 
        var cat3 = (document.getElementById('q3').value == cat3name); 
        var cat4 = (document.getElementById('q4').value == cat4name); 
        var cat5 = (document.getElementById('q5').value == cat5name); 
        var cat6 = (document.getElementById('q6').value == cat6name); 
        var cat7 = (document.getElementById('q7').value == cat7name); 
        var cat8 = (document.getElementById('q8').value == cat8name); 
        var cat9 = (document.getElementById('q9').value == cat9name); 
        var cat10 = (document.getElementById('q10').value == cat10name); 
        var cat11 = (document.getElementById('q11').value == cat11name); 
        var cat12 = (document.getElementById('q12').value == cat12name); 
        var cat13 = (document.getElementById('q13').value == cat13name); 
        var cat14 = (document.getElementById('q14').value == cat14name); 
        var cat15 = (document.getElementById('q15').value == cat15name); 
        var cat16 = (document.getElementById('q16').value == cat16name); 
        var cat17 = (document.getElementById('q17').value == cat17name); 
        var cat18 = (document.getElementById('q18').value == cat18name); 
        var cat19 = (document.getElementById('q19').value == cat19name); 
        var cat20 = (document.getElementById('q20').value == cat20name); 


        //console.log(cat4)
        //console.log(document.getElementById('q3').value)

        var cat21 = (cat1 && cat2 && cat3 && cat4 && cat5 && cat6 && cat7 && cat8 && cat9 && cat10 && cat11 && cat12 && cat13 && cat14 && cat15 && cat16 && cat17 && cat18 && cat19 && cat20);
        var categories = [];                        

        if (!cat1) { categories.push(cat1name) };            
        if (!cat2) { categories.push(cat2name) };
        if (!cat3) { categories.push(cat3name) };
        if (!cat4) { categories.push(cat4name) }; 
        if (!cat5) { categories.push(cat5name) }; 
        if (!cat6) { categories.push(cat6name) }; 
        if (!cat7) { categories.push(cat7name) }; 
        if (!cat8) { categories.push(cat8name) }; 
        if (!cat9) { categories.push(cat9name) }; 
        if (!cat10) { categories.push(cat10name) }; 
        if (!cat11) { categories.push(cat11name) }; 
        if (!cat12) { categories.push(cat12name) }; 
        if (!cat13) { categories.push(cat13name) }; 
        if (!cat14) { categories.push(cat14name) }; 
        if (!cat15) { categories.push(cat15name) }; 
        if (!cat16) { categories.push(cat16name) }; 
        if (!cat17) { categories.push(cat17name) }; 
        if (!cat18) { categories.push(cat18name) }; 
        if (!cat19) { categories.push(cat19name) }; 
        if (!cat20) { categories.push(cat20name) }; 
        
        if (cat21) { categories.push(cat21name) };

        

        var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';                    
        $("#categorylist").text(catStr);                        
        $("#categorylist").show("slow");
        
        

        if (!cat1) { $("#category1").show("slow"); };            
        if (!cat2) { $("#category2").show("slow"); };                                   
        if (!cat3) { $("#category3").show("slow"); };
        if (!cat4) { $("#category4").show("slow"); };
        if (!cat5) { $("#category5").show("slow"); };
        if (!cat6) { $("#category6").show("slow"); };
        if (!cat7) { $("#category7").show("slow"); };
        if (!cat8) { $("#category8").show("slow"); };
        if (!cat9) { $("#category9").show("slow"); };
        if (!cat10) { $("#category10").show("slow"); };
        if (!cat11) { $("#category11").show("slow"); };
        if (!cat12) { $("#category12").show("slow"); };
        if (!cat13) { $("#category13").show("slow"); };
        if (!cat14) { $("#category14").show("slow"); };
        if (!cat15) { $("#category15").show("slow"); };
        if (!cat16) { $("#category16").show("slow"); };
        if (!cat17) { $("#category17").show("slow"); };
        if (!cat18) { $("#category18").show("slow"); };
        if (!cat19) { $("#category19").show("slow"); };
        if (!cat20) { $("#category20").show("slow"); };
        { $("#closing").show("slow"); };
    }
    });});