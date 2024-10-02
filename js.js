
var PA = parseInt(localStorage.getItem("PP")) || 0; // Initialize PA from localStorage, or set to 0 if not found

// Initialize MM as an array if it doesn't exist in localStorage
var MM = JSON.parse(localStorage.getItem("MM")) || []; 

var NNq1 = {}
var NNq2 = {}
var NNq3 = {}
var NNq4 = {}
var NNq5 = {}

function FF(Namn, L, D11, B, PP1) {
    // Debugging log to check values
    console.log('FF called with:', Namn, L, D11);

    var GG = 'L' + L; // Key for the first JSON
    var GG11 = '../R/L' + D11; // Key for the JSON file name

    // Log the constructed fetch URLs
    console.log('Fetching from:', GG11 + '.json', 'and', GG11 + 'R.json');

    var HH = document.getElementById('in').value;
    var HH1 = document.getElementById('HEE');

    NNq1 = Namn;
    NNq2 = L;
    NNq3 = D11;
    NNq4 = B;
    NNq5 = PP1;

    // Fetch the first JSON file
    fetch(GG11 + '.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json(); // Parse the JSON from the response
        })
        .then(data => {
            var KII = data[GG];
            console.log(KII);
            HH1.textContent = KII;

            return fetch(GG11 + 'R.json'); // Return fetch promise for chaining
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json(); // Parse the second JSON from the response
        })
        .then(data => {
            var NN = data[GG];
            II(HH, NN, Namn, B, PP1);
        })
        .catch(error => {
            console.error('Fetch error:', error); // Handle any errors that occur during fetch
        });
}

function JJ(AQ) {
    // Ensure NNq1, NNq2, and NNq3 are properly set before calling FF
    console.log('JJ called with:', NNq1, NNq2, NNq3);
    FF(NNq1, NNq2, NNq3, AQ, NNq5);
}



function II(HH, NN, Namn, B, PP1) {
    console.log('User Input:', HH);
    console.log('Expected Answer:', NN);
    
    if (NN == HH && HH != '') { // Compare using strict equality
        console.log('Correct answer'); // Increment PA for correct answer
        
        // Check and add to MM if not already included
        if (!MM.includes(Namn + 'JA')) { 
            MM.push(Namn + 'JA');
            PA += PP1;
        }
        
        deleteFromMM(Namn + 'NEJ'); // Remove specific item from MM if it exists
        console.log('Score:', PA);
        SET();

    } else {
        console.log('Wrong answer');
        console.log('Correct Answer was:', NN);

        // Ensure logical operation for checking inclusion in MM
        if (!MM.includes(Namn + 'NEJ') && !MM.includes(Namn + 'JA')) {
            MM.push(Namn + 'NEJ');  
            SET(); // Update localStorage after pushing new value
        }
    }

    QQQQ('<' + B)
}

function SET() {
    localStorage.setItem("PP", PA); // Store updated score
    localStorage.setItem("MM", JSON.stringify(MM)); // Store MM as a string
}

function deleteFromMM(valueToDelete) {
    // Filter out the value to delete
    MM = MM.filter(item => item !== valueToDelete);
    
    // Update localStorage with the new MM array
    localStorage.setItem("MM", JSON.stringify(MM));
    
    console.log('Updated MM:', MM);
}

function DB() {
          console.log('MM length:', MM.length); // Log the length of MM array
      
          // Loop through MM and log each item
          for (let i = 0; i < MM.length; i++) {
            var SS = MM[i];
            
            // Handle 'NEJ'
            var S = SS.indexOf("NEJ");
            if (S !== -1) {
                let newText = SS.replace(/NEJ/g, "");
                let BGG = newText.trim();
                console.log(BGG);
        
                // Check if the element exists before trying to access its style
                let element = document.getElementById(BGG);
                if (element) {
                    element.style.backgroundColor = '#AF3939';
                }
            }
        
            // Handle 'JA'
            var S = SS.indexOf("JA");
            if (S !== -1) {
                let newText1 = SS.replace(/JA/g, "");
                let BGG1 = newText1.trim();
                console.log(BGG1);
        
                // Check if the element exists before trying to access its style
                let element1 = document.getElementById(BGG1);
                if (element1) {
                    element1.style.backgroundColor = '#41AF39';
                }
            }
        }
        
                

      }
      
DB()

function QQQQ(V) {
    if (V == 'E') {
        window.open('ELS.html', "_self")
    }
    if (V == 'M') {
        window.open('MLS.html', "_self")
    }
    if (V == 'H') {
        window.open('HLS.html', "_self")
    }
    if (V == '<') {
        window.open('index.html', "_self")
    }
    if (V == '<1') {
        window.open('../ELS.html', "_self")
    }
    if (V == '<2') {
        window.open('../MLS.html', "_self")
    }
    if (V == '<3') {
        window.open('../HLS.html', "_self")
    }
}

function QQ(V) {
    window.open('L/' + V + '.html', "_self");
}

function LL() {
    document.getElementById('PcP1').textContent = PA
    if (PA == 0 || PA > 0) {
        document.getElementById('PcP').textContent = '-'
    }
    if (PA == 5 || PA > 5) {
        document.getElementById('PcP').textContent = 'F'
    }
    if (PA == 10 || PA > 10) {
        document.getElementById('PcP').textContent = 'E'
    }
    if (PA == 15 || PA > 15) {
        document.getElementById('PcP').textContent = 'D'
    }
    if (PA == 20 || PA > 20) {
        document.getElementById('PcP').textContent = 'C'
    }   
    if (PA == 30 || PA > 30) {
        document.getElementById('PcP').textContent = 'B'
    }
    if (PA == 40 || PA > 40) {
        document.getElementById('PcP').textContent = 'A'
    }
}