// 장바구니에 아이템을 추가하는 함수
function addToCart(itemName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(itemName);
    localStorage.setItem("cart", JSON.stringify(cart));
}

// '장바구니' 버튼 클릭 시 이벤트 처리
const addButtons = document.querySelectorAll(".add-to-cart");

addButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const itemName = this.parentElement.querySelector("p").textContent;
        addToCart(itemName);
    });
});
