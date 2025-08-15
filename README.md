# Cybersecurity-Chatbot

**CyberBuddy** is an interactive, text-based cybersecurity chatbot designed to help users learn essential security concepts in a friendly, structured, and easy-to-understand way.  
It answers **any cybersecurity-related question** in a **Definition → Key Points → Real-World Example** format, using relatable and practical examples (often India-friendly).  

## Project Description

The goal of CyberBuddy is to **make cybersecurity education engaging and accessible**.  
Instead of overwhelming the user with jargon, CyberBuddy explains concepts in simple terms, breaks them into clear bullet points, and gives relatable real-world scenarios.  

This version **does not include image search or visual explanations** — it focuses on detailed, text-based answers.

## Features

- **Interactive Q&A** – Ask any cybersecurity-related question and get structured, clear answers.  
- **Structured Format** – Always replies in:
  1. **Definition**
  2. **Key Points**
  3. **Real-World Example**
- **India-Friendly Examples** – Uses Indian services, ISPs, RBI/UPI examples when applicable.  
- **Polite & Safe** – Refuses illegal hacking requests, explains risks, and offers ethical learning alternatives.  
- **Lightweight & Fast** – Runs on Flask with OpenAI API for quick responses.  
- **No Image Fetching** – Purely text-based for faster response and simpler setup.  

## Advantages

- **Educational** – Covers topics from passwords, phishing, MFA, ransomware, encryption, firewalls, and more.  
- **Easy to Use** – Just type your question and get an instant, well-structured answer.  
- **Portable** – Runs locally on your computer without special hosting.  
- **Beginner-Friendly** – Ideal for students, office workers, and home users wanting to improve their cyber hygiene.  
- **Customizable** – You can tweak the system prompt in `app.py` to adjust the tone or add new features.

## How It Works

1. **User opens the web app** (Flask server).
2. **User types a question** related to cybersecurity.
3. **The app sends the question** to the OpenAI API with a fixed system prompt (CyberBuddy’s rules).
4. **OpenAI processes the request** and generates a reply in the fixed format.
5. **Flask sends the reply** back to the browser and displays it in the chat interface.

## Tools & Technologies Used

- **Backend:** [Flask](https://flask.palletsprojects.com/) (Python)
- **Frontend:** HTML, CSS, JavaScript (AJAX for instant chat updates)
- **AI Model:** OpenAI GPT-4o-mini (can be changed to other OpenAI models)
- **Environment Variables:** `.env` file to store API key securely
- **Deployment:** Local server (can be hosted on Render, Heroku, or other cloud services)



## Project Structure

