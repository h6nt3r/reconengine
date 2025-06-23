function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('themeToggle');
    const isDark = body.classList.toggle('dark-mode');

    // Change icon
    button.innerText = isDark ? '☀️' : '🌙';

    // Store preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Apply saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').innerText = '☀️';
    }
});



function getKeywordss(){
    $.get($('#urla').val(), function(resp) {
        document.getElementById('keywords1').value = resp;
    });
}

function Generate() {
    $("#results").empty();
    const target = $('#targets').val();

    $.each($('#keywords1').val().split('\n'), function(index, keyword) {
        if (keyword.trim() === "") return;

        const link = `https://github.com/search?q=${target} ${keyword}&type=Code`;
        const encodedLink = encodeURI(link);
        const checkboxId = `cb_${index}`;

        $('#results').append(`
            <div class="mb-1 d-flex align-items-center">
                <input type="checkbox" id="${checkboxId}" class="me-2">
                <a href="${encodedLink}" target="_blank" onclick="document.getElementById('${checkboxId}').checked = true;">
                    ${keyword}
                </a>
            </div>
        `);
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

function specificPageDork() {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const dork = `site:${domain} inurl:"submit messages" | inurl:"submit" | inurl:"submit messages" | inurl:"submit form" | intitle:"submit form"`;
        window.open(`https://www.google.com/search?q=${encodeURIComponent(dork)}`, '_blank');
    } else {
        alert('Please enter a target domain.');
    }
}

function openDork(query) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const dork = query.replace(/example\.com/g, domain);
        window.open(`https://www.google.com/search?q=${encodeURIComponent(dork)}`, '_blank');
    } else {
        alert('Please enter a target domain.');
    }
}

function specificPageDork() {
    openDork('site:example.com inurl:"submit messages" | inurl:"submit" | inurl:"submit messages" | inurl:"submit form" | intitle:"submit form"');
}

function feedbackFormDork() {
    openDork('site:example.com inurl:"feedback.php" | inurl:"send feedback" | inurl:"feedbackus.php" | inurl:"feedback.aspx" | inurl:"feedback.asp" | inurl:"feedback.html" | intitle:"send feedback"');
}

function submitRequestDork() {
    openDork('site:example.com inurl:"submit a request" | intitle:"submit a request"');
}

function requestTypeFormsDork() {
    openDork('site:example.com inurl:"request-form" | inurl:"submit-a-request" | inurl:"request-form.aspx" | inurl:"request.php" | intitle:"request form"');
}

function forumPagesDork() {
    openDork('site:example.com intext:"Attachments (optional)"');
}

function submitFormsDork() {
    openDork('site:example.com intitle:"submit.php" | intitle:"submit" | intitle:"submit.php" | intitle:"submit.aspx" | intitle:"submit.asp" | intitle:"submit.html" | intitle:"submit-us.html" | intitle:"submit_us.html" | intitle:"submit.html" | intitle:"submit.html"');
}

function contactSupportDork() {
    openDork('site:example.com intitle:"support.php" | intitle:"support" | intitle:"contactus.php" | intitle:"support.aspx" | intitle:"support.asp" | intitle:"support.html" | intitle:"support-us.html"');
}

function contactUsPageDork() {
    openDork('site:example.com inurl:"contact.php" | inurl:"contactus" | inurl:"contactus.php" | inurl:"contactus.aspx" | inurl:"contactus.asp" | inurl:"contactus.html" | inurl:"contact-us.html" | inurl:"contact_us.html" | inurl:"contact.html" | inurl:"contactus.html"');
}

function reportPageDork() {
    openDork('site:example.com inurl:"submit a report" | intitle:"submit a report"');
}

function supportCenterDork() {
    openDork('site:example.com inurl:"Support Center" | intitle:"Support Center"');
}

function submitARequestPageDork() {
    openDork('site:example.com inurl:"Send Us a Message" | intitle:"Send Us a Message"');
}

function contactUsFormDork() {
    openDork('site:example.com intitle:"contact.php" | intitle:"contactus" | intitle:"contactus.php" | intitle:"contactus.aspx" | intitle:"contactus.asp" | intitle:"contactus.html" | intitle:"contact-us.html" | intitle:"contact_us.html" | intitle:"contact.html" | intitle:"contactus.html"');
}
function ResetDorkResults() {
    $("#results").empty();
    $("#keywords1").val(""); // Clear left textarea
    $("#results input[type='checkbox']").prop('checked', false);
}
