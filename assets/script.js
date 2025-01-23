
function getKeywordss(){
    $.get($('#urla').val(), function(resp) {
        document.getElementById('keywords1').value = resp;
    });
}

function Generate(){
    $("#results").empty();
    $.each($('#keywords1').val().split('\n'), function(){
      var link = "https://github.com/search?q="+$('#targets').val()+" "+this+"&type=Code";
      $('#results').append("<tr><td><input type=\"checkbox\"></td><td> <a href=\""+encodeURI(link)+"\" target=\"_blank\">"+this+"</td></tr>");
    });
}

function subdomainDork(dork) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}

function portDork(dork) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}

function urlDork(dork) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}

function genericDork(dork) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}



function allDork(dork) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}


function orDork(dork) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}

function gitDork(dork) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}

function cmsDork(dork) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}

function cveDork(dork) {
    const domain = document.getElementById('searccve').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}
