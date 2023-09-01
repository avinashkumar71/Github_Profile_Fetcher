let profile_id = document.getElementById('profile-id')
profile_id.classList.add('add');
let url = 'https://api.github.com/users/'
let smbt = document.getElementById('smbt');
var new_url;
var check = document.getElementById('checkout');

function USER_DATA(){
    let input_name = document.getElementById('input-text');
    return input_name.value;
}

smbt.addEventListener('click',function(){
    var user_name = USER_DATA();
    if(user_name.length==0){
        document.getElementById('error-msg').innerText ='Please Enter Userid';
    }
    else{
        profile_id.classList.remove('add');
        document.getElementById('error-msg').classList.add('add');
        new_url = `${url}${user_name}`;
        fetch_data(new_url);
    }
})


function fetch_data(url){
    fetch(url).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data);
        document.getElementById('userid').innerText=data.login;
        document.getElementById('Name').innerText=data.name;
        document.getElementById('imga').src=data.avatar_url;
        document.getElementById('about-p').innerText=data.bio;
        document.getElementById('followers').innerText=data.followers;
        document.getElementById('following').innerText=data.following;
        check.addEventListener('click',function(){
            window.open(data.html_url);
        });
    }).catch(function(error){
        console.log(error);
    })
}

