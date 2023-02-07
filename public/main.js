const addBtns = document.querySelectorAll("#addToCart");

const addItemToCart = async (id) => {
  try {
    await fetch("/", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
  }
};

addBtns.forEach((addBtn) => {
  addBtn.addEventListener("click", () => {
    const id = addBtn.dataset.id;
    addItemToCart(id);
  });
});
