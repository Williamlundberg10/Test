
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
    nnq4 = B
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
            II(HH, NN, Namn,PP1);
        })
        .catch(error => {
            console.error('Fetch error:', error); // Handle any errors that occur during fetch
        });
}

function JJ(AQ) {
    // Ensure NNq1, NNq2, and NNq3 are properly set before calling FF
    console.log('JJ called with:', NNq1, NNq2, NNq3);
    FF(NNq1, NNq2, NNq3, AQ, NNq5);
    QQQQ('<' + AQ)
}



function II(HH, NN, Namn, PP1) {
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

}

function SET() {
    localStorage.setItem("PP", PA); // Store updated score
    localStorage.setItem("MM", JSON.stringify(MM)); // Store MM as a string
}

function SSSS() {
    PA = 0
    MM = []
    SET()
    window.open('index.html', "_self")
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
    
    var popElement = document.getElementById('pop');
    var leftValue = window.getComputedStyle(popElement).left;

    // Set the initial state for FQQWW
    let FQQWW = true;

    // Set the class of the eleme
    
    
    // Mapping of values to URLs
    var urlMap = {
        'E': 'ELS.html',
        'M': 'MLS.html',
        'H': 'HLS.html',
        'I': 'L/I.html',
        '<': 'index.html',
        '<!': '../index.html',
        '<1': '../ELS.html',
        '<2': '../MLS.html',
        '<3': '../HLS.html'
    };



    // Function to check position and navigate
    function checkPosition() {
        if (leftValue == '0px') {
            if (urlMap[V]) {
                FQQWW = false; // Update the loop control variable
                window.location.href = urlMap[V]; // Use window.location.href for navigation
            }
        }else{
            document.getElementById('pop').className = 'BOXQQQQ';
        }
    }

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            checkPosition();
            leftValue = window.getComputedStyle(popElement).left;
            console.log(leftValue)
        }, i * 100);
    }
}






function QQ(V) {

    var popElement = document.getElementById('pop');
    var leftValue = window.getComputedStyle(popElement).left;

    // Set the initial state for FQQWW
    let FQQWW = true;



    function checkPosition() {
        if (leftValue == '0px') {
            window.open('L/' + V + '.html', "_self");
        }else{
            document.getElementById('pop').className = 'BOXQQQQ';
        }
    }

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            checkPosition();
            leftValue = window.getComputedStyle(popElement).left;
            console.log(leftValue)
        }, i * 100);
    }
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

var MN = 0
var FF1 = '';
function RRRR() {
    var HH1 = document.getElementById('HEE');
    var HH2 = document.getElementById('HRR');
    var FF = '';
    FF1 = '';
    var GG = 5 + MN;

    // Function to generate random integers between min (inclusive) and max (inclusive)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var randomInt = getRandomInt(1, GG);
    var randomInt1 = getRandomInt(1, GG);
    var random = getRandomInt(1, 6);

    if (random == 1 || random == 5) {
        FF = randomInt + ' + ' + randomInt1;
    } else if (random == 2 || random == 6) {
        FF = randomInt + ' - ' + randomInt1;
    } else if (random == 3) {
        FF = randomInt + ' / ' + randomInt1;
    } else if (random == 4) {
        FF = randomInt + ' * ' + randomInt1;
    }

    FF1 = eval(FF); // Evaluate the string expression to get the result
    console.log(FF);
    console.log(FF1);
    console.log(MN);
    HH1.textContent = FF
    HH2.textContent = MN

}

function GFD() {
    var HH = document.getElementById('in1');
    if (HH.value == FF1 && !HH.value == '' ) {
        MN += 1
    }
    HH.value = ""
    RRRR()
}

document.addEventListener('keydown', function(event) {
    // Check if Ctrl + Shift + S is pressed
    if (event.key == "Enter") {
        // Prevent default behavior (optional)
        event.preventDefault();
        
        // Focus the input element
        if (document.activeElement === document.getElementById('in1')) {
            GFD();
        }

        if (document.activeElement === document.getElementById('in')) {
            if (NNq5 == 1) {
                FF(NNq1, NNq2, NNq3, 1, NNq5);
                QQQQ('<1')
            }
            if (NNq5 == 2) {
                FF(NNq1, NNq2, NNq3, 2, NNq5);
                QQQQ('<2')
            }
            if (NNq5 == 5) {
                FF(NNq1, NNq2, NNq3, 3, NNq5);
                QQQQ('<3')
            }
        }
        
    }
});

function NNNQQ() {
    document.getElementById('pop').className = 'BOXQQQQ q1';
}