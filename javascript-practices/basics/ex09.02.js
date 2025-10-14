/**
 * URL 다루기
 * 
 * JavaScript로 URL을 다루는 방법 예
 * 
 * 1. 리다이렉트
 * 
 * location.href = url;
 * 
 * 2. ajax 통신
 * 
 * $.ajax(url)
 * fetch(url)
 * axios(url)
 * 
 */

var url = "http://www.mysite.com/user?name=hazard&email=hazard@gmail.com"


// 1. escape: URL 인코딩, 사용성이 떨어짐
var url1 = escape(url);
console.log(url1);


// 2. encodeURI: URL 전체중 파라미터 부분만 인코딩, URL 전체를 encoding 해야 하는 경우
var url2 = encodeURI(url);
console.log(url2);


// 3. encodeURIComponent
// 사용에 만들어야 할 URL : http://www.mysite.com/user?name=hazard&email=hazard@gmail.com
var url = "http://www.mysite.com/user"
var forData = {
    name: "hazard",
    email: "hazard@gmail.com"
}

var toQueryString = function(o){
    var qs = [];
    var index = 0;
    for(var props in o){
        qs[index++] = props + "=" + encodeURIComponent(o[props]);
    }
    
    return qs.join("&");
}

console.log(url + "?" + toQueryString(forData));