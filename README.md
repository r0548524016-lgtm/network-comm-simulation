# network-comm-simulation
An OOP-based visual simulation of Client-Server-Cable network communication built with Vanilla JavaScript, highlighting Encapsulation, Message Routing, and Async Queue Handling.
# 📡 Network Communication Simulation (Client-Server-Cable OOP Simulation)

An interactive, visual simulation of a Client-Server network infrastructure built with Vanilla JavaScript, HTML5, and CSS3. The project demonstrates core Object-Oriented Programming (OOP) concepts, object encapsulation, message routing logic, and asynchronous network delay handling.

---

## 🏗️ Architecture & OOP Design Patterns

The system simulates an emergency communication network (e.g., Police, MADA, Control Room) by separating network responsibilities across dedicated JavaScript classes:

- **`Package` (Data Transfer Object):** Encapsulates packet payload data including sender (`from`), target destination (`to`), and body content (`message`).
- **`Client` (Endpoint Node):** Handles message creation and target translation. Encapsulates endpoint behavior by delegating transmission exclusively to its dedicated `Cable` instance.
- **`Cable` (Transmission Medium):** Represents the physical channel. Manages line state (`_is_busy`) to prevent collisions and simulates network latency via asynchronous timeouts (`getPackageToServer`, `getPackageToClient`).
- **`Server` (Central Routing Hub):** Receives packets, queues incoming messages per channel, processes payloads, and routes packages to the destination cable.

---

## ✨ Key Features & Logic Highlights

- **🔒 Strict Encapsulation:** Clients do not directly access the server or other clients. Communication flows strictly via composition: `Client ↔ Cable ↔ Server`.
- **⏳ Collision Prevention & Polling:** The client checks cable status before transmitting. If busy, an asynchronous polling mechanism retries until the channel is clear.
- **📥 Central FIFO Message Queueing:** The server processes incoming packets using dynamic array FIFO operations (`shift()`), ensuring sequential data delivery.
- **🎨 Real-Time Network Visualizer:** Dynamic UI animations illustrating physical packet transmission over cables (`moving` and `returning` keyframes) and live server status updates.

---

## 🛠️ Tech Stack

- **Core Logic:** Vanilla JavaScript (ES6+ OOP Classes, Composition, Asynchronous Timers).
- **Interface:** HTML5 & CSS3 (Flexbox, Glowing UI Components, Keyframe Animations).

---

## 👩‍💻 Author
Developed by **Rachel Rosenblum**
