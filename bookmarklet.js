javascript:(function(){
    try {
        var tokenInfo = '';
        for(var i=0;i<localStorage.length;i++){
            var key = localStorage.key(i);
            if(key && key.indexOf('CapacitorStorage.') === 0){
                try{
                    var parsed = JSON.parse(localStorage.getItem(key));
                    if(parsed && (parsed.access_token || parsed.expires_at || parsed.refresh_token)){
                        tokenInfo = (parsed.access_token||'') + '!' + (parsed.expires_at||'') + '!' + (parsed.refresh_token||'');
                        break;
                    }
                }catch(e){}
            }
        }
        if(!tokenInfo){
            alert('No token info found!');
            return;
        }
        var targetURL = 'https://projects.jessehoekema.com/SomtodayAuthToken?tokenInfo=' + encodeURIComponent(tokenInfo);
        window.location.href = targetURL;
    } catch(e){
        alert('Error: ' + e);
    }
})();
