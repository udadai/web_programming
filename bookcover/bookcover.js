function start() {
    var button = document.getElementById("printBookCover");
    button.addEventListener("click", getValues, false);
}
function getValues() {
    var theForm = document.book;
    if (theForm.title.value=="" || theForm.comments.value=="" || theForm.authors.value=="") {
        alert("입력란을 모두 채워주세요.");
    }
    else {
        var title = document.getElementById("title").value
        var comments = document.getElementById("comments").value
        var publisher = document.getElementById("publisher").value
        var authors = document.getElementById("authors").value
        Print(title, comments, publisher, authors)
    }
}
function Print(title, comments, publisher, authors) {
    var BookCoverDiv = document.getElementById("BookCover");

    BookCoverDiv.setAttribute("style", "display: inline-block;")
    BookCoverDiv.innerHTML = '<br><br><div style="text-align: center; border-radius: 10px; width: 300px; display: inline-block; border: solid 1px;">' +
        '<br><h2>' + title + '</h2><img src="https://blog.kakaocdn.net/dn/bVDUi3/btrpozcmjEv/MmVG7njKeJbD9AR1ItXNz1/img.png" style="width: 250px;"><div>'
        + comments + '</div>' + '<div>' + authors + ' 지음</div><br><br>'
        + '<div style="text-align: right; margin-right: 30px;">(주)'
        + publisher + '</div><br></div>';
}
function Disappear() {
    var BookCoverDiv = document.getElementById("BookCover");
    BookCoverDiv.setAttribute("style", "display: none;")
}
window.addEventListener("load", start, false);  
