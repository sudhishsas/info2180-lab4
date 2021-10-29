window.onload = function () {

    console.log('worked');
    let search = document.querySelector('.btn');
    let form = document.getElementsByTagName('form');
   
    search.addEventListener('click', e =>{
        e.preventDefault();
        var content = document.getElementById('search').value;
        if(content == ""){
            var t = "Please enter content in the search feild."; 
           fetch('http://localhost/info2180-lab4/superheroes.php')
                    .then( res => {
                        if(res.ok){
                            console.log('worked')
                        }else{
                            console.log("not work")
                        }
                        return res.text();
                    })
                    .then(data => alert(data))
                    .catch(error => console.log('ERROR'))
            
            
        }else{
            console.log('searched');
        };
    });
    
};