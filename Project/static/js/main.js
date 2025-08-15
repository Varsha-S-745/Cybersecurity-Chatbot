const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const messages = document.getElementById("messages");
const sendBtn = document.getElementById("send-btn");

function appendMessage({ who = "bot", text = "" }) {
  const wrap = document.createElement("div");
  wrap.className = `msg ${who}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const label = who === "user" ? "You" : "SecureBuddy";
  bubble.innerHTML = `<strong>${label}:</strong> ${text}`;

  wrap.appendChild(bubble);
  messages.appendChild(wrap);
  messages.scrollTop = messages.scrollHeight;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  appendMessage({ who: "user", text });

  input.value = "";
  sendBtn.disabled = true;
  sendBtn.textContent = "Thinking…";

  try {
    const formData = new FormData();
    formData.append("message", text);

    const res = await fetch("/ask", {
      method: "POST",
      body: formData
    });
    const data = await res.json();

    if (!data.ok) {
      appendMessage({ who: "bot", text: `⚠️ ${data.error || "Something went wrong."}` });
    } else {
      appendMessage({ who: "bot", text: data.reply });
    }
  } catch (err) {
    appendMessage({ who: "bot", text: `⚠️ Network error: ${err.message}` });
  } finally {
    sendBtn.disabled = false;
    sendBtn.textContent = "Send";
  }
});
