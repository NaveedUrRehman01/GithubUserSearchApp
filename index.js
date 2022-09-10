
function Buttontoggle()
{
  
  var x = document.getElementsByTagName("META")[3].content;
  

  if(x === "light"){
   document.getElementsByTagName('META')[3].content = "dark"
   document.getElementById('logo').style.color = "white"
  }
  else if(x === "dark"){
    document.getElementsByTagName('META')[3].content = "light"
    document.getElementById('logo').style.color = "black"
   
  }
  
}

const check = document.getElementById('btnsrch');
check.addEventListener('submit',function(){

    alert('hello')
})


// check.addEventListener('submit', function(e){
//     e.preventDefault();

//     var search = document.getElementById('searchBar').value;

//     alert(search)
// })
document.getElementById("btn").addEventListener("click", displayData);

function displayData(e) {
    e.preventDefault();

         var search = document.getElementById('searchBar').value;
        var originalName = search.split(' ').join('');
        console.log(originalName)
        fetch("https://api.github.com/users/" + originalName)
        .then(result => result.json())
        .then((data)=>{
            console.log(data)
         
            document.getElementById("user").innerHTML = data.name;
            document.getElementById("id").innerHTML = data.location;
            if(data.location == null){
                document.getElementById('id').innerHTML = 'Not available' ;
              }
            document.getElementById("date").innerHTML = data.created_at;
            document.getElementById("bio").innerHTML = data.bio;
            if(data.bio == null){
                document.getElementById('bio').innerHTML = "This Profile has no bio"
              }
            document.getElementById("repo").innerHTML = data.public_repos;
            document.getElementById("followers").innerHTML = data.followers;
            document.getElementById("following").innerHTML = data.following;
            document.getElementById("passPort").src = data.avatar_url;
            document.getElementById("place").innerHTML = data.location;
            if(data.location == null){
                document.getElementById('place').innerHTML = 'Not available' ;
              }
            document.getElementById("github").innerHTML = data.html_url;
            document.getElementById("twitter").innerHTML = data.twitter_username;
            if(data.twitter_username == null){
                document.getElementById('twitter').innerHTML = 'Not available' ;
              }
            document.getElementById("gitName").innerHTML = data.login;
            if(data.location == null){
                document.getElementById('id').innerHTML = 'Not available' ;
              }
            
        })
        search = document.getElementById('searchBar').value = " ";
}