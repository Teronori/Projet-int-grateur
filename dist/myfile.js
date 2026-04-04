var computer = document.querySelector('#container');
var i = 0;
var increment = function (e) {
    e.preventDefault();
    i++;
    var span = computer === null || computer === void 0 ? void 0 : computer.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
computer.addEventListener('click', increment);
