```mermaid
graph TD
    A[NEAR Wallet Login] --> B[Dashboard]
    B --> C[Admin Panel]
    B --> D[Teacher Panel]
    B --> E[Student Panel]
    
    C --> F[Manage Exams]
    C --> G[Manage Users]
    C --> H[View Analytics]
    
    D --> I[Create Exam]
    D --> J[Grade Exams]
    D --> K[View Results]
    
    E --> L[Take Exam]
    E --> M[View Grades]
    E --> N[Access Credentials]
    
    I --> O[Exam Creation Interface]
    O --> P[AI-Assisted Question Generation]
    P --> Q[Encrypt Exam]
    Q --> R[Store on NEAR]
    
    L --> S[Verify Time Lock Smart Contract]
    S --> T[Decrypt Exam]
    T --> U[AI Proctoring]
    U --> V[Submit Answers]
    
    V --> W[Encrypt Answers]
    W --> X[Store on NEAR]
    X --> Y[Record Hash & Metadata]
    
    J --> Z[Retrieve Encrypted Answers]
    Z --> AA[AI-Assisted Grading]
    AA --> AB[Grade and Record on NEAR]
    
    M --> AC[Verify Grades on NEAR]
    N --> AD[Generate NEAR-based Credential NFT]
    
    subgraph "Enhanced Security Measures"
    AE[Zero-Knowledge Proofs]
    AF[NEAR-based Decentralized Identity]
    AG[Multi-factor Authentication]
    AH[Blockchain Audit Logging]
    end
    
    subgraph "NEAR Blockchain Integration"
    AI[Exam Management Smart Contracts]
    AJ[NEAR Token Staking for Participants]
    AK[Cross-Contract Calls for Modular Design]
    AL[Token-based Incentives for Proctors/Graders]
    end
    
    subgraph "AI Enhancements"
    AM[AI-Powered Plagiarism Detection]
    AN[Adaptive Difficulty Adjustment]
    AO[Natural Language Processing for Essay Grading]
    AP[Anomaly Detection in Exam Taking Patterns]
    end