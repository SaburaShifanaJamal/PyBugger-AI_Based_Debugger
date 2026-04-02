# 👾 PyBugger  
### A Hybrid AI-Powered Python Debugger with DeepSeek Integration  

---

## 📖 About The Project  
PyBugger is a hybrid AI debugging system designed to detect, fix, and explain Python errors with high accuracy and clarity.

Unlike traditional LLM-only tools, PyBugger combines deterministic static analysis with an AI-assisted explanation layer. This ensures reliable error detection while still providing human-friendly, educational explanations.

The system integrates AST-based analysis, heuristic correction logic, and a fine-tuned DeepSeek LoRA model to deliver precise debugging insights.

---

## 🧠 Architecture Overview  

PyBugger follows a **three-stage hybrid pipeline**:

### 1️⃣ Error Detector (Static Analysis Engine)  
- Uses Python AST and custom heuristics  
- Detects:
  - Syntax errors  
  - Indentation issues (pre-AST detection)  
  - Logical flaws (e.g., invalid comparisons, division by zero)  
- Includes a custom indentation tracker to catch errors before AST parsing  

---
### 2️⃣ Heuristic Fixer (Rule-Based Engine)  
- Applies targeted regex-based fixes  
- Handles:
  - Assignment (`=`) vs comparison (`==`) mistakes  
  - Indentation normalization  
  - Structural corrections  
- Preserves original code structure as much as possible  

---

### 3️⃣ AI Explainer (DeepSeek LoRA Model)  
- Fine-tuned on 200+ Python debugging samples  
- Generates:
  - Clear, teacher-style explanations  
  - Minimal and factual responses  
- Tuned with:
  - Low temperature (0.2)  
  - Structured prompting (Computer Science Teacher role)  

---

## ✨ Key Features  

- 🔍 **Pre-runtime error detection** using AST + heuristics  
- 🧠 **Dynamic runtime-like analysis** (e.g., variable-based division by zero)  
- 🛠️ **Automatic code correction** for common Python mistakes  
- 📏 **Custom indentation validation system**  
- ⚡ **Precise regex-based error targeting**  
- 🤖 **AI-assisted explanations with reduced hallucination**  

---

## 🛠️ Tech Stack  

**Frontend:** React + Vite + CSS  
**Backend:** Python, FastAPI, AST, Regex  
**AI Layer:** DeepSeek (LoRA Fine-Tuned), PyTorch  
**Deployment:**  
- Frontend → Vercel  
- Backend → On-demand (Colab + ngrok)  

---

## ⚙️ Notable Engineering Improvements  

### 🔹 AI Explanation Optimization  
- Reduced hallucinations by lowering temperature  
- Switched to structured, teacher-style prompting  

### 🔹 Robust Indentation Handling  
- Custom pre-AST indentation tracking system  
- Prevents parser crashes and improves accuracy  

### 🔹 Dynamic Error Detection  
- Tracks variable values using AST NodeVisitor  
- Enables detection of runtime-like issues statically  

### 🔹 Smart Syntax Recovery  
- Detects assignment vs comparison errors (`=` vs `==`)  
- Uses targeted regex to prevent AST parsing failure  

---

## ⚠️ Deployment Note  

Due to resource constraints of free hosting platforms, the AI backend runs on-demand using a local or Colab-based environment. The frontend is permanently deployed for accessibility.

---

## 🚀 Future Enhancements  

- Expand dataset for LoRA fine-tuning to improve explanation quality  
- Enhance multi-error detection and prioritization  
- Improve frontend UI for better debugging experience  

- Integrate LangChain for structured LLM orchestration  
  - Use PromptTemplates for consistent responses  
  - Apply OutputParsers for strict formatting  
  - Enable switching between local (DeepSeek) and cloud-based models  

- Optimize model loading and inference performance  
- Extend support to additional programming languages  

---

## 🎯 Project Goal  

To build a reliable, explainable, and scalable debugging system that combines deterministic logic with AI-assisted learning, helping users not just fix errors but understand them.

---

## 🌐 Live Demo  

Frontend: https://py-bugger-ai-based-debugger.vercel.app/  

> ⚠️ Note: Backend runs on-demand. Debugging features are active when the backend server is running.

---

## 👨‍💻 Author  

Built as part of a hands-on exploration into hybrid AI systems, backend engineering, and intelligent developer tools.
