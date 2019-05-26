export const sendToDiscord = (
  apiKey: string,
  username: string,
  message: string
) => {
  const payload = JSON.stringify({
    content: message,
    username: username
  });
  const params = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: payload
  };
  console.log(payload);
  fetch(apiKey, params);
};
