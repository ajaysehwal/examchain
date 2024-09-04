# ExamChain

**ExamChain** is a decentralized examination platform designed to conduct exams securely for schools, colleges, and organizations, including large-scale government examinations. By leveraging NEAR's blockchain technology, ExSafe ensures the integrity of exam processes, prevents paper leaks, and provides a tamper-proof record of exam data.

## Features

- **Secure Exam Management**
  - **Login**: Authenticate users securely.
  - **Dashboard**: Central hub for accessing various panels.
  - **Admin Panel**: Manage exams, users, and view analytics.
  - **Teacher Panel**: Create, grade exams, and view results.
  - **Student Panel**: Take exams, view grades, and access credentials.

- **Advanced Security Measures**
  - **Zero-Knowledge Proofs**: Ensure the privacy and integrity of user actions.
  - **Decentralized Identity**: Secure user identity verification.
  - **Multi-factor Authentication**: Additional security layer for accessing the platform.
  - **Audit Logging**: Track and record all significant actions for transparency and accountability.

- **NEAR Blockchain Integration**
  - **Smart Contracts**: Automate and enforce exam rules and workflows.
  - **NEAR Wallet Integration**: Seamless interaction with the NEAR blockchain.
  - **Cross-Contract Calls**: Enable complex, multi-step processes involving various smart contracts.
  - **Token-based Incentives**: Reward system for students and teachers based on participation and performance.

- **Robust Exam Workflow**
  - **Encryption**: Exams and answers are securely encrypted.
  - **Key Management**: Distributed key shares ensure that no single entity has control over the decryption process.
  - **Blockchain Storage**: Store exam hashes on the blockchain for immutability.
  - **IPFS Integration**: Securely store encrypted answers on a decentralized storage network.

## Architecture Overview

The platform is structured into various panels and flows:

1. **Login** → **Dashboard**
2. **Dashboard** branches into:
   - **Admin Panel** → Manage Exams, Users, Analytics
   - **Teacher Panel** → Create Exam, Grade Exams, View Results
   - **Student Panel** → Take Exam, View Grades, Access Credentials

3. **Exam Flow**:
   - **Create Exam** → **Encrypt Exam** → **Distribute Key Shares**
   - **Take Exam** → **Verify Time Lock** → **Decrypt Exam** → **Submit Answers**
   - **Grade Exams** → **Decrypt Answers** → **Grade and Record**
   - **Verify Grades** on the Blockchain

4. **Security Measures**:
   - **Zero-Knowledge Proofs**, **Decentralized Identity**, **Multi-factor Authentication**, **Audit Logging**

5. **Blockchain Integration**:
   - **Smart Contracts**, **NEAR Wallet**, **Cross-Contract Calls**, **Token-based Incentives**

## Getting Started

### Prerequisites

- **Node.js** (v14+)
- **NEAR Wallet** for blockchain interactions
- **IPFS** for decentralized storage

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/exsafe.git
cd exsafe
