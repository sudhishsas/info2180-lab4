window.onload = function () {

    const form = document.getElementById('myform')
    var result = document.getElementById('result');
   
    form.addEventListener('submit', onclick);
    function onclick(e){
        e.preventDefault();
        const formData = new FormData(this)
        fetch('superheroes.php', {
            method: 'post',
            body: formData
        }).then(function(res){
            return res.text();

        }).then(function(data){
            let result = document.getElementById("result")
            result.innerHTML = data;
        })
       
    }
        
    
};