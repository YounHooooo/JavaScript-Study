const proxy = new Proxy(
    {quiz: "테스트"},
    {
        set(target, property, value) {
            target[property] = value;

            const h1 = document.querySelector("h1");
            h1.innerText = value;

        },
    }
);

proxy.quiz = "설거지";
console.log(proxy.quiz);

setTimeout(() => {
    proxy.quiz = "안녕하신가"
}, 3000);

console.log(proxy)
