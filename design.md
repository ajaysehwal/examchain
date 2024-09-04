```mermaid
graph TD
    A[Login] --> B[Dashboard]
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
    O --> P[Encrypt Exam]
    P --> Q[Split Encrypted Key]
    Q --> R[Distribute Key Shares]
    
    L --> S[Verify Time Lock]
    S --> T[Reconstruct Exam Key]
    T --> U[Decrypt Exam]
    U --> V[Submit Answers]
    
    V --> W[Encrypt Answers]
    W --> X[Store on IPFS]
    X --> Y[Record Hash on Blockchain]
    
    J --> Z[Retrieve Encrypted Answers]
    Z --> AA[Decrypt Answers]
    AA --> AB[Grade and Record]
    
    M --> AC[Verify Grades on Blockchain]
    N --> AD[Generate Verifiable Credential]
    
    subgraph "Security Measures"
    AE[Zero-Knowledge Proofs]
    AF[Decentralized Identity]
    AG[Multi-factor Authentication]
    AH[Audit Logging]
    end
    
    subgraph "NEAR Blockchain Integration"
    AI[Smart Contracts]
    AJ[NEAR Wallet Integration]
    AK[Cross-Contract Calls]
    AL[Token-based Incentives]
    end
