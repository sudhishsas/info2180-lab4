window.onload = function () {

    console.log('worked');
    let search = document.querySelector('.btn');
    let form = document.getElementsByTagName('form');
   
    search.addEventListener('click', e =>{
        e.preventDefault();
        console.log('yep');
        var content = document.getElementById('search').value;
        console.log(content);
        if(content == ""){
            var t = "Please enter content in the search feild.";
            alert(t);
        }else{
            console.log('searched');
        };
    });
    
};