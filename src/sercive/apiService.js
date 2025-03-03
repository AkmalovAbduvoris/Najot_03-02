export async function updateLikeStatus(productId, likeStatus) {
  try {
      const response = await fetch(`https://67c3fd9d89e47db83dd2ef73.mockapi.io/products/${String(productId)}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ like: likeStatus })
      });

      if (!response.ok) throw new Error("Like holatini o'zgartirishda xatolik yuz berdi!");

      return await response.json();
  } catch (error) {
      console.error("Xatolik:", error);
      return null;
  }
}


export async function getAllProducts() {
  try {
    const response = await fetch("https://67c3fd9d89e47db83dd2ef73.mockapi.io/products");
    if (!response.ok) throw new Error("Ma'lumot yuklashda xatolik!");

    const data = await response.json();
    return data;
  } catch (error) {
    // console.error("Xatolik:", error);
    return [];
  }
}