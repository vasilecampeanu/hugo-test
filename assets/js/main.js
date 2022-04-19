// --------------------------------------------------------------------------------------------
// Global variables
// --------------------------------------------------------------------------------------------

const loadin_animation = document.getElementById("loading-animation");
const loader  = document.querySelector(".loader");
const wrapper = document.querySelector(".site-wrapper");
const body    = document.getElementById("body");

// --------------------------------------------------------------------------------------------
// Loading animation
// --------------------------------------------------------------------------------------------

window.onload = function () {
    var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart; 
    console.log('Page load time is '+ loadTime);
    
    if(loadTime < 500)
    {
        loadTime = 0;
    }

    (function () {
        wrapper.style.display = 'grid';
        body.classList.add("hide-overflow");
        
        setTimeout(() => {
            loader.style.opacity  = 0;
            loader.style.display  = 'none';
            loadin_animation.remove();
            setTimeout(() => (wrapper.style.opacity = 1), 50);
        }, loadTime);

        setTimeout(() => (body.classList.remove("hide-overflow")), loadTime);
        
        // Set timeout for tartup modal
        // setTimeout(() => (
        //     $('#modal-container').removeAttr('class').addClass('one'),
        //     $('body').addClass('modal-active')
        // ), loadTime + 1000);
    }());
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// --------------------------------------------------------------------------------------------
// Theme settings
// --------------------------------------------------------------------------------------------

var icon  = document.getElementById("toggle");

// Set a local item "theme" as default for the first time when the user enters the site
var theme = window.localStorage.getItem("theme");

if(theme)
{
    console.log(theme);
}
else
{
    window.localStorage.setItem("theme", "default");
}

if(theme === "light")
{
    document.body.setAttribute('data-theme', 'light');
}
else
{
    document.body.setAttribute('data-theme', 'dark');
}

if(theme === "light")
{
    document.body.classList.toggle("dark-theme");
}

icon.onclick = function ()
{
    document.body.classList.toggle("dark-theme");

    if(theme === "default")
        window.localStorage.setItem("theme", "light");
        
    if(theme === "light")
        window.localStorage.setItem("theme", "dark");
        
    if(theme === "dark")
        window.localStorage.setItem("theme", "light");

    window.location.reload();
}

// --------------------------------------------------------------------------------------------
// Highlight blog link in post pages
// --------------------------------------------------------------------------------------------

const links = document.getElementsByTagName('a')
const current_url = location.href;
const post_page = "/post";

console.log(current_url.includes(post_page));

if (current_url.includes(post_page)) {
    const blog_url = current_url.substring(0, current_url.lastIndexOf(post_page)) + '/';

    for (const link of links) {
        if (link.href === blog_url) {
            link.classList.add('active')
        }
    }
}

// --------------------------------------------------------------------------------------------
// Dropdown menu for language switch
// --------------------------------------------------------------------------------------------

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) 
    {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        
        for (var i = 0; i < dropdowns.length; i++) 
        {
            var openDropdown = dropdowns[i];
            
            if (openDropdown.classList.contains('show')) 
            {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function dropDownFunction() {
    document.getElementById("dropdown-language-content").classList.toggle("show");
}

// --------------------------------------------------------------------------------------------
// Burger menu - mobile navbar
// --------------------------------------------------------------------------------------------

var burger = document.getElementById('burger'),
    nav    = document.getElementById('mobile-navbar');

burger.addEventListener('click', function(e){
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
    body.classList.toggle('hide-overflow');
});

// --------------------------------------------------------------------------------------------
// Tab menu
// --------------------------------------------------------------------------------------------

function openTab(evt, tab_name) 
{
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) 
    {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-links");

    for (i = 0; i < tablinks.length; i++) 
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tab_name).style.display = "block";
    evt.currentTarget.className += " active";   
}

// --------------------------------------------------------------------------------------------
// Startup modal
// --------------------------------------------------------------------------------------------

$('#modal-container').click(function() {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});