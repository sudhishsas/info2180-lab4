window.onload = function () {

    let search = document.querySelector('btn');
    let form = document.getElementsByTagName('form');
    var result = document.getElementById('result');
   
    search.addEventListener('click', e =>{
        e.preventDefault();
        console.log('worked yep');
        var content = document.getElementById('search').value;
        if(content == "" || content == null){ 
            e.preventDefault();
           fetch('http://localhost/info2180-lab4/superheroes.php')
                    .then( res => {
                        if(res.ok){
                            console.log('worked');
                            return res.text();
                        }else{
                            console.log("not work");
                        }
                    })
                    .then(data => 
                        result.innerHTML = data)
                    .catch(error => console.log('ERROR'))
            
            
        }else{
            e.preventDefault();
            fetch('http://localhost/info2180-lab4/superheroes.php')
            .then( rest => {
                if(rest.ok){
                    console.log('worked');
                    return rest.text();
                }else{
                    console.log("not work");
                }
            })
            .then(data =>{ console.log(data);
                result.innerHTML = data})
            .catch(error => console.log('ERROR'))
                console.log('searched it');
            
        };
    });
    
};