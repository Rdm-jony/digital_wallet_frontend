# Digital Wallet Frontend

[![Vercel](https://vercelbadge.vercel.app/api/digital-wallet-frontend-five)](https://digital-wallet-frontend-five.vercel.app)

**Live Demo:** [https://digital-wallet-frontend-five.vercel.app](https://digital-wallet-frontend-five.vercel.app)

A modern, secure, and responsive **Digital Wallet Frontend** built with **React, TypeScript, and Shadcn UI**, designed for users, agents, and admins to manage digital transactions efficiently.

---

## Table of Contents

- Overview
- Features
- User Roles
- Tech Stack
- Installation 
- Environment Variables 
- Usage
- Screenshots 
- Contributing  
- License

---

## Overview

The Digital Wallet Frontend allows:

- Users to manage wallets: top-up via SSL Commerz, withdraw funds, and send money to other users.  
- Agents to manage user wallets: add or withdraw funds on behalf of users.  
- Admins to oversee all user and agent activity.  

It provides a **dashboard**, **transaction history**, **profile management**, and **agent approval workflow** in a responsive UI.

---

## Features

- **Wallet Overview** – Display wallet balance, recent transactions, and quick actions.  
- **User Actions** – Top-up, send, or withdraw money securely.  
- **Agent Dashboard** – Manage user wallets and approve/reject agent requests.  
- **Admin Dashboard** – Monitor all users, agents, and system activities.  
- **Authentication** – JWT-based authentication with role-based access.  
- **Responsive Design** – Optimized for desktop and mobile.  
- **Shadcn UI Components** – Clean and reusable UI components.  
- **Charts & Stats** – Visualize user growth, wallet activity, and transactions.  

---

## User Roles

| Role         | Capabilities |
| ------------ | ------------ |
| **USER**     | View balance, top-up, withdraw, send money. |
| **AGENT**    | Add/withdraw money to users, manage transactions. |
| **ADMIN**    | Full access to users, agents, and system stats. |

---

## Tech Stack

- **Frontend:** React, TypeScript, TailwindCSS, Shadcn UI  
- **State Management:** Redux Toolkit, RTK Query  
- **Charts:** Recharts  
- **Routing:** React Router  
- **Deployment:** Vercel  

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/Rdm-jony/digital_wallet_frontend
cd digital-wallet-frontend
