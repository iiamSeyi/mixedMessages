




# 🔮 Mixed Messages – Daily Horoscope Generator

This is a Codecademy portfolio project that generates a randomized daily horoscope message. Each time you run the script, it gives you a unique combination of:

- Zodiac sign
- Type of luck (good, bad, or okay)
- A short news message fitting that luck type

---

## 📜 Example Output

```

Your sign is Leo. Today, you can expect good luck. Also, You will find a new opportunity today.

````

---

## 💡 Features

- Randomly selects one of the 12 zodiac signs
- Randomly assigns a luck type: `good`, `bad`, or `ok`
- Displays a relevant message tied to the type of luck
- Simple and fun way to simulate daily predictions

---

## 🧠 How It Works

The script uses a `phrases` object with multiple arrays:

- `signs`: List of zodiac signs
- `luck`: Three luck types
- `goodNews`, `badNews`, `okNews`: Messages tied to each luck category

It then uses JavaScript getters and `Math.random()` to generate a random combination and logs it to the console.

---

## 🛠️ Technologies

- JavaScript (ES6)
- Node.js (to run the script in terminal)
- VS Code (recommended editor)

---

## ▶️ How to Run

1. **Install Node.js** from [https://nodejs.org](https://nodejs.org) if you haven't already.
2. Clone this repository or copy the script into a `mixedMessages.js` file.
3. Open a terminal and run:

```bash
node mixedMessages.js
````

Each time you run the script, you'll see a new randomized horoscope!

---

## 📁 File Structure

```
mixedMessages/
│
├── mixedMessages.js   # Main logic
├── README.md          # Project overview and instructions
```

---

## 🙌 Inspiration

This project was created as part of the [Codecademy Full-Stack Engineer](https://www.codecademy.com/learn/full-stack-engineer-career-path) curriculum to practice working with objects, randomization, and functions in JavaScript.

---

## 📌 Future Improvements

* Add command line arguments to get horoscope for a specific sign
* Export messages to a text file or send via email
* Add mood emoji or color-coded output

---

## 🧑‍💻 Author

**Oluwaseyi Salisu**
GitHub: [@iiamSeyi](https://github.com/iiamSeyi)



