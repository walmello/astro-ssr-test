const BASEROW_TOKEN = "Token V4PCu4Asm86jRC1xjy1BWHZX0y7aM0mB";
const TABLE_ID = 516021;

export async function getBaserowData() {
  const response = await fetch(
    `https://api.baserow.io/api/database/rows/table/${TABLE_ID}/?user_field_names=true`,
    {
      headers: {
        Authorization: BASEROW_TOKEN,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    console.error("Erro ao buscar dados do Baserow:", response.statusText);
    return null;
  }

  const data = await response.json();
  return data;
}
