/**
 * Tyron John L. Dela Cruz - Technical Skill Practical Examples & Interactive Demonstrations
 * Grounded in real-world implementations from GoCash Microfinance, AI Helpdesk,
 * Telecom NOC Analytics, and Cisco Network Engineering Labs.
 */

(function () {
  'use strict';

  const SKILL_DATA = {
    web_dev: {
      title: 'Web Development',
      icon: 'fa-globe',
      color: '#00F2FE',
      proficiency: '90%',
      projectLink: 'projects/loan-management-system/index.html',
      projectText: 'Explore in GoCash Lending Engine',
      subSkills: [
        {
          id: 'html5',
          label: 'HTML5',
          projectTag: 'GOCASH LOAN APPLICATION FORM',
          techTag: 'SEMANTIC FORMS & ACCESSIBILITY',
          desc: 'Implemented accessible, semantic HTML5 structure for client onboarding with native pattern validation, ARIA live regions, and screen-reader compliant input groups.',
          filename: 'views/loan_application_form.html',
          lang: 'HTML5',
          code: `<!-- Accessible Loan Application Form Component -->
<form id="loan-apply-form" novalidate aria-labelledby="form-heading">
  <fieldset class="border border-cyan-500/30 rounded-xl p-5 bg-slate-900/60">
    <legend id="form-heading" class="text-xs font-mono text-cyan-300 px-2">
      Applicant Telemetry & Verification
    </legend>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
      <div>
        <label for="contact-phone" class="block text-xs font-mono text-slate-300 mb-1">
          Mobile Number (PH)
        </label>
        <input type="tel" id="contact-phone" name="phone"
          pattern="^09[0-9]{9}$" required
          placeholder="09171234567"
          aria-describedby="phone-help"
          class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none" />
        <span id="phone-help" class="text-[10px] text-slate-500">Format: 09XXXXXXXXX (11 digits)</span>
      </div>

      <div>
        <label for="loan-amount" class="block text-xs font-mono text-slate-300 mb-1">
          Principal Amount (PHP)
        </label>
        <input type="number" id="loan-amount" name="principal"
          min="5000" max="100000" step="1000" required
          value="25000"
          class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none" />
      </div>
    </div>
  </fieldset>
</form>`,
          competencies: [
            'ARIA Accessibility Standards (WCAG 2.1 AA)',
            'Constraint Validation API (Pattern & Range)',
            'Clean Semantic Document Hierarchy'
          ],
          demoType: 'form_validator'
        },
        {
          id: 'css3',
          label: 'CSS3',
          projectTag: 'PORTFOLIO GLASSMORPHISM THEME',
          techTag: 'CUSTOM CSS3 & BACKDROP FILTERS',
          desc: 'Architected modern cyber-tech glassmorphism using CSS backdrop-filter, radial gradients, custom scrollbar styling, and high-performance hardware-accelerated animations.',
          filename: 'assets/styles/cyber_glassmorphism.css',
          lang: 'CSS3',
          code: `/* Cyber Glassmorphism Surface Token */
.cyber-glass-panel {
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 242, 254, 0.22);
  border-radius: 1rem;
  box-shadow: 
    0 8px 32px 0 rgba(0, 0, 0, 0.37),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.cyber-glass-panel:hover {
  border-color: rgba(0, 242, 254, 0.55);
  box-shadow: 0 0 25px -4px rgba(0, 242, 254, 0.28);
}`,
          competencies: [
            'Backdrop-Filter Blur & Translucency',
            'Hardware-Accelerated CSS Transitions',
            'Responsive Box Shadow Light Bleeds'
          ],
          demoType: 'css_styler'
        },
        {
          id: 'js',
          label: 'JavaScript (ES6+)',
          projectTag: 'GOCASH AMORTIZATION ENGINE',
          techTag: 'ES6+ PROMISES & ASYNC CALCULATIONS',
          desc: 'Engineered financial amortization logic in vanilla ES6+ featuring strict mathematical precision, compound monthly interest, and async transaction state binding.',
          filename: 'services/loan_engine.js',
          lang: 'JavaScript ES6+',
          code: `// Compound Monthly Loan Amortization Engine
export class LoanAmortizationEngine {
  constructor(principal, annualRate, months) {
    this.principal = Number(principal);
    this.monthlyRate = (annualRate / 100) / 12;
    this.months = Number(months);
  }

  calculateInstallment() {
    if (this.monthlyRate === 0) return this.principal / this.months;
    const factor = Math.pow(1 + this.monthlyRate, this.months);
    const monthlyPayment = (this.principal * this.monthlyRate * factor) / (factor - 1);
    const totalRepay = monthlyPayment * this.months;
    const totalInterest = totalRepay - this.principal;

    return {
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      totalRepayment: Math.round(totalRepay * 100) / 100
    };
  }
}`,
          competencies: [
            'Object-Oriented ES6+ Class Modules',
            'Financial Precision & Decimal Rounding',
            'Asynchronous Method Pipelines'
          ],
          demoType: 'loan_calc'
        },
        {
          id: 'responsive',
          label: 'Responsive Layouts',
          projectTag: 'TELECOM NOC DASHBOARD',
          techTag: 'CSS GRID & AUTO-FIT MINMAX',
          desc: 'Built fluid responsive dashboard grids adapting dynamically across mobile devices (375px), tablets (768px), and high-resolution multi-monitor NOC displays (1440px+).',
          filename: 'styles/telecom_noc_grid.css',
          lang: 'CSS3 Grid',
          code: `/* Adaptive Multi-Device Grid System */
.noc-telemetry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
}

@media (min-width: 1024px) {
  .noc-telemetry-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}`,
          competencies: [
            'CSS Grid Auto-Fit with MinMax Functions',
            'Mobile-First Breakpoint Architecture',
            'Fluid Typography & Flexible Units (rem/vw)'
          ],
          demoType: 'responsive_preview'
        },
        {
          id: 'api',
          label: 'API Integration',
          projectTag: 'AI HELPDESK REST DISPATCHER',
          techTag: 'FETCH API & BEARER TOKEN AUTH',
          desc: 'Implemented an asynchronous HTTP fetch client with bearer token authentication, request timeout abort controllers, and error boundary handling.',
          filename: 'services/api_client.js',
          lang: 'JavaScript ES6+',
          code: `// Secure REST API Dispatcher
async function fetchTickets(status = 'open') {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(\`/api/v1/tickets?status=\${encodeURIComponent(status)}\`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer token_session_demo_982'
      },
      signal: controller.signal
    });

    if (!res.ok) throw new Error(\`HTTP status \${res.status}\`);
    return await res.json();
  } finally {
    clearTimeout(timeoutId);
  }
}`,
          competencies: [
            'AbortController Timeout Safeguards',
            'Bearer Authorization Header Binding',
            'Structured Error Trapping & Serialization'
          ],
          demoType: 'api_tester'
        }
      ]
    },

    programming: {
      title: 'Programming & Scripting',
      icon: 'fa-code',
      color: '#4FACFE',
      proficiency: '85%',
      projectLink: 'projects/data-analytics/index.html',
      projectText: 'Explore in Telecom NOC Dashboard',
      subSkills: [
        {
          id: 'python',
          label: 'Python',
          projectTag: 'NETWORK SYSLOG PARSER',
          techTag: 'REGEX STREAM PARSING & JSON EXPORT',
          desc: 'Wrote an automated Python log parser analyzing router syslogs, detecting brute-force authentication failures, and triggering threshold alert notifications.',
          filename: 'scripts/syslog_analyzer.py',
          lang: 'Python 3',
          code: `import re, json
from datetime import datetime

LOG_PATTERN = re.compile(
    r'(?P<timestamp>\\w{3}\\s+\\d+\\s+[\\d:]+)\\s+(?P<host>[\\w.-]+)\\s+'
    r'sshd\\[\\d+\\]:\\s+Failed password for (?P<user>\\w+) from (?P<ip>\\d+\\.\\d+\\.\\d+\\.\\d+)'
)

def analyze_auth_logs(log_stream):
    alerts = []
    for line in log_stream.strip().split('\\n'):
        match = LOG_PATTERN.search(line)
        if match:
            alerts.append({
                'ip': match.group('ip'),
                'target_user': match.group('user'),
                'timestamp': match.group('timestamp'),
                'threat_level': 'HIGH'
            })
    return json.dumps(alerts, indent=2)`,
          competencies: [
            'Regular Expression Group Extraction',
            'High-Throughput Stream Parsing',
            'Structured JSON Serialization'
          ],
          demoType: 'syslog_parser'
        },
        {
          id: 'cpp',
          label: 'C++ Fundamentals',
          projectTag: 'CIRCULAR PACKET BUFFER',
          techTag: 'POINTER ARITHMETIC & MEMORY RAII',
          desc: 'Implemented a high-performance circular packet queue simulating router hardware buffers with manual pointer manipulation and strict memory leak prevention.',
          filename: 'core/packet_buffer.cpp',
          lang: 'C++',
          code: `#include <iostream>

class PacketRingBuffer {
private:
    int* buffer;
    int head;
    int tail;
    int count;
    int capacity;

public:
    PacketRingBuffer(int size) : capacity(size), head(0), tail(0), count(0) {
        buffer = new int[capacity];
    }

    ~PacketRingBuffer() {
        delete[] buffer; // RAII safe deallocation
    }

    bool enqueue(int packetId) {
        if (count >= capacity) return false; // Buffer overflow
        buffer[tail] = packetId;
        tail = (tail + 1) % capacity;
        count++;
        return true;
    }

    bool dequeue(int& outId) {
        if (count == 0) return false;
        outId = buffer[head];
        head = (head + 1) % capacity;
        count--;
        return true;
    }
};`,
          competencies: [
            'Manual Dynamic Memory Allocation (new/delete)',
            'Circular Buffer Ring Modulo Pointer Indexing',
            'Resource Acquisition Is Initialization (RAII)'
          ],
          demoType: 'cpp_queue'
        },
        {
          id: 'automation',
          label: 'Automation Scripts',
          projectTag: 'WINDOWS SERVER AUDIT DAEMON',
          techTag: 'POWERSHELL SYSTEM TELEMETRY',
          desc: 'Authored administrative PowerShell scripts auditing server CPU load, free disk space across volumes, and critical service states with automated webhook reporting.',
          filename: 'scripts/Audit-ServerHealth.ps1',
          lang: 'PowerShell',
          code: `# Windows Server Diagnostic Health Audit
$disk = Get-WmiObject Win32_LogicalDisk -Filter "DeviceID='C:'"
$freeGb = [math]::Round($disk.FreeSpace / 1GB, 2)
$totalGb = [math]::Round($disk.Size / 1GB, 2)
$percentFree = [math]::Round(($disk.FreeSpace / $disk.Size) * 100, 1)

$cpu = (Get-WmiObject Win32_Processor | Measure-Object -Property LoadPercentage -Average).Average

[PSCustomObject]@{
    ServerName   = $env:COMPUTERNAME
    CpuLoadPct   = "$cpu%"
    DiskC_FreeGb = "$freeGb / $totalGb GB ($percentFree%)"
    SpoolerState = (Get-Service -Name "Spooler").Status
    AuditTime    = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
} | Format-Table -AutoSize`,
          competencies: [
            'WMI / CIM Hardware Metric Queries',
            'Mathematical Disk Capacity Aggregations',
            'Automated Pipeline Object Formatting'
          ],
          demoType: 'powershell_audit'
        },
        {
          id: 'oop',
          label: 'Object-Oriented Logic',
          projectTag: 'GOCASH LOAN CLASS HIERARCHY',
          techTag: 'POLYMORPHISM & ENCAPSULATION',
          desc: 'Architected class hierarchies encapsulating business lending rules, using polymorphism to calculate custom daily vs. monthly interest schedules across loan variants.',
          filename: 'models/LoanPolicyHierarchy.js',
          lang: 'JavaScript ES6+',
          code: `// Polymorphic Loan Class Hierarchy
class BaseLoan {
  constructor(principal, durationMonths) {
    this._principal = principal;
    this._duration = durationMonths;
  }
  calculateTotal() {
    throw new Error('Abstract method call');
  }
}

class MicrofinanceLoan extends BaseLoan {
  calculateTotal() {
    const dailyInterest = 0.001; // 0.1% daily
    const days = this._duration * 30;
    return this._principal * (1 + (dailyInterest * days));
  }
}

class SalaryLoan extends BaseLoan {
  calculateTotal() {
    const fixedRate = 0.035; // 3.5% monthly flat
    return this._principal * (1 + (fixedRate * this._duration));
  }
}`,
          competencies: [
            'Encapsulation & Private State Conventions',
            'Class Inheritance & Method Overriding',
            'Polymorphic Interest Calculation Engines'
          ],
          demoType: 'oop_model'
        }
      ]
    },

    database: {
      title: 'Database Systems',
      icon: 'fa-database',
      color: '#A855F7',
      proficiency: '88%',
      projectLink: 'projects/loan-management-system/index.html',
      projectText: 'Explore in GoCash Microfinance Database',
      subSkills: [
        {
          id: 'sql',
          label: 'SQL',
          projectTag: 'COLLECTOR DAILY SUMMARY REPORT',
          techTag: 'MULTI-TABLE INNER JOINS & AGGREGATES',
          desc: 'Constructed multi-table SQL queries joining clients, loans, and daily payment receipts to compute outstanding balances and collector collection quotas.',
          filename: 'queries/daily_collector_summary.sql',
          lang: 'SQL',
          code: `SELECT 
    c.id AS client_id,
    c.full_name,
    l.loan_id,
    l.principal,
    COALESCE(SUM(p.amount), 0) AS total_repaid,
    (l.principal - COALESCE(SUM(p.amount), 0)) AS outstanding_balance,
    CASE 
        WHEN (l.principal - COALESCE(SUM(p.amount), 0)) <= 0 THEN 'SETTLED'
        ELSE 'ACTIVE'
    END AS loan_status
FROM clients c
INNER JOIN loans l ON c.id = l.client_id
LEFT JOIN payments p ON l.loan_id = p.loan_id
WHERE l.is_active = 1
GROUP BY c.id, c.full_name, l.loan_id, l.principal
ORDER BY outstanding_balance DESC;`,
          competencies: [
            'Multi-Table INNER & LEFT JOIN Operations',
            'COALESCE Null Value Defensive Wrapping',
            'Conditional CASE Aggregation Expressions'
          ],
          demoType: 'sql_query'
        },
        {
          id: 'mysql',
          label: 'MySQL',
          projectTag: 'TRANSACTION-SAFE REPAYMENT DEDUCTION',
          techTag: 'ACID TRANSACTIONS & ROLLBACK GUARD',
          desc: 'Designed ACID-compliant MySQL transaction procedures ensuring payment recording and account balance updates execute atomically or roll back completely on failure.',
          filename: 'procedures/record_payment_txn.sql',
          lang: 'MySQL',
          code: `DELIMITER //
CREATE PROCEDURE ProcessPayment(
    IN p_loan_id INT,
    IN p_amount DECIMAL(10,2),
    OUT p_status VARCHAR(20)
)
BEGIN
    DECLARE v_balance DECIMAL(10,2);
    
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SET p_status = 'FAILED_ROLLBACK';
    END;

    START TRANSACTION;
        SELECT balance INTO v_balance FROM loans WHERE loan_id = p_loan_id FOR UPDATE;
        
        IF v_balance < p_amount THEN
            ROLLBACK;
            SET p_status = 'INSUFFICIENT_BAL';
        ELSE
            UPDATE loans SET balance = balance - p_amount WHERE loan_id = p_loan_id;
            INSERT INTO payments (loan_id, amount, paid_at) VALUES (p_loan_id, p_amount, NOW());
            COMMIT;
            SET p_status = 'SUCCESS';
        END IF;
END //
DELIMITER ;`,
          competencies: [
            'ACID Transaction Isolation & Deadlock Prevention',
            'Row-Level Pessimistic Locking (FOR UPDATE)',
            'Structured Exception Handlers & Explicit Rollbacks'
          ],
          demoType: 'mysql_transaction'
        },
        {
          id: 'erd',
          label: 'ERD System Design',
          projectTag: 'AI HELPDESK RELATIONAL SCHEMA',
          techTag: 'NORMALIZED ENTITY RELATIONSHIPS',
          desc: 'Designed comprehensive Entity-Relationship Diagrams (ERD) mapping users, service tickets, urgency categories, and audit event logs with foreign key constraints.',
          filename: 'schemas/helpdesk_schema.sql',
          lang: 'SQL DDL',
          code: `CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(120) NOT NULL UNIQUE,
    full_name VARCHAR(100) NOT NULL,
    role ENUM('admin', 'agent', 'client') DEFAULT 'client'
);

CREATE TABLE tickets (
    ticket_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    priority ENUM('low', 'medium', 'high', 'critical') NOT NULL,
    status ENUM('open', 'in_progress', 'resolved', 'closed') DEFAULT 'open',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_tickets_user FOREIGN KEY (user_id) 
        REFERENCES users(user_id) ON DELETE CASCADE
);`,
          competencies: [
            'Foreign Key Referential Integrity Constraints',
            'Enum Field Constrained State Definitions',
            'Cascading Deletion & Index Optimization'
          ],
          demoType: 'erd_viewer'
        },
        {
          id: 'normalization',
          label: 'Database Normalization',
          projectTag: 'CAMPUS ASSET INVENTORY',
          techTag: '3RD NORMAL FORM (3NF) DECOMPOSITION',
          desc: 'Decomposed legacy flat spreadsheet asset logs into Third Normal Form (3NF), eliminating repeating groups, partial dependencies, and transitive foreign anomalies.',
          filename: 'docs/normalization_proof.md',
          lang: 'Relational Theory',
          code: `/* Normalization Steps from Flat Unnormalized Data to 3NF */

-- 1NF: Atomic values only, eliminate repeating groups.
-- 2NF: Remove partial dependencies on composite candidate keys.
-- 3NF: Eliminate transitive dependencies (non-key attributes depending on non-keys).

-- Resulting 3NF Decomposed Schema:
-- Table 1: assets (asset_id PK, serial_no, model_id FK, status)
-- Table 2: models (model_id PK, model_name, manufacturer_id FK)
-- Table 3: manufacturers (manufacturer_id PK, name, support_phone)
-- Table 4: assignments (assignment_id PK, asset_id FK, employee_id FK, assigned_date)`,
          competencies: [
            '1NF: Value Atomicity & Primary Key Selection',
            '2NF: Eliminating Partial Functional Dependencies',
            '3NF: Removing Transitive Attribute Couplings'
          ],
          demoType: 'normalization_matrix'
        }
      ]
    },

    networking: {
      title: 'Networking & Infrastructure',
      icon: 'fa-network-wired',
      color: '#10B981',
      proficiency: '92%',
      projectLink: '#hero',
      projectText: 'Inspect 3D Global Telemetry Hub',
      subSkills: [
        {
          id: 'tcp',
          label: 'TCP/IP',
          projectTag: 'WIRESHARK PACKET ANALYSIS LAB',
          techTag: 'THREE-WAY HANDSHAKE & TELEMETRY',
          desc: 'Analyzed packet captures deciphering TCP sequence numbers, SYN/ACK handshake state progression, window sizing, and retransmission flag diagnosis.',
          filename: 'telemetry/tcp_handshake_flow.txt',
          lang: 'Network Protocol',
          code: `[FRAME 1] Client (192.168.1.50:49210) -> Server (192.168.1.1:443)
  Flags: [SYN] | Seq=0 | Win=65535 | MSS=1460 | WS=256
  Status: Connection Request Initiated

[FRAME 2] Server (192.168.1.1:443) -> Client (192.168.1.50:49210)
  Flags: [SYN, ACK] | Seq=0 | Ack=1 | Win=28960 | MSS=1460
  Status: Acknowledgement & Server Sequence Generated

[FRAME 3] Client (192.168.1.50:49210) -> Server (192.168.1.1:443)
  Flags: [ACK] | Seq=1 | Ack=1 | Win=65535
  Status: TCP ESTABLISHED • Bidirectional Data Stream Ready`,
          competencies: [
            'SYN -> SYN-ACK -> ACK Handshake State Machine',
            'Maximum Segment Size (MSS) & Window Scale Factor',
            'Wireshark Hex Packet Dissection'
          ],
          demoType: 'tcp_handshake'
        },
        {
          id: 'subnetting',
          label: 'Subnetting (VLSM/CIDR)',
          projectTag: 'CAMPUS NETWORK TOPOLOGY DESIGN',
          techTag: 'VARIABLE LENGTH SUBNET MASKING',
          desc: 'Calculated efficient IP allocation tables for multi-department campuses using VLSM, minimizing host address waste while establishing dedicated /30 WAN point-to-point links.',
          filename: 'topology/vlsm_allocation.txt',
          lang: 'Subnet Plan',
          code: `Base Supernet: 192.168.10.0/24 (Total Available: 256 IPs)

Subnet A (Admin & Faculty - 60 Hosts needed):
  Network: 192.168.10.0/26 | Mask: 255.255.255.192
  Usable Range: 192.168.10.1 - 192.168.10.62 | Broadcast: 192.168.10.63

Subnet B (Computer Lab 1 - 28 Hosts needed):
  Network: 192.168.10.64/27 | Mask: 255.255.255.224
  Usable Range: 192.168.10.65 - 192.168.10.94 | Broadcast: 192.168.10.95

Subnet C (Router P2P WAN Trunk - 2 Hosts needed):
  Network: 192.168.10.96/30 | Mask: 255.255.255.252
  Usable Range: 192.168.10.97 - 192.168.10.98 | Broadcast: 192.168.10.99`,
          competencies: [
            'Binary Host Bit Inversion & Prefix Calculation',
            'Zero Address Waste Optimization Strategy',
            'Broadcast & Network Boundary Calculation'
          ],
          demoType: 'subnet_calc'
        },
        {
          id: 'routing',
          label: 'Routing Protocols',
          projectTag: 'CISCO EDGE ROUTER RESILIENCE',
          techTag: 'OSPF SINGLE AREA & FLOATING STATIC',
          desc: 'Configured Cisco IOS routers with OSPF dynamic routing metrics and floating static default routes for seamless automated failover during primary ISP link degradation.',
          filename: 'configs/cisco_edge_router.ios',
          lang: 'Cisco IOS',
          code: `! Cisco IOS Dynamic Routing Configuration
hostname EDGE-RTR-01
!
router ospf 1
 router-id 10.255.255.1
 log-adjacency-changes
 network 192.168.10.0 0.0.0.63 area 0
 network 10.1.1.0 0.0.0.3 area 0
 default-information originate
!
! Primary ISP Default Route (AD: 1)
ip route 0.0.0.0 0.0.0.0 GigabitEthernet0/0/0 203.0.113.1
!
! Backup 5G Link Floating Static Route (AD: 210)
ip route 0.0.0.0 0.0.0.0 GigabitEthernet0/0/1 198.51.100.1 210`,
          competencies: [
            'OSPF Area 0 Link-State Advertisement (LSA)',
            'Wildcard Mask Network Address Boundary Logic',
            'Floating Static Administrative Distance Failover'
          ],
          demoType: 'ospf_failover'
        },
        {
          id: 'hardware_config',
          label: 'Hardware Configuration',
          projectTag: 'MANAGED SWITCH VLAN SEGMENTATION',
          techTag: '802.1Q TRUNKING & SPANNING TREE',
          desc: 'Configured Cisco Catalyst switches establishing VLAN segmentation across departments, access ports, and 802.1Q trunking to guarantee traffic isolation.',
          filename: 'configs/cisco_catalyst_vlan.ios',
          lang: 'Cisco IOS',
          code: `! Switchport VLAN Configuration
vlan 10
 name MANAGEMENT
vlan 20
 name STAFF_WORKSTATIONS
vlan 30
 name GUEST_WIFI
!
interface FastEthernet0/1
 description Workstation Port (Staff)
 switchport mode access
 switchport access vlan 20
 spanning-tree portfast
!
interface GigabitEthernet0/1
 description Trunk to Core Switch
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30
 switchport trunk native vlan 99`,
          competencies: [
            '802.1Q Trunk Encapsulation & Tagging',
            'PortFast Spanning Tree Loop Mitigation',
            'Native VLAN Hardening & Security Isolation'
          ],
          demoType: 'vlan_config'
        }
      ]
    },

    cybersecurity: {
      title: 'Cybersecurity & QA',
      icon: 'fa-shield-halved',
      color: '#F43F5E',
      proficiency: '86%',
      projectLink: '#cybersecurity-lab',
      projectText: 'Explore Interactive Cybersecurity Lab',
      subSkills: [
        {
          id: 'threat_mitigation',
          label: 'Threat Mitigation',
          projectTag: 'GOCASH SECURITY AUDIT',
          techTag: 'SQL INJECTION & XSS DEFENSE',
          desc: 'Hardened application input pathways against SQL Injection and Cross-Site Scripting (XSS) through parameterized prepared statements and strict context-aware output escaping.',
          filename: 'security/sanitizer.php',
          lang: 'PHP / PDO',
          code: `<?php
// Vulnerable Implementation (BLOCKED):
// $sql = "SELECT * FROM users WHERE user = '" . $_POST['user'] . "'";

// Hardened PDO Prepared Statement (IMPLEMENTED):
function authenticateUser(PDO $pdo, string $username, string $rawPassword): ?array {
    $stmt = $pdo->prepare('
        SELECT user_id, password_hash, role 
        FROM users 
        WHERE username = :user AND is_active = 1
        LIMIT 1
    ');
    
    // Parameter binding eliminates malicious SQL payload execution
    $stmt->execute([':user' => trim($username)]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($rawPassword, $user['password_hash'])) {
        return $user;
    }
    return null;
}
?>`,
          competencies: [
            'Parameterized Query Separation (Code vs Data)',
            'Bcrypt Password Hash Verification',
            'Context-Aware HTML Entity Output Encoding'
          ],
          demoType: 'sqli_sandbox'
        },
        {
          id: 'vulnerability',
          label: 'Vulnerability Assessment',
          projectTag: 'NETWORK RECONNAISSANCE AUDIT',
          techTag: 'NMAP AUDIT & CVE HARDENING',
          desc: 'Executed non-intrusive network port scanning with Nmap to audit exposed daemons, identifying deprecated SSL cipher suites and closing unnecessary open ports.',
          filename: 'reports/nmap_vulnerability_scan.txt',
          lang: 'Security Audit',
          code: `# Nmap 7.94 Scan Report: Host 192.168.1.1
PORT     STATE SERVICE  VERSION
22/tcp   open  ssh      OpenSSH 8.9p1 (Ubuntu)
  |_ ssh-auth-methods: publickey (PASS - password auth disabled)
80/tcp   open  http     nginx 1.18.0
  |_ http-server-header: nginx (ATTN: Version disclosure mitigated)
443/tcp  open  ssl/http nginx 1.18.0
  |_ ssl-enum-ciphers: TLSv1.3 (STRONG) | TLSv1.0 (DISABLED)
3306/tcp closed mysql   (PASS - listening on 127.0.0.1 only)

Audit Score: 94/100 • Zero Critical Vector Findings`,
          competencies: [
            'Nmap Service Banner & Version Enumeration',
            'SSH Key-Only Hardening Verification',
            'TLS Protocol & Cipher Suite Enforcement'
          ],
          demoType: 'vuln_scanner'
        },
        {
          id: 'qa',
          label: 'Software QA Testing',
          projectTag: 'GOCASH TEST SUITE',
          techTag: 'BOUNDARY VALUE & EDGE CASE SUITES',
          desc: 'Designed methodical QA test matrices validating loan amortization edge cases, including zero interest boundaries, negative payments, and concurrent transactions.',
          filename: 'tests/LoanAmortizationTest.js',
          lang: 'Unit Test / QA',
          code: `describe('LoanAmortizationEngine QA Suite', () => {
  it('TC-01: Correctly handles minimum boundary (5,000 PHP, 3 mo)', () => {
    const calc = new LoanAmortizationEngine(5000, 3.5, 3);
    const res = calc.calculateInstallment();
    expect(res.monthlyPayment).toBeGreaterThan(0);
    expect(res.totalRepayment).toBeGreaterThan(5000);
  });

  it('TC-02: Rejects negative principal input with RangeError', () => {
    expect(() => new LoanAmortizationEngine(-5000, 3.5, 3).validate())
      .toThrow(RangeError);
  });

  it('TC-03: Tolerates leap year date installment increments', () => {
    const nextDate = getNextInstallmentDate(new Date('2024-02-29'));
    expect(nextDate.getMonth()).toBe(2); // March
  });
});`,
          competencies: [
            'Boundary Value Analysis (BVA) Techniques',
            'Equivalence Class Input Partitioning',
            'Automated Assertion Pipeline Validation'
          ],
          demoType: 'qa_test_suite'
        },
        {
          id: 'bug_tracking',
          label: 'Bug Tracking',
          projectTag: 'ITSM INCIDENT DEFECT LIFECYCLE',
          techTag: 'REPRODUCIBLE DEFECT TRIAGE',
          desc: 'Managed systematic defect triage with structured steps to reproduce, expected vs. actual outcomes, severity ratings (P1-P4), and root-cause resolution tags.',
          filename: 'tickets/DEFECT-204_rounding_issue.json',
          lang: 'Defect Schema',
          code: `{
  "defect_id": "DEFECT-204",
  "title": "Floating-point precision rounding on odd-cent installment splits",
  "severity": "MEDIUM (P2)",
  "status": "VERIFIED_FIXED",
  "steps_to_reproduce": [
    "1. Apply loan for ₱10,001 over 3 months.",
    "2. Observe monthly calculation ₱3,333.6666...",
    "3. Sum of payments totaled ₱10,000.99 (₱0.01 discrepancy)."
  ],
  "root_cause": "Native IEEE 754 float division without currency banker rounding.",
  "resolution": "Applied Math.round(val * 100) / 100 with final-cent balance reconciliation."
}`,
          competencies: [
            'Systematic Defect Reproduction Engineering',
            'Priority vs Severity Impact Triage',
            'Audit Trail Resolution Verification'
          ],
          demoType: 'bug_triage'
        }
      ]
    },

    it_support: {
      title: 'IT Support & Hardware',
      icon: 'fa-screwdriver-wrench',
      color: '#F59E0B',
      proficiency: '95%',
      projectLink: '#troubleshooting',
      projectText: 'Explore Hardware Diagnostic Tree',
      subSkills: [
        {
          id: 'pc_assembly',
          label: 'PC Hardware Assembly',
          projectTag: 'WORKSTATION POWER & THERMAL BUILD',
          techTag: 'PSU LOAD PROJECTION & THERMAL MANAGEMENT',
          desc: 'Assembled high-reliability editing and campus workstations calculating 12V rail power draw, ensuring balanced air pressure, and applying optimal thermal interfaces.',
          filename: 'specs/workstation_power_budget.md',
          lang: 'Hardware Spec',
          code: `Workstation Component Power Draw Profile:
- CPU: AMD Ryzen 7 5700X (65W TDP, 88W PPT Peak)
- GPU: NVIDIA RTX 4060 Ti 8GB (160W TGP)
- Motherboard + RAM (2x16GB DDR4-3200): 45W
- Storage: 2x NVMe M.2 SSD + 1x 7200RPM HDD (25W)
- Cooling: 4x 120mm PWM Fans + AIO Pump (18W)
--------------------------------------------------
Total Estimated Continuous Load: ~336 Watts
PSU Selected: 650W 80+ Gold (Operating at ~52% load peak efficiency)`,
          competencies: [
            '12V Single-Rail PSU Headroom Calculations',
            'Static Pressure Fan Curve Optimization',
            'Thermal Paste Cross-Spread Application'
          ],
          demoType: 'power_calc'
        },
        {
          id: 'diagnostics',
          label: 'Diagnostic Troubleshooting',
          projectTag: 'LIVE EVENT AUDITORIUM WORKSTATION REPAIR',
          techTag: 'POST BEEP CODE & FAULT ISOLATION',
          desc: 'Performed rapid live fault isolation under strict event deadlines, interpreting motherboard POST debug codes, reseating RAM modules, and diagnosing failing components.',
          filename: 'runbooks/post_diagnostic_decision_tree.txt',
          lang: 'Diagnostic Runbook',
          code: `[FAULT SYMPTOM: System Powers On, Fans Spin, No Display Output]

Step 1: Check Motherboard Debug LEDs
  - CPU LED Off | DRAM LED SOLID AMBER -> Memory Init Failure
Step 2: Component Isolation
  - Remove Stick B in DIMM_B2. Power on with Stick A in DIMM_A2.
  - Result: System boots into UEFI BIOS.
Step 3: Test Stick B in DIMM_A2
  - Result: System hangs at DRAM LED.
Conclusion: Stick B memory cell failure identified. Workstation restored on single channel stick for event duration.`,
          competencies: [
            'POST Code & Diagnostic Beep Decryption',
            'Method of Elimination Component Isolation',
            'High-Pressure Triage Resolution Composure'
          ],
          demoType: 'post_tree'
        },
        {
          id: 'maintenance',
          label: 'System Maintenance',
          projectTag: 'STORAGE FLEET PREVENTATIVE CARE',
          techTag: 'S.M.A.R.T. TELEMETRY & THERMAL PROFILING',
          desc: 'Monitored workstation fleets with automated CrystalDiskInfo SMART telemetry scripts, identifying reallocated sectors before catastrophic drive loss occurred.',
          filename: 'telemetry/nvme_smart_health.txt',
          lang: 'SMART Telemetry',
          code: `=== NVMe SSD SMART HEALTH LOG: Samsung 980 Pro 1TB ===
Health Status: 98% GOOD
Critical Warning: 0x00 (Normal)
Composite Temperature: 41°C (Well within 70°C ceiling)
Available Spare: 100% (Threshold: 10%)
Percentage Used: 2%
Data Units Read: 28,491,200 [14.5 TB]
Data Units Written: 24,192,100 [12.3 TB]
Unsafe Shutdowns: 4
Media and Data Integrity Errors: 0
Error Information Log Entries: 0`,
          competencies: [
            'SMART Reallocated Sector Trend Analysis',
            'NVMe Thermal Throttling Mitigation',
            'Preventative Drive Swap Scheduling'
          ],
          demoType: 'smart_health'
        },
        {
          id: 'os_recovery',
          label: 'OS Recovery',
          projectTag: 'EMERGENCY BOOT RECOVERY CONSOLE',
          techTag: 'DISM, SFC & BCD STORE RESTORATION',
          desc: 'Restored unbootable Windows installations via Windows Recovery Environment (WinRE), rebuilding corrupted Boot Configuration Data (BCD) and running offline SFC scans.',
          filename: 'runbooks/winre_recovery_commands.cmd',
          lang: 'Recovery CMD',
          code: `:: Windows RE Bootloader & Component Store Repair
X:\\Sources> bootrec /fixmbr
The operation completed successfully.

X:\\Sources> bootrec /fixboot
The operation completed successfully.

X:\\Sources> bootrec /rebuildbcd
Scanning all disks for Windows installations...
Successfully identified Windows installation: C:\\Windows
Add installation to boot list? Yes

X:\\Sources> dism /Image:C:\\ /Cleanup-Image /RestoreHealth
[==========================100.0%==========================]
The restore operation completed successfully. Component store corruption repaired.`,
          competencies: [
            'Boot Configuration Data (BCD) Rebuilds',
            'Offline DISM Windows Component Store Servicing',
            'System File Checker (SFC) Integrity Restorations'
          ],
          demoType: 'os_console'
        }
      ]
    },

    productivity: {
      title: 'Data & Productivity Tools',
      icon: 'fa-chart-line',
      color: '#06B6D4',
      proficiency: '90%',
      projectLink: 'projects/data-analytics/index.html',
      projectText: 'Explore in NOC Analytics Pipeline',
      subSkills: [
        {
          id: 'excel',
          label: 'Excel/Sheets Data Analytics',
          projectTag: 'EXECUTIVE TELECOM KPI MODEL',
          techTag: 'XLOOKUP, PIVOTING & DYNAMIC FORMULAS',
          desc: 'Constructed multi-sheet financial models using advanced dynamic array formulas (=XLOOKUP, =LET, =SUMIFS) and interactive Pivot dashboards for operational oversight.',
          filename: 'models/telecom_financial_kpis.xlsx',
          lang: 'Spreadsheet Model',
          code: `// Dynamic Multi-Condition Revenue Model Formula
=LET(
    clientRegion, $B$2,
    salesData, tbl_transactions,
    filteredSales, FILTER(salesData, tbl_transactions[Region] = clientRegion),
    totalRevenue, SUM(CHOOSECOLS(filteredSales, 4)),
    averageTicket, AVERAGE(CHOOSECOLS(filteredSales, 4)),
    HSTACK(totalRevenue, averageTicket)
)

// Legacy Fallback Alternative:
=SUMIFS(tbl_transactions[Amount], tbl_transactions[Region], "NCR", tbl_transactions[Status], "Completed")`,
          competencies: [
            'Modern Dynamic Array Functions (=LET, =FILTER)',
            'Multi-Condition Aggregations (=SUMIFS, =COUNTIFS)',
            'Clean Executive Data Summarization'
          ],
          demoType: 'excel_model'
        },
        {
          id: 'git',
          label: 'Git/GitHub Version Control',
          projectTag: 'MULTI-FEATURE BRANCHING WORKFLOW',
          techTag: 'GIT REBASE & PULL REQUEST PROTOCOLS',
          desc: 'Maintained strict trunk-based Git workflows with descriptive semantic commit conventions (feat, fix, refactor), rebase rebasing, and GitHub PR reviews.',
          filename: '.github/workflows/git_flow.sh',
          lang: 'Bash / Git',
          code: `#!/usr/bin/env bash
# Typical Feature Branch & Rebase Protocol

git checkout -b feat/loan-amortization-rounding
git add services/loan_engine.js tests/loan_engine.test.js
git commit -m "feat(engine): integrate banker rounding on fractional cent splits"

# Sync with remote main before opening Pull Request
git fetch origin main
git rebase origin/main

git push -u origin feat/loan-amortization-rounding
echo "Branch ready for peer review & automated CI actions."`,
          competencies: [
            'Clean Semantic Git Commit Standards',
            'Interactive Rebase Branch History Flattening',
            'Pull Request Code Review Workflows'
          ],
          demoType: 'git_timeline'
        },
        {
          id: 'ui_design',
          label: 'Graphic Design & UI Wireframes',
          projectTag: 'CYBER UI DESIGN SYSTEM',
          techTag: 'DESIGN TOKENS & 8PT GRID SPECIFICATION',
          desc: 'Engineered cohesive cyber-themed UI design tokens specifying color contrasts (WCAG AAA compliant), typography scales, and modular component button kits in Figma.',
          filename: 'design/design_tokens.json',
          lang: 'Design System',
          code: `{
  "color": {
    "background": { "value": "#080C14", "type": "color" },
    "surface": { "value": "rgba(15, 23, 42, 0.72)", "type": "color" },
    "brand_cyan": { "value": "#00F2FE", "type": "color" },
    "brand_blue": { "value": "#4FACFE", "type": "color" }
  },
  "spacing": {
    "grid_unit": { "value": "8px" },
    "card_padding": { "value": "24px" }
  },
  "typography": {
    "font_primary": { "value": "Inter, sans-serif" },
    "font_code": { "value": "'JetBrains Mono', monospace" }
  }
}`,
          competencies: [
            '8-Point Responsive Spacing Grid Geometry',
            'Color Contrast Accessibility Auditing',
            'Systematic Design Token JSON Integration'
          ],
          demoType: 'ui_tokens'
        },
        {
          id: 'automation_tools',
          label: 'Process Automation',
          projectTag: 'DISCORD WEBHOOK INCIDENT DISPATCH',
          techTag: 'JSON WEBHOOK PAYLOAD FORMATTING',
          desc: 'Built lightweight integration scripts dispatching structured rich embed alerts to staff Discord/Slack channels upon critical system events or server degradation.',
          filename: 'webhooks/incident_notifier.js',
          lang: 'Node.js / Webhook',
          code: `// Incident Alert Webhook Dispatcher
async function sendIncidentAlert(ticket) {
  const payload = {
    username: "ITSM Telemetry Sentinel",
    avatar_url: "https://tyrondelacruz.me/assets/profile.jpg",
    embeds: [{
      title: \`🚨 CRITICAL TICKET #\${ticket.id}: \${ticket.title}\`,
      color: 0xF43F5E, // Rose 500
      fields: [
        { name: "Severity", value: ticket.priority, inline: true },
        { name: "Assigned To", value: ticket.agent, inline: true },
        { name: "Affected Node", value: ticket.node, inline: true }
      ],
      timestamp: new Date().toISOString()
    }]
  };

  await fetch(process.env.DISCORD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
}`,
          competencies: [
            'Webhook Outbound HTTP Payload Serialization',
            'Incident Escalation Multi-Platform Relays',
            'Structured JSON Embed Formatting'
          ],
          demoType: 'webhook_dispatcher'
        }
      ]
    }
  };

  // State Management
  let currentCatKey = 'web_dev';
  let currentSubId = 'html5';

  // DOM Elements
  const modal = document.getElementById('skill-example-modal');
  const modalContainer = document.getElementById('skill-modal-container');
  const closeBtn = document.getElementById('skill-modal-close');
  const footerCloseBtn = document.getElementById('skill-modal-footer-close');
  const titleEl = document.getElementById('skill-modal-title');
  const badgeEl = document.getElementById('skill-modal-badge');
  const iconEl = document.getElementById('skill-modal-icon');
  const iconContainer = document.getElementById('skill-modal-icon-container');
  const tabsList = document.getElementById('skill-subtabs-list');
  const projectTagEl = document.getElementById('skill-example-project-tag');
  const descEl = document.getElementById('skill-example-desc');
  const filenameEl = document.getElementById('skill-code-filename');
  const langEl = document.getElementById('skill-code-lang');
  const codeContentEl = document.getElementById('skill-code-content');
  const copyBtn = document.getElementById('skill-copy-btn');
  const copyText = document.getElementById('skill-copy-text');
  const interactiveArea = document.getElementById('skill-demo-interactive-area');
  const competencyList = document.getElementById('skill-competency-list');
  const projectLink = document.getElementById('skill-modal-project-link');
  const projectLinkText = document.getElementById('skill-modal-project-link-text');

  // Open Modal Function
  function openSkillModal(catKey, subId) {
    if (!SKILL_DATA[catKey]) catKey = 'web_dev';
    currentCatKey = catKey;
    const cat = SKILL_DATA[catKey];

    // Pick first subskill if subId is not found
    const foundSub = cat.subSkills.find(s => s.id === subId);
    currentSubId = foundSub ? foundSub.id : cat.subSkills[0].id;

    // Set Category Header
    if (titleEl) titleEl.textContent = cat.title;
    if (badgeEl) {
      badgeEl.textContent = cat.proficiency + ' Proficiency';
      badgeEl.style.borderColor = cat.color + '40';
      badgeEl.style.color = cat.color;
    }
    if (iconEl) iconEl.className = `fas ${cat.icon} text-lg`;
    if (iconContainer) {
      iconContainer.style.color = cat.color;
      iconContainer.style.borderColor = cat.color + '50';
      iconContainer.style.backgroundColor = cat.color + '15';
    }

    if (projectLink) projectLink.href = cat.projectLink;
    if (projectLinkText) projectLinkText.textContent = cat.projectText;

    // Render Subskill Tabs
    renderTabs();

    // Render Selected Subskill Content
    renderSubskillContent();

    // Show Modal
    if (modal) {
      modal.classList.remove('opacity-0', 'pointer-events-none');
      modal.classList.add('opacity-100', 'pointer-events-auto');
      if (modalContainer) {
        modalContainer.classList.remove('scale-95');
        modalContainer.classList.add('scale-100');
      }
      document.body.style.overflow = 'hidden';
    }
  }

  // Close Modal Function
  function closeSkillModal() {
    if (modal) {
      modal.classList.add('opacity-0', 'pointer-events-none');
      modal.classList.remove('opacity-100', 'pointer-events-auto');
      if (modalContainer) {
        modalContainer.classList.add('scale-95');
        modalContainer.classList.remove('scale-100');
      }
      document.body.style.overflow = '';
    }
  }

  // Render Subskill Navigation Tabs
  function renderTabs() {
    if (!tabsList) return;
    tabsList.innerHTML = '';
    const cat = SKILL_DATA[currentCatKey];

    cat.subSkills.forEach(sub => {
      const btn = document.createElement('button');
      btn.type = 'button';
      const isActive = sub.id === currentSubId;
      btn.className = `px-3 py-1 rounded-lg text-xs font-mono transition-all shrink-0 flex items-center gap-1.5 ${
        isActive
          ? 'bg-slate-800 text-white border font-semibold shadow-sm'
          : 'text-slate-400 hover:text-white bg-slate-900/60 border border-transparent hover:border-white/10'
      }`;
      btn.style.borderColor = isActive ? cat.color : '';
      btn.innerHTML = `<span>${sub.label}</span>`;
      btn.addEventListener('click', () => {
        currentSubId = sub.id;
        renderTabs();
        renderSubskillContent();
      });
      tabsList.appendChild(btn);
    });
  }

  // Render Subskill Details & Interactive Playground
  function renderSubskillContent() {
    const cat = SKILL_DATA[currentCatKey];
    const sub = cat.subSkills.find(s => s.id === currentSubId) || cat.subSkills[0];

    if (projectTagEl) projectTagEl.textContent = `PROJECT INTEGRATION: ${sub.projectTag}`;
    if (descEl) descEl.textContent = sub.desc;
    if (filenameEl) filenameEl.textContent = sub.filename;
    if (langEl) {
      langEl.textContent = sub.lang;
      langEl.style.color = cat.color;
      langEl.style.backgroundColor = cat.color + '18';
    }
    if (codeContentEl) codeContentEl.textContent = sub.code;

    // Reset Copy Button
    if (copyText) copyText.textContent = 'Copy';

    // Render 3 Key Competencies
    if (competencyList) {
      competencyList.innerHTML = '';
      sub.competencies.forEach(comp => {
        const item = document.createElement('div');
        item.className = 'p-2.5 rounded-lg bg-slate-950/70 border border-white/5 text-[11px] font-mono flex items-start gap-2';
        item.innerHTML = `<i class="fas fa-check-circle text-xs mt-0.5" style="color: ${cat.color}"></i><span class="text-slate-300">${comp}</span>`;
        competencyList.appendChild(item);
      });
    }

    // Render the Interactive Demo Sandbox for this subskill
    renderInteractiveDemo(sub.demoType, cat.color);
  }

  // Interactive Demonstration Sandbox Builder
  function renderInteractiveDemo(demoType, themeColor) {
    if (!interactiveArea) return;
    interactiveArea.innerHTML = '';

    switch (demoType) {
      case 'loan_calc': {
        interactiveArea.innerHTML = `
          <div class="p-3 bg-slate-950 rounded-lg border border-white/5 space-y-3 font-mono">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div>
                <label class="text-[11px] text-slate-400 block mb-1">Principal (₱):</label>
                <input type="number" id="demo-loan-p" value="50000" step="5000" class="w-full bg-slate-900 border border-slate-700 px-2.5 py-1.5 rounded text-white text-xs">
              </div>
              <div>
                <label class="text-[11px] text-slate-400 block mb-1">Term (Months):</label>
                <select id="demo-loan-t" class="w-full bg-slate-900 border border-slate-700 px-2.5 py-1.5 rounded text-white text-xs">
                  <option value="3">3 Months</option>
                  <option value="6" selected>6 Months</option>
                  <option value="12">12 Months</option>
                </select>
              </div>
              <div>
                <label class="text-[11px] text-slate-400 block mb-1">Interest Rate / Mo:</label>
                <input type="text" value="3.5%" disabled class="w-full bg-slate-900/50 border border-slate-800 px-2.5 py-1.5 rounded text-slate-400 text-xs">
              </div>
            </div>
            <div class="flex items-center justify-between pt-1">
              <button type="button" id="demo-run-calc" class="px-3 py-1.5 rounded text-xs font-semibold text-[#080C14] transition hover:opacity-90 flex items-center gap-1.5" style="background-color: ${themeColor}">
                <i class="fas fa-calculator"></i> Compute Amortization
              </button>
              <span id="demo-calc-status" class="text-[11px] text-slate-400">Ready</span>
            </div>
            <div id="demo-calc-result" class="p-2.5 rounded bg-slate-900/90 border border-cyan-500/30 text-xs text-white grid grid-cols-3 gap-2 text-center">
              <div><span class="text-[10px] text-slate-400 block">Monthly Installment</span><strong class="text-cyan-300 text-sm">₱9,833.33</strong></div>
              <div><span class="text-[10px] text-slate-400 block">Total Interest</span><strong class="text-purple-300 text-sm">₱9,000.00</strong></div>
              <div><span class="text-[10px] text-slate-400 block">Total Repayment</span><strong class="text-emerald-300 text-sm">₱59,000.00</strong></div>
            </div>
          </div>
        `;
        const runBtn = document.getElementById('demo-run-calc');
        if (runBtn) {
          runBtn.addEventListener('click', () => {
            const p = parseFloat(document.getElementById('demo-loan-p').value) || 50000;
            const m = parseInt(document.getElementById('demo-loan-t').value) || 6;
            const rate = 0.035;
            const totalInterest = p * rate * m;
            const totalRepay = p + totalInterest;
            const monthly = totalRepay / m;
            document.getElementById('demo-calc-result').innerHTML = `
              <div><span class="text-[10px] text-slate-400 block">Monthly Installment</span><strong class="text-cyan-300 text-sm">₱${monthly.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong></div>
              <div><span class="text-[10px] text-slate-400 block">Total Interest</span><strong class="text-purple-300 text-sm">₱${totalInterest.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong></div>
              <div><span class="text-[10px] text-slate-400 block">Total Repayment</span><strong class="text-emerald-300 text-sm">₱${totalRepay.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong></div>
            `;
            document.getElementById('demo-calc-status').textContent = 'Calculated in 0.4ms';
          });
        }
        break;
      }

      case 'api_tester': {
        interactiveArea.innerHTML = `
          <div class="p-3 bg-slate-950 rounded-lg border border-white/5 space-y-3 font-mono">
            <div class="flex items-center gap-2">
              <span class="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-[11px] font-bold">GET</span>
              <input type="text" id="demo-api-url" value="/api/v1/tickets?status=open&limit=3" readonly class="flex-1 bg-slate-900 border border-slate-700 px-2.5 py-1 text-xs text-slate-200 rounded">
              <button type="button" id="demo-api-send" class="px-3 py-1 rounded text-xs font-semibold text-[#080C14] hover:opacity-90" style="background-color: ${themeColor}">
                Send Call
              </button>
            </div>
            <div class="bg-slate-900/90 rounded border border-white/10 p-2.5 text-[11px] space-y-1">
              <div class="flex items-center justify-between text-slate-400 text-[10px] border-b border-white/5 pb-1">
                <span>Response: <strong class="text-emerald-400" id="demo-api-code">200 OK</strong></span>
                <span>Latency: <strong class="text-cyan-300" id="demo-api-lat">24ms</strong></span>
              </div>
              <pre id="demo-api-res" class="text-cyan-200 text-[11px] max-h-36 overflow-auto scrollbar-thin mt-1 leading-tight">{
  "status": "success",
  "count": 2,
  "data": [
    { "id": 1042, "subject": "Wi-Fi Gateway Handshake Timeout", "priority": "HIGH", "status": "OPEN" },
    { "id": 1043, "subject": "Printer Spooler Buffer Overrun", "priority": "LOW", "status": "OPEN" }
  ]
}</pre>
            </div>
          </div>
        `;
        const sendBtn = document.getElementById('demo-api-send');
        if (sendBtn) {
          sendBtn.addEventListener('click', () => {
            const lat = Math.floor(18 + Math.random() * 25);
            document.getElementById('demo-api-lat').textContent = `${lat}ms`;
            const codeEl = document.getElementById('demo-api-code');
            codeEl.textContent = '200 OK';
            codeEl.className = 'text-emerald-400';
            const resEl = document.getElementById('demo-api-res');
            resEl.textContent = JSON.stringify({
              timestamp: new Date().toISOString(),
              status: "success",
              auth: "Bearer verified",
              count: 3,
              data: [
                { id: 1044, subject: "Core Switch Gi0/1 CRC Error Check", priority: "CRITICAL", status: "OPEN" },
                { id: 1042, subject: "Wi-Fi Gateway Handshake Timeout", priority: "HIGH", status: "OPEN" },
                { id: 1043, subject: "Printer Spooler Buffer Overrun", priority: "LOW", status: "OPEN" }
              ]
            }, null, 2);
          });
        }
        break;
      }

      case 'sql_query': {
        interactiveArea.innerHTML = `
          <div class="p-3 bg-slate-950 rounded-lg border border-white/5 space-y-2.5 font-mono">
            <div class="flex items-center justify-between">
              <span class="text-xs text-slate-300 font-semibold"><i class="fas fa-database text-purple-400 mr-1.5"></i>Execute Active Query</span>
              <button type="button" id="demo-sql-run" class="px-3 py-1 rounded text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition">
                <i class="fas fa-play mr-1"></i> Run Query
              </button>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-[11px] text-left border-collapse">
                <thead>
                  <tr class="bg-slate-900 border-b border-white/10 text-slate-400">
                    <th class="p-1.5">client_id</th>
                    <th class="p-1.5">full_name</th>
                    <th class="p-1.5">principal</th>
                    <th class="p-1.5">total_repaid</th>
                    <th class="p-1.5">balance</th>
                    <th class="p-1.5">status</th>
                  </tr>
                </thead>
                <tbody id="demo-sql-tbody" class="divide-y divide-white/5 text-slate-200">
                  <tr>
                    <td class="p-1.5 text-cyan-300">CL-101</td>
                    <td class="p-1.5">Maria Santos</td>
                    <td class="p-1.5">₱45,000</td>
                    <td class="p-1.5 text-emerald-400">₱45,000</td>
                    <td class="p-1.5">₱0</td>
                    <td class="p-1.5"><span class="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px]">SETTLED</span></td>
                  </tr>
                  <tr>
                    <td class="p-1.5 text-cyan-300">CL-102</td>
                    <td class="p-1.5">Juan Dela Cruz</td>
                    <td class="p-1.5">₱80,000</td>
                    <td class="p-1.5 text-amber-400">₱35,000</td>
                    <td class="p-1.5 text-rose-300 font-bold">₱45,000</td>
                    <td class="p-1.5"><span class="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px]">ACTIVE</span></td>
                  </tr>
                  <tr>
                    <td class="p-1.5 text-cyan-300">CL-103</td>
                    <td class="p-1.5">Elena Ramos</td>
                    <td class="p-1.5">₱25,000</td>
                    <td class="p-1.5 text-amber-400">₱10,000</td>
                    <td class="p-1.5 text-rose-300 font-bold">₱15,000</td>
                    <td class="p-1.5"><span class="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px]">ACTIVE</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-[10px] text-slate-400 flex items-center justify-between pt-1">
              <span id="demo-sql-time">3 rows selected in 3.8ms</span>
              <span class="text-purple-400">InnoDB Buffer Pool Cache: HIT</span>
            </div>
          </div>
        `;
        const runBtn = document.getElementById('demo-sql-run');
        if (runBtn) {
          runBtn.addEventListener('click', () => {
            const time = (2.1 + Math.random() * 2.5).toFixed(1);
            document.getElementById('demo-sql-time').textContent = `3 rows selected in ${time}ms (Query Re-executed)`;
          });
        }
        break;
      }

      case 'subnet_calc': {
        interactiveArea.innerHTML = `
          <div class="p-3 bg-slate-950 rounded-lg border border-white/5 space-y-3 font-mono">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-xs text-slate-300">Select CIDR Mask:</span>
              <div class="flex gap-1.5">
                <button type="button" class="demo-cidr-btn px-2.5 py-1 rounded text-xs bg-emerald-500 text-[#080C14] font-bold" data-cidr="26">/26</button>
                <button type="button" class="demo-cidr-btn px-2.5 py-1 rounded text-xs bg-slate-800 text-slate-300 hover:text-white" data-cidr="27">/27</button>
                <button type="button" class="demo-cidr-btn px-2.5 py-1 rounded text-xs bg-slate-800 text-slate-300 hover:text-white" data-cidr="28">/28</button>
                <button type="button" class="demo-cidr-btn px-2.5 py-1 rounded text-xs bg-slate-800 text-slate-300 hover:text-white" data-cidr="30">/30 (P2P)</button>
              </div>
            </div>
            <div id="demo-subnet-output" class="p-2.5 bg-slate-900 rounded border border-emerald-500/30 text-xs grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-slate-200">
              <div><span class="text-[10px] text-slate-400 block">Subnet Mask</span><strong class="text-emerald-300">255.255.255.192</strong></div>
              <div><span class="text-[10px] text-slate-400 block">Usable Hosts</span><strong class="text-cyan-300">62 Hosts</strong></div>
              <div><span class="text-[10px] text-slate-400 block">Usable Range</span><strong class="text-slate-200 text-[11px]">.1 - .62</strong></div>
              <div><span class="text-[10px] text-slate-400 block">Broadcast IP</span><strong class="text-purple-300">192.168.10.63</strong></div>
            </div>
          </div>
        `;
        const cidrData = {
          '26': { mask: '255.255.255.192', hosts: '62 Hosts', range: '.1 - .62', bcast: '192.168.10.63' },
          '27': { mask: '255.255.255.224', hosts: '30 Hosts', range: '.1 - .30', bcast: '192.168.10.31' },
          '28': { mask: '255.255.255.240', hosts: '14 Hosts', range: '.1 - .14', bcast: '192.168.10.15' },
          '30': { mask: '255.255.255.252', hosts: '2 Hosts', range: '.1 - .2', bcast: '192.168.10.3' }
        };
        const btns = interactiveArea.querySelectorAll('.demo-cidr-btn');
        btns.forEach(b => {
          b.addEventListener('click', () => {
            btns.forEach(x => {
              x.className = 'demo-cidr-btn px-2.5 py-1 rounded text-xs bg-slate-800 text-slate-300 hover:text-white';
            });
            b.className = 'demo-cidr-btn px-2.5 py-1 rounded text-xs bg-emerald-500 text-[#080C14] font-bold';
            const c = b.dataset.cidr;
            const d = cidrData[c];
            document.getElementById('demo-subnet-output').innerHTML = `
              <div><span class="text-[10px] text-slate-400 block">Subnet Mask</span><strong class="text-emerald-300">${d.mask}</strong></div>
              <div><span class="text-[10px] text-slate-400 block">Usable Hosts</span><strong class="text-cyan-300">${d.hosts}</strong></div>
              <div><span class="text-[10px] text-slate-400 block">Usable Range</span><strong class="text-slate-200 text-[11px]">${d.range}</strong></div>
              <div><span class="text-[10px] text-slate-400 block">Broadcast IP</span><strong class="text-purple-300">${d.bcast}</strong></div>
            `;
          });
        });
        break;
      }

      case 'sqli_sandbox': {
        interactiveArea.innerHTML = `
          <div class="p-3 bg-slate-950 rounded-lg border border-white/5 space-y-3 font-mono">
            <div>
              <label class="text-xs text-slate-300 block mb-1">Simulate User Input Payload:</label>
              <div class="flex gap-2">
                <input type="text" id="demo-sqli-input" value="' OR '1'='1" class="flex-1 bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs text-rose-300 rounded">
                <button type="button" id="demo-test-sqli" class="px-3 py-1.5 rounded text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500">
                  Test Sanitization
                </button>
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div class="p-2.5 rounded bg-rose-950/40 border border-rose-500/30">
                <span class="text-[10px] text-rose-400 font-bold block mb-1">❌ Raw Concat Query (VULNERABLE)</span>
                <code id="demo-raw-res" class="text-rose-200 text-[10.5px] block break-all">SELECT * FROM users WHERE user = '' OR '1'='1'</code>
                <span class="text-[10px] text-rose-400 mt-1 block">Status: SQL INJECTION EXECUTED</span>
              </div>
              <div class="p-2.5 rounded bg-emerald-950/40 border border-emerald-500/30">
                <span class="text-[10px] text-emerald-400 font-bold block mb-1">✅ PDO Prepared Statement (SECURE)</span>
                <code id="demo-secure-res" class="text-emerald-200 text-[10.5px] block break-all">Executed: SELECT * FROM users WHERE user = :user [bound as literal string]</code>
                <span class="text-[10px] text-emerald-400 mt-1 block">Status: NEUTRALIZED AS LITERAL STRING</span>
              </div>
            </div>
          </div>
        `;
        const testBtn = document.getElementById('demo-test-sqli');
        if (testBtn) {
          testBtn.addEventListener('click', () => {
            const val = document.getElementById('demo-sqli-input').value;
            document.getElementById('demo-raw-res').textContent = `SELECT * FROM users WHERE user = '${val}'`;
            document.getElementById('demo-secure-res').textContent = `Param :user = "${val}" (Treated as 0 records match)`;
          });
        }
        break;
      }

      case 'post_tree': {
        interactiveArea.innerHTML = `
          <div class="p-3 bg-slate-950 rounded-lg border border-white/5 space-y-3 font-mono">
            <div>
              <label class="text-xs text-slate-300 block mb-1">Select Hardware Symptom:</label>
              <select id="demo-symptom-sel" class="w-full bg-slate-900 border border-slate-700 p-2 rounded text-xs text-amber-300">
                <option value="dram">Power On, Fans Spin, Solid Motherboard DRAM Amber LED</option>
                <option value="vga">1 Long Beep, 2 Short Beeps (Display Port Dark)</option>
                <option value="psu">Rapid Continuous Beeps, System Shuts Down in 3s</option>
                <option value="bsod">BSOD: INACCESSIBLE_BOOT_DEVICE on Windows Boot</option>
              </select>
            </div>
            <div id="demo-diag-output" class="p-3 rounded bg-slate-900/90 border border-amber-500/30 text-xs space-y-1.5 text-slate-200">
              <div class="text-amber-400 font-bold flex items-center gap-1.5">
                <i class="fas fa-triangle-exclamation"></i>
                <span>Diagnosis: DDR4/DDR5 Memory Training Failure</span>
              </div>
              <p class="text-[11px] text-slate-300">
                <strong>Action:</strong> Disconnect AC power, discharge capacitors, remove secondary stick, reseat primary module into Slot A2. If booting succeeds, test secondary stick individually to isolate bad chip.
              </p>
            </div>
          </div>
        `;
        const sel = document.getElementById('demo-symptom-sel');
        const diagData = {
          dram: {
            title: 'DDR4/DDR5 Memory Training Failure',
            action: 'Disconnect AC power, discharge capacitors, remove secondary stick, reseat primary module into Slot A2. If booting succeeds, test secondary stick individually to isolate bad chip.'
          },
          vga: {
            title: 'GPU Video Handshake or PCIe Rail Fault',
            action: 'Reseat discrete PCIe graphics card, verify 8-pin PCIe power cables are seated with click latch, test integrated HDMI output if CPU has APU support.'
          },
          psu: {
            title: 'Power Supply Rail Under-Voltage Trip (OCP/UVP)',
            action: 'Perform paperclip test on 24-pin ATX green wire (PS_ON#) to test fan spin without motherboard load. Test 12V rails with multimeter (must read +11.4V to +12.6V).'
          },
          bsod: {
            title: 'Storage AHCI/NVMe Controller Driver or BCD Store Loss',
            action: 'Enter UEFI BIOS to confirm drive shows in NVMe configuration. Boot Windows RE USB media and run "bootrec /rebuildbcd" and "dism /Image:C:\\ /RestoreHealth".'
          }
        };
        if (sel) {
          sel.addEventListener('change', () => {
            const d = diagData[sel.value];
            document.getElementById('demo-diag-output').innerHTML = `
              <div class="text-amber-400 font-bold flex items-center gap-1.5">
                <i class="fas fa-triangle-exclamation"></i>
                <span>Diagnosis: ${d.title}</span>
              </div>
              <p class="text-[11px] text-slate-300">
                <strong>Action:</strong> ${d.action}
              </p>
            `;
          });
        }
        break;
      }

      default: {
        // Universal Terminal Runner Demo
        interactiveArea.innerHTML = `
          <div class="p-3 bg-slate-950 rounded-lg border border-white/5 space-y-2.5 font-mono">
            <div class="flex items-center justify-between">
              <span class="text-xs text-slate-300 font-semibold"><i class="fas fa-terminal text-cyan-400 mr-1.5"></i>Live Execution Trace</span>
              <button type="button" id="demo-generic-run" class="px-3 py-1 rounded text-xs font-semibold text-[#080C14] hover:opacity-90" style="background-color: ${themeColor}">
                <i class="fas fa-play mr-1"></i> Run Simulation
              </button>
            </div>
            <pre id="demo-generic-output" class="p-2.5 bg-slate-900 rounded border border-white/10 text-[11px] text-cyan-200 max-h-32 overflow-auto scrollbar-thin leading-relaxed">
[INIT] Initializing runtime simulation sandbox...
[OK] Environment loaded. Click "Run Simulation" above to execute.</pre>
          </div>
        `;
        const runBtn = document.getElementById('demo-generic-run');
        if (runBtn) {
          runBtn.addEventListener('click', () => {
            const out = document.getElementById('demo-generic-output');
            out.textContent = `[PROCESS START] ${new Date().toLocaleTimeString()}\n` +
              `> Loading dependency assets...\n` +
              `> Running test assertion validation...\n` +
              `> Verified status: 100% PASS (Zero Exceptions)\n` +
              `[SUCCESS] Simulation completed in 14ms.`;
          });
        }
      }
    }
  }

  // Copy Code Functionality
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = codeContentEl ? codeContentEl.textContent : '';
      if (!code) return;
      navigator.clipboard.writeText(code).then(() => {
        if (copyText) copyText.textContent = 'Copied!';
        setTimeout(() => {
          if (copyText) copyText.textContent = 'Copy';
        }, 2000);
      }).catch(() => {
        if (copyText) copyText.textContent = 'Failed';
      });
    });
  }

  // Modal Close Events
  if (closeBtn) closeBtn.addEventListener('click', closeSkillModal);
  if (footerCloseBtn) footerCloseBtn.addEventListener('click', closeSkillModal);

  // Close when clicking modal backdrop
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeSkillModal();
      }
    });
  }

  // Close with Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('pointer-events-none')) {
      closeSkillModal();
    }
  });

  // Attach Event Listeners to Skill Cards & Tag Pills in the DOM
  function attachSkillTriggers() {
    // 1. Skill Card Triggers
    const cards = document.querySelectorAll('.skill-card-trigger');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        // If clicking a sub-pill inside the card, that has its own listener
        if (e.target.closest('.skill-tag-pill')) return;
        const cat = card.getAttribute('data-category');
        if (cat) openSkillModal(cat);
      });
      // Accessibility keyboard enter / space support
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (e.target.closest('.skill-tag-pill')) return;
          e.preventDefault();
          const cat = card.getAttribute('data-category');
          if (cat) openSkillModal(cat);
        }
      });
    });

    // 2. Individual Sub-Skill Tag Pills
    const pills = document.querySelectorAll('.skill-tag-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        const cat = pill.getAttribute('data-category');
        const sub = pill.getAttribute('data-sub');
        if (cat) openSkillModal(cat, sub);
      });
    });
  }

  // Expose globally for inline calls if needed
  window.openSkillModal = openSkillModal;
  window.closeSkillModal = closeSkillModal;

  // Initialize on DOMContentLoaded or immediate if already ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachSkillTriggers);
  } else {
    attachSkillTriggers();
  }
})();
