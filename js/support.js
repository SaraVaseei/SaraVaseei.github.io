let name = "سارا واسعی";
let role = "پشتیبانی بخش فروش";
let image = "style/images/support.jpg";
let title_content_support = '<div><div class="chat-title"><img id="support_pic" src=' + image + ' alt="" width="32" height="32"></div><div></div><div id="support_role">' + role + '</div><div id="support_name">' + name + '</div></div>';
let title_content_default = '<div><img src="style/images/message.png" style="float: right; width: 32px"><h4>پشتیبانی آنلاین</h4></div>';

let chat = document.getElementById('chat');
let title = document.getElementById('popup-title');

function live_chat(div) {

    let className = div.getAttribute("class");

    if (className === "normal") {
        div.className = "active";
        chat.classList.remove("close-chat");
        chat.classList.add("open-chat");
        title.innerHTML = title_content_support;
        document.getElementById("chat-close-button").style.display = 'block';
        document.getElementById("support_pic").setAttribute("src", image);
        document.getElementById("support_name").innerHTML = name;
    }
    else {
        div.className = "normal";
        chat.classList.add("close-chat");
        chat.classList.remove("open-chat");
        title.innerHTML = title_content_default
    }

}

function toggle_chat() {
    let chat_header = document.getElementById('chat-header');
    chat_header.classList.remove("active");
    title.innerHTML = title_content_support;
    document.getElementById("chat-close-button").style.display = 'none';
    console.log(chat.classList);
    chat.classList.add("close-chat");
    chat.classList.remove("open-chat");
    console.log(chat.classList);
}

function chat_func() {
    event.preventDefault();
    let input = document.getElementById("chat-input");
    console.log(input.value);
    let input_value = input.value;
    axios.post('http://51.15.59.130:46260/send',
        {message: input.value},
        {
            mode: 'no-cors',
            headers: {
                // 'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }).then(function (response) {
        document.getElementById("chat-input").value = "";

        let chat_his = document.getElementById("first-chat");
        chat_his.innerHTML +=
            '<div class="chat-message-client"><img src="./style/images/user.png" alt="" width="32" height="32">' +
            '<div class="chat-message-client-content">' +
            '<p>' + input_value + '</p>' +
            '</div></div>';


        if (response.data.success) {
            axios.get('http://51.15.59.130:46260/fetch').then(function (res) {
                console.log(res);
                let date = new Date(res.data.responses[0].date);
                console.log(date);
                chat_his.innerHTML +=
                    '<div class="chat-message-support" >' +
                    '<img class="support-pic" src=' + image + ' alt="" width="32" height="32">' +
                    '<div class="chat-message-support-content">' +
                    '<div>' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '</div>' +
                    '<p>' + res.data.responses[0].message + '</p>' +
                    '</div>' +
                    '</div>'

            })
        }
    }).catch(function (error) {
        console.log(error);
    });

}

function get_support_info() {
    axios.get('http://51.15.59.130:46260/support')
        .then(function (response) {
            console.log(response);
            name = response.data.support.first + " " + response.data.support.last;
            image = response.data.support.picture;
            console.log(image)
        })
        .catch(function (error) {
            console.log(error);
        });
}

window.onload = function () {
    get_support_info();
};