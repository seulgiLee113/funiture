// 장바구니에 담긴 아이템들을 불러오는 함수
function loadCart() {
    const cartItems = document.getElementById("cart-items");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartItems.innerHTML = "<li>장바구니에 아이템이 없습니다.</li>";
    } else {
        cart.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            cartItems.appendChild(listItem);
        });
    }
}

// 페이지가 로드될 때 장바구니 아이템 불러오기
window.onload = loadCart;
