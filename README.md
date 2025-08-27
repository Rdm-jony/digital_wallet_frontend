# Digital Wallet Frontend

**Live Frontend:** [https://digital-wallet-frontend-five.vercel.app](https://digital-wallet-frontend-five.vercel.app)  
**Backend API:** [https://digital-wallet-beckend.vercel.app](https://digital-wallet-beckend.vercel.app)

---

## Project Overview

The **Digital Wallet Frontend** is a modern web application that allows users, agents, and admins to manage digital wallet transactions securely and efficiently.  

**Key Capabilities:**

- **Users:** 
  - View wallet balance  
  - Top-up via SSL Commerz  
  - Withdraw money  
  - Send money to other users (by wallet id)  
  - cashout money to agent

- **Agents:** 
  - Add or withdraw money on behalf of users  
  - cashin money to user

- **Admins:** 
  - Monitor all users, agents, and transactions  
  - Approve, suspend, or block agent requests  

- **Dashboard & Analytics:** Visualize transactions, user stats, and wallet activities with charts  

- **Authentication & Authorization:** Role-based access with secure login  

---

## Technology Stack

- **Frontend:** React, TypeScript, TailwindCSS, Shadcn UI
- **State Management:** Redux Toolkit, RTK Query
- **Charts & Visualization:** Recharts
- **Routing:** React Router
- **Deployment:** Vercel
---
## Features

- **User Dashboard:** Overview of wallet balance, quick actions, and recent transactions  
- **Agent Management:** Approve, reject, or suspend agent requests  
- **Charts & Analytics:** Visual representation of user stats and transactions  
- **Responsive Design:** Works seamlessly on desktop and mobile devices  
- **Single Image Uploader:** For profile pictures with drag & drop support  
- **Dark Mode Toggle**  

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/Rdm-jony/digital_wallet_frontend
cd digital-wallet-frontend

npm install
# or
yarn install

VITE_BACKEND_URL=https://digital-wallet-beckend.vercel.app  (.env)

npm run dev
# or
yarn dev


