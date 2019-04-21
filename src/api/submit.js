// FAKE URL
const URL = 'http://cabify.es/businessCard';

async function submitBusinessCard(userInfo) {
  try {
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    return await res.json();
  } catch (error) {
    throw new Error(error);
  }
}

export default submitBusinessCard;
