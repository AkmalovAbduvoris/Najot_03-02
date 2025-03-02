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